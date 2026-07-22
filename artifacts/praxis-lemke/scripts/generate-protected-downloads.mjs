import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const protectedRoot = path.join(projectRoot, "public", "protected");
const outputFile = path.join(projectRoot, "src", "data", "protected-downloads.json");
const ROOT_CATEGORY = "Weitere Dokumente";

const collator = new Intl.Collator("de-DE", { sensitivity: "base", numeric: true });

function toPosixPath(filePath) {
  return filePath.split(path.sep).join("/");
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB"];
  let size = bytes / 1024;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }
  return `${size.toLocaleString("de-DE", { maximumFractionDigits: size >= 10 ? 0 : 1 })} ${units[unitIndex]}`;
}

function readableName(filename) {
  const parsed = path.parse(filename);
  return parsed.name.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}

function fileFormat(filename) {
  const extension = path.extname(filename).replace(/^\./, "");
  return extension ? extension.toUpperCase() : "DATEI";
}

async function walk(dir, base = "") {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const absolutePath = path.join(dir, entry.name);
    const relativePath = path.join(base, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(absolutePath, relativePath)));
    } else if (entry.isFile()) {
      const fileStat = await stat(absolutePath);
      const normalizedPath = toPosixPath(relativePath);
      const category = base ? toPosixPath(base) : ROOT_CATEGORY;
      files.push({
        category,
        label: readableName(entry.name),
        format: fileFormat(entry.name),
        size: fileStat.size,
        sizeLabel: formatBytes(fileStat.size),
        path: normalizedPath,
      });
    }
  }
  return files;
}

const files = await walk(protectedRoot);
const categoryMap = new Map();

for (const file of files) {
  if (!categoryMap.has(file.category)) categoryMap.set(file.category, []);
  categoryMap.get(file.category).push({
    label: file.label,
    format: file.format,
    size: file.size,
    sizeLabel: file.sizeLabel,
    path: file.path,
  });
}

const categories = [...categoryMap.entries()]
  .map(([category, categoryFiles]) => ({
    category,
    files: categoryFiles.sort((a, b) => collator.compare(a.label, b.label)),
  }))
  .sort((a, b) => {
    if (a.category === ROOT_CATEGORY) return 1;
    if (b.category === ROOT_CATEGORY) return -1;
    return collator.compare(a.category, b.category);
  });

await mkdir(path.dirname(outputFile), { recursive: true });
await writeFile(`${outputFile}`, `${JSON.stringify(categories, null, 2)}\n`, "utf8");
console.log(`Generated ${path.relative(projectRoot, outputFile)} with ${files.length} protected download(s).`);

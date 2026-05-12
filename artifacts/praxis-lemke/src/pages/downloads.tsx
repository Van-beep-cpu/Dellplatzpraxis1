import React from "react";
import { Lock, FileDown, Eye, EyeOff, ExternalLink, ClipboardList, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";

const PASSWORD = "praxis2024";

const digitalForms = [
  {
    label: "Datenschutzerklärung",
    desc: "Füllen Sie die Datenschutzerklärung bequem vor Ihrem ersten Termin online aus.",
    url: "https://app.patientify.io/de/anamnese/start/a68b697e78a80bb1b7ce9cdbc8ca3b07",
    icon: <ClipboardList size={24} />,
    color: "bg-primary/10 text-primary",
  },
  {
    label: "Weitere digitale Patientenformulare",
    desc: "Zusätzliche Formulare für Ihre Behandlung – direkt online ausfüllbar.",
    url: "https://app.patientify.io/de/anamnese/start/2f1c471de4d431a80c3c8a6e133f1639",
    icon: <FileDown size={24} />,
    color: "bg-secondary/10 text-secondary",
  },
];

const pdfDownloads = [
  {
    label: "Behandlungsvertrag",
    desc: "Grundlage unserer gemeinsamen therapeutischen Arbeit.",
    filename: "behandlungsvertrag.pdf",
  },
  {
    label: "Einwilligungserklärung E-Mail-Kommunikation",
    desc: "Erlaubnis zur sicheren Kommunikation per E-Mail.",
    filename: "einverständniserklärung.pdf.pdf",
  },
];

const protectedDocs = [
  {
    label: "Anamnesebogen (ausgefüllt)",
    desc: "Ihr persönlicher Anamnesebogen zur Vorbereitung.",
    filename: "Anamnesebogen_persoenlich.pdf",
  },
  {
    label: "Schweigepflichtsentbindung",
    desc: "Für die Kommunikation mit anderen behandelnden Ärzten.",
    filename: "Schweigepflichtsentbindung.pdf",
  },
  {
    label: "Therapieplan",
    desc: "Ihr individueller Behandlungsplan.",
    filename: "Therapieplan.pdf",
  },
];

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [input, setInput] = React.useState("");
  const [error, setError] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setInput("");
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm p-8 max-w-sm mx-auto text-center">
      <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-accent">
        <Lock size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">Geschützter Bereich</h3>
      <p className="text-foreground/60 text-sm mb-7 leading-relaxed">
        Diese Dokumente sind nur für Patienten zugänglich. Bitte geben Sie das Ihnen mitgeteilte Passwort ein.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Passwort eingeben"
            autoComplete="current-password"
            className={`w-full px-4 py-3 rounded-xl border text-base outline-none transition-colors pr-11 ${
              error
                ? "border-red-400 bg-red-50 focus:border-red-400"
                : "border-border focus:border-primary bg-background"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground/70 transition-colors"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {error && (
          <p className="text-sm text-red-500">Falsches Passwort. Bitte versuchen Sie es erneut.</p>
        )}
        <Button type="submit" className="w-full h-12 rounded-xl text-base bg-accent hover:bg-accent/90 text-white">
          Zugang öffnen
        </Button>
      </form>
      <p className="text-xs text-foreground/40 mt-5">
        Das Passwort erhalten Sie bei Ihrer ersten Vorstellung in der Praxis.
      </p>
    </div>
  );
}

export default function Downloads() {
  const [unlocked, setUnlocked] = React.useState(false);

  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* Page Header */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <FadeIn className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-5">
            <FileDown size={15} />
            Patientenbereich
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            Formulare & Downloads
          </h1>
          <p className="text-foreground/60 max-w-xl mx-auto leading-relaxed">
            Digitale Formulare, Dokumente zum Herunterladen und geschützte Inhalte für Ihre Behandlung.
          </p>
        </FadeIn>
      </div>

      {/* ── Section 1: Digitale Formulare ── */}
      <section className="bg-light border-y border-border py-16 mb-14">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn className="mb-10">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <ClipboardList size={17} />
              </div>
              <h2 className="text-xl font-semibold">Digitale Formulare</h2>
            </div>
            <p className="text-sm text-foreground/55 ml-11">
              Füllen Sie unsere Formulare bequem online aus – vor Ihrem Termin oder von zuhause.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-5 max-w-3xl">
            {digitalForms.map((form, i) => (
              <FadeIn key={form.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-border/70 p-6 hover:shadow-md hover:border-primary/30 transition-all duration-200 group flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${form.color}`}>
                    {form.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {form.label}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-5 flex-1">
                    {form.desc}
                  </p>
                  <a
                    href={form.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors self-start"
                  >
                    Formular öffnen
                    <ExternalLink size={14} />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: PDF Downloads ── */}
      <section className="py-4 mb-14">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn className="mb-8">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <FileDown size={17} />
              </div>
              <h2 className="text-xl font-semibold">PDF-Dokumente</h2>
            </div>
            <p className="text-sm text-foreground/55 ml-11">
              Laden Sie die folgenden Dokumente herunter und bringen Sie diese unterschrieben mit.
            </p>
          </FadeIn>

          <div className="max-w-3xl space-y-3">
            {pdfDownloads.map((doc, i) => (
              <FadeIn key={doc.label} delay={i * 0.08}>
                <div className="flex items-center justify-between gap-4 bg-white border border-border/70 rounded-2xl px-6 py-5 hover:shadow-md hover:border-secondary/30 transition-all duration-200 group">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                      <FileDown size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-secondary transition-colors">
                        {doc.label}
                      </p>
                      <p className="text-sm text-foreground/55">{doc.desc}</p>
                    </div>
                  </div>
                  <a
                    href={`/downloads/${doc.filename}`}
                    download
                    className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium bg-light text-secondary px-3 py-1.5 rounded-lg hover:bg-secondary/10 transition-colors"
                  >
                    <FileDown size={14} />
                    PDF
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Geschützter Patientenbereich ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn className="mb-8">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <Shield size={17} />
              </div>
              <h2 className="text-xl font-semibold">Geschützter Patientenbereich</h2>
            </div>
            <p className="text-sm text-foreground/55 ml-11">
              Persönliche Dokumente – nur für eingeloggte Patienten zugänglich.
            </p>
          </FadeIn>

          <div className="max-w-3xl">
            {!unlocked ? (
              <FadeIn>
                <PasswordGate onUnlock={() => setUnlocked(true)} />
              </FadeIn>
            ) : (
              <div className="space-y-3">
                <FadeIn className="flex items-center gap-2 mb-5 text-sm text-primary font-medium">
                  <Shield size={15} />
                  Zugang gewährt – Ihre persönlichen Dokumente
                </FadeIn>
                {protectedDocs.map((doc, i) => (
                  <FadeIn key={doc.label} delay={i * 0.08}>
                    <div className="flex items-center justify-between gap-4 bg-white border border-border/70 rounded-2xl px-6 py-5 hover:shadow-md hover:border-accent/30 transition-all duration-200 group">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                          <FileDown size={20} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                            {doc.label}
                          </p>
                          <p className="text-sm text-foreground/55">{doc.desc}</p>
                        </div>
                      </div>
                      <a
                        href={`/protected/${doc.filename}`}
                        download
                        className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium bg-light text-accent px-3 py-1.5 rounded-lg hover:bg-accent/10 transition-colors"
                      >
                        <FileDown size={14} />
                        PDF
                      </a>
                    </div>
                  </FadeIn>
                ))}
                <FadeIn delay={0.3} className="pt-2">
                  <button
                    onClick={() => setUnlocked(false)}
                    className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors"
                  >
                    Abmelden
                  </button>
                </FadeIn>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

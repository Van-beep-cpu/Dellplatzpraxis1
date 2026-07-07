import { FadeIn } from "@/components/FadeIn";

const impressumSections = [
  {
    title: "Praxisinhaber",
    content: <p>Kalle Lemke</p>,
  },
  {
    title: "Anschrift",
    content: (
      <address className="not-italic leading-relaxed">
        Grünstraße 17
        <br />
        47051 Duisburg
      </address>
    ),
  },
  {
    title: "Kontakt",
    content: (
      <p>
        <a
          href="mailto:info@dellplatzpraxis.de"
          className="text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
        >
          info@dellplatzpraxis.de
        </a>
      </p>
    ),
  },
  {
    title: "Berufsbezeichnung und berufsrechtliche Regelungen",
    content: <p>Arzt</p>,
  },
  {
    title: "Zuständige Kammer",
    content: <p>Ärztekammer Nordrhein</p>,
  },
  {
    title: "Umsatzsteuer-Identifikationsnummer",
    content: <p>Keine USt-IdNr. vorhanden</p>,
  },
];

export default function Impressum() {
  return (
    <>
      <section
        aria-labelledby="impressum-heading"
        className="relative overflow-hidden bg-gradient-to-br from-warm via-background to-background pt-28 pb-10 md:pt-36 md:pb-14"
      >
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-primary/70">
                Rechtliche Angaben
              </p>
              <h1
                id="impressum-heading"
                className="mb-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
              >
                Impressum
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-foreground/65 md:text-lg">
                Angaben gemäß den gesetzlichen Informationspflichten für die
                Dellplatzpraxis.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <main className="bg-background pb-20 pt-8 md:pb-28 md:pt-12">
        <section
          aria-label="Impressumsangaben"
          className="container mx-auto px-4 md:px-8"
        >
          <FadeIn>
            <div className="max-w-3xl rounded-[2rem] border border-border/70 bg-white/85 p-6 shadow-sm backdrop-blur-sm md:p-10">
              <dl className="divide-y divide-border/60">
                {impressumSections.map((section) => (
                  <div
                    key={section.title}
                    className="grid gap-3 py-6 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-8 md:py-7"
                  >
                    <dt className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/55">
                      {section.title}
                    </dt>
                    <dd className="text-base leading-relaxed text-foreground md:text-lg">
                      {section.content}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </section>
      </main>
    </>
  );
}

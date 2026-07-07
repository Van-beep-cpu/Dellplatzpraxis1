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
          className="font-medium text-primary decoration-primary/30 underline-offset-4 transition-colors hover:text-primary/85 hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
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
    <main className="bg-background">
      <section
        aria-labelledby="impressum-heading"
        aria-describedby="impressum-description"
        className="relative overflow-hidden bg-gradient-to-b from-warm via-background to-background pt-28 pb-14 md:pt-40 md:pb-20"
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="container relative mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-primary/70 md:text-sm">
                Rechtliche Angaben
              </p>
              <h1
                id="impressum-heading"
                className="mb-6 text-4xl font-semibold tracking-[-0.035em] text-foreground sm:text-5xl md:text-6xl"
              >
                Impressum
              </h1>
              <p
                id="impressum-description"
                className="mx-auto max-w-2xl text-base leading-8 text-foreground/65 md:text-lg"
              >
                Angaben gemäß den gesetzlichen Informationspflichten für die
                Dellplatzpraxis.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section
        aria-label="Impressumsangaben"
        className="container mx-auto px-4 pb-20 md:px-8 md:pb-32"
      >
        <FadeIn>
          <article className="mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] border border-border/70 bg-white shadow-[0_20px_70px_rgba(28,42,35,0.08)] md:rounded-[2.25rem]">
            <div className="h-1.5 bg-gradient-to-r from-primary/70 via-warm-accent/70 to-secondary/70" />

            <div className="px-6 py-7 sm:px-8 sm:py-8 md:px-12 md:py-10">
              <dl className="divide-y divide-border/55">
                {impressumSections.map((section) => (
                  <div
                    key={section.title}
                    className="grid gap-3 py-6 first:pt-0 last:pb-0 sm:py-7 md:grid-cols-[minmax(13rem,17rem)_minmax(0,1fr)] md:gap-10 md:py-8"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/55 md:pt-1.5">
                      {section.title}
                    </dt>
                    <dd className="max-w-2xl text-base leading-8 text-foreground sm:text-lg sm:leading-9">
                      {section.content}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        </FadeIn>
      </section>
    </main>
  );
}

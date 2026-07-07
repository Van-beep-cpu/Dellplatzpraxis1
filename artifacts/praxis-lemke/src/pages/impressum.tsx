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
          className="font-medium text-primary decoration-primary/30 underline-offset-4 transition-colors hover:text-primary/80 hover:underline focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
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
        className="relative isolate overflow-hidden bg-gradient-to-br from-warm via-background via-55% to-light/60 pt-28 pb-14 md:pt-40 md:pb-20"
      >
        <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 translate-x-1/3 rounded-full bg-warm-accent/10 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary/70 md:text-sm">
                Rechtliche Angaben
              </p>
              <h1
                id="impressum-heading"
                className="mb-6 text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl"
              >
                Impressum
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-8 text-foreground/65 md:text-lg">
                Angaben gemäß den gesetzlichen Informationspflichten für die
                Dellplatzpraxis.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <main className="bg-gradient-to-b from-background to-light/35 pb-20 pt-0 md:pb-32">
        <section
          aria-label="Impressumsangaben"
          className="container mx-auto -mt-8 px-4 md:-mt-12 md:px-8"
        >
          <FadeIn>
            <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 shadow-[0_24px_80px_rgba(33,45,38,0.10)] ring-1 ring-border/40 backdrop-blur-sm md:rounded-[2.5rem]">
              <dl className="divide-y divide-border/55 px-6 py-2 sm:px-8 md:px-12 md:py-4">
                {impressumSections.map((section) => (
                  <div
                    key={section.title}
                    className="grid gap-3 py-6 first:pt-5 last:pb-5 sm:py-7 md:grid-cols-[minmax(12rem,18rem)_minmax(0,1fr)] md:gap-10 md:py-8"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50 md:pt-1.5">
                      {section.title}
                    </dt>
                    <dd className="text-lg leading-8 text-foreground md:text-xl md:leading-9">
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

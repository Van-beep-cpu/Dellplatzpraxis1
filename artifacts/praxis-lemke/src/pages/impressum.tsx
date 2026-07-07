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
          className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary/80 hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-white"
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
        className="relative isolate overflow-hidden bg-gradient-to-br from-warm via-background to-light/60 pt-28 pb-12 md:pt-36 md:pb-18"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-28 bottom-0 h-64 w-64 rounded-full bg-warm-accent/10 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary md:text-sm">
                Rechtliche Angaben
              </p>
              <h1
                id="impressum-heading"
                className="mb-6 text-4xl font-semibold tracking-[-0.035em] text-foreground md:text-6xl"
              >
                Impressum
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-foreground/70 md:text-xl md:leading-9">
                Angaben gemäß den gesetzlichen Informationspflichten für die
                Dellplatzpraxis.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <main className="bg-background pb-20 pt-10 md:pb-28 md:pt-16">
        <section
          aria-label="Impressumsangaben"
          className="container mx-auto px-4 md:px-8"
        >
          <FadeIn>
            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-10">
              <aside className="rounded-[1.75rem] border border-border/80 bg-white/70 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur-sm lg:sticky lg:top-28 lg:self-start">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">
                  Überblick
                </p>
                <p className="mt-4 text-base leading-7 text-foreground/70">
                  Transparente Anbieterkennzeichnung mit allen relevanten
                  Angaben zur Dellplatzpraxis.
                </p>
              </aside>

              <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-white/80">
                <dl className="divide-y divide-border/70">
                  {impressumSections.map((section) => (
                    <div
                      key={section.title}
                      className="group grid gap-3 px-5 py-6 transition-colors hover:bg-muted/45 sm:px-7 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-8 md:px-9 md:py-8"
                    >
                      <dt className="text-xs font-semibold uppercase leading-6 tracking-[0.18em] text-foreground/60 transition-colors group-hover:text-primary md:text-sm">
                        {section.title}
                      </dt>
                      <dd className="text-base leading-8 text-foreground md:text-lg md:leading-8">
                        {section.content}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>
    </>
  );
}

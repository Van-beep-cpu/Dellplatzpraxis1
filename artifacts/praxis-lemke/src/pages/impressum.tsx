import { FadeIn } from "@/components/FadeIn";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export default function Impressum() {
  return (
    <>
      <section className="pt-28 md:pt-36 md:pb-8 bg-gradient-to-br from-warm via-background to-background relative overflow-hidden pb-[0px]">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-3">
              Impressum
            </h1>
            <p className="text-base text-foreground/55 max-w-xl leading-relaxed">
              Rechtliche Angaben gemäß den gesetzlichen Informationspflichten
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20 md:pt-10 md:pb-28 pt-[0px]">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <article className="max-w-3xl space-y-10 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8 [&_a]:text-[#00A8CC] [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h3]:mt-7 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:mt-3">
              <section aria-labelledby="anbieterkennzeichnung">
                <h2 id="anbieterkennzeichnung">Anbieterkennzeichnung</h2>
                <p>
                  Kalle Lemke<br />
                  praktizierender Arzt<br />
                  Grünstr. 17<br />
                  47051 Duisburg
                </p>
              </section>

              <section aria-labelledby="kontakt">
                <h2 id="kontakt">Kontakt</h2>
                <p>
                  Telefon: [Telefonnummer]<br />
                  E-Mail: <a href="mailto:info@dellplatzpraxis.de">info@dellplatzpraxis.de</a>
                </p>
              </section>

              <section aria-labelledby="berufsrechtliche-angaben">
                <h2 id="berufsrechtliche-angaben">
                  Berufsbezeichnung und berufsrechtliche Regelungen
                </h2>
                <h3>Berufsbezeichnung</h3>
                <p>Arzt</p>

                <h3>Zuständige Kammer</h3>
                <p>Ärztekammer Nordrhein</p>

                <h3>Verliehen in</h3>
                <p>Deutschland</p>
              </section>

              <section aria-labelledby="streitbeilegung">
                <h2 id="streitbeilegung">
                  Verbraucherstreitbeilegung/Universalschlichtungsstelle
                </h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <p className="pt-4 text-xs text-foreground/45">
                Quelle: <a href="https://www.e-recht24.de" {...externalLinkProps}>https://www.e-recht24.de</a>
              </p>
            </article>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

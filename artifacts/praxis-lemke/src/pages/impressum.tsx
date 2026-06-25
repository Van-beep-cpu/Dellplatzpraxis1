import { FadeIn } from "@/components/FadeIn";

export default function Impressum() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-36 md:pb-8 bg-gradient-to-br from-warm via-background to-background relative overflow-hidden pb-[0px]">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-3">
              Impressum
            </h1>
            <p className="text-base text-foreground/55 max-w-xl leading-relaxed">
              Pflichtangaben gemäß § 5 TMG und § 55 RStV
            </p>
          </FadeIn>
        </div>
      </section>
      {/* Inhalt */}
      <section className="pb-20 md:pt-10 md:pb-28 pt-[0px]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl">

            {/* Impressumsdaten werden hier eingefügt */}

            <FadeIn>
              <div className="divide-y divide-border/40">

                {/* Praxisinhaber */}
                <div className="py-6">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/40 mb-1.5">
                    Praxisinhaber
                  </h2>
                  <p className="text-sm text-foreground/40 italic">
                    [Name des Praxisinhabers]
                  </p>
                </div>

                {/* Anschrift */}
                <div className="py-6">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/40 mb-1.5">
                    Anschrift
                  </h2>
                  <p className="text-sm text-foreground/40 italic leading-relaxed">
                    [Straße und Hausnummer]<br />
                    [PLZ Ort]
                  </p>
                </div>

                {/* Kontakt */}
                <div className="py-6">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/40 mb-1.5">
                    Kontakt
                  </h2>
                  <p className="text-sm text-foreground/40 italic leading-relaxed">
                    [Telefon: +49 ...]<br />
                    [E-Mail: ...]
                  </p>
                </div>

                {/* Berufsbezeichnung */}
                <div className="py-6">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/40 mb-1.5">
                    Berufsbezeichnung und berufsrechtliche Regelungen
                  </h2>
                  <p className="text-sm text-foreground/40 italic leading-relaxed">
                    [Berufsbezeichnung, z. B. Facharzt für Psychiatrie und Psychotherapie]<br />
                    [Verliehen in: Deutschland]
                  </p>
                </div>

                {/* Zuständige Kammer */}
                <div className="py-6">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/40 mb-1.5">
                    Zuständige Kammer
                  </h2>
                  <p className="text-sm text-foreground/40 italic">
                    [Ärztekammer, z. B. Ärztekammer Nordrhein]
                  </p>
                </div>

                {/* Aufsichtsbehörde */}
                <div className="py-6">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/40 mb-1.5">
                    Zuständige Aufsichtsbehörde
                  </h2>
                  <p className="text-sm text-foreground/40 italic">
                    [Zuständige Aufsichtsbehörde]
                  </p>
                </div>

                {/* Umsatzsteuer-ID */}
                <div className="py-6">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/40 mb-1.5">
                    Umsatzsteuer-Identifikationsnummer
                  </h2>
                  <p className="text-sm text-foreground/40 italic">
                    [USt-IdNr. gemäß § 27a UStG, sofern vorhanden]
                  </p>
                </div>

              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  );
}

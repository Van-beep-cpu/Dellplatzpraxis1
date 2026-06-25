import { Scale } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function Impressum() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-8 md:pt-36 md:pb-10 bg-gradient-to-br from-warm via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/8 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-warm-accent/15 text-warm-accent px-4 py-2 rounded-full text-sm font-medium mb-7">
              <Scale size={15} />
              Rechtliches
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-6 leading-tight max-w-3xl">
              Impressum
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl leading-relaxed font-light">
              Pflichtangaben gemäß § 5 TMG und § 55 RStV
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Inhalt */}
      <section className="pt-10 pb-20 md:pt-12 md:pb-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">

            {/* Impressumsdaten werden hier eingefügt */}

            <FadeIn>
              <div className="space-y-10">

                {/* Praxisinhaber */}
                <div>
                  <h2 className="text-xl font-semibold tracking-tight mb-4 text-foreground">
                    Praxisinhaber
                  </h2>
                  <div className="bg-warm rounded-2xl px-6 py-5 text-foreground/60 text-base leading-relaxed">
                    {/* Praxisinhaber: Name wird hier eingefügt */}
                    <p className="italic text-foreground/40">[Name des Praxisinhabers]</p>
                  </div>
                </div>

                {/* Anschrift */}
                <div>
                  <h2 className="text-xl font-semibold tracking-tight mb-4 text-foreground">
                    Anschrift
                  </h2>
                  <div className="bg-warm rounded-2xl px-6 py-5 text-foreground/60 text-base leading-relaxed">
                    {/* Anschrift wird hier eingefügt */}
                    <p className="italic text-foreground/40">[Straße und Hausnummer]</p>
                    <p className="italic text-foreground/40">[PLZ Ort]</p>
                  </div>
                </div>

                {/* Kontakt */}
                <div>
                  <h2 className="text-xl font-semibold tracking-tight mb-4 text-foreground">
                    Kontakt
                  </h2>
                  <div className="bg-warm rounded-2xl px-6 py-5 text-foreground/60 text-base leading-relaxed space-y-1">
                    {/* Kontaktdaten werden hier eingefügt */}
                    <p className="italic text-foreground/40">[Telefon: +49 ...]</p>
                    <p className="italic text-foreground/40">[E-Mail: ...]</p>
                  </div>
                </div>

                {/* Berufsbezeichnung */}
                <div>
                  <h2 className="text-xl font-semibold tracking-tight mb-4 text-foreground">
                    Berufsbezeichnung und berufsrechtliche Regelungen
                  </h2>
                  <div className="bg-warm rounded-2xl px-6 py-5 text-foreground/60 text-base leading-relaxed space-y-1">
                    {/* Berufsbezeichnung wird hier eingefügt */}
                    <p className="italic text-foreground/40">[Berufsbezeichnung, z. B. Facharzt für Psychiatrie und Psychotherapie]</p>
                    <p className="italic text-foreground/40">[Verliehen in: Deutschland]</p>
                  </div>
                </div>

                {/* Zuständige Kammer */}
                <div>
                  <h2 className="text-xl font-semibold tracking-tight mb-4 text-foreground">
                    Zuständige Kammer
                  </h2>
                  <div className="bg-warm rounded-2xl px-6 py-5 text-foreground/60 text-base leading-relaxed">
                    {/* Kammerdaten werden hier eingefügt */}
                    <p className="italic text-foreground/40">[Ärztekammer, z. B. Ärztekammer Nordrhein]</p>
                  </div>
                </div>

                {/* Aufsichtsbehörde */}
                <div>
                  <h2 className="text-xl font-semibold tracking-tight mb-4 text-foreground">
                    Zuständige Aufsichtsbehörde
                  </h2>
                  <div className="bg-warm rounded-2xl px-6 py-5 text-foreground/60 text-base leading-relaxed">
                    {/* Aufsichtsbehörde wird hier eingefügt */}
                    <p className="italic text-foreground/40">[Zuständige Aufsichtsbehörde]</p>
                  </div>
                </div>

                {/* Umsatzsteuer-ID */}
                <div>
                  <h2 className="text-xl font-semibold tracking-tight mb-4 text-foreground">
                    Umsatzsteuer-Identifikationsnummer
                  </h2>
                  <div className="bg-warm rounded-2xl px-6 py-5 text-foreground/60 text-base leading-relaxed">
                    {/* USt-ID wird hier eingefügt, falls vorhanden */}
                    <p className="italic text-foreground/40">[USt-IdNr. gemäß § 27a UStG, sofern vorhanden]</p>
                  </div>
                </div>

              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  );
}

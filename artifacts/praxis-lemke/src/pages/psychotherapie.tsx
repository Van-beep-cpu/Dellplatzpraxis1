import { HeartHandshake, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";

export default function Psychotherapie() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-warm via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/6 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-warm-accent/15 text-warm-accent px-4 py-2 rounded-full text-sm font-medium mb-7">
              <HeartHandshake size={15} />
              Therapieangebot
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-6 leading-tight max-w-3xl">
              Psychotherapie & Kurzzeittherapie
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl leading-relaxed font-light">
              Ein geschützter Raum für Ihre seelische Gesundheit – evidenzbasiert und individuell in Duisburg
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Inhalt */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-7">
                Psychotherapie – individuell & evidenzbasiert
              </h2>
              <p className="text-lg text-foreground/70 leading-loose mb-5">
                Psychotherapie bietet einen geschützten Raum, in dem Sie über belastende Gedanken, Gefühle und Verhaltensmuster sprechen können. In meiner privatärztlichen Praxis kombiniere ich evidenzbasierte Therapieansätze mit einem wertschätzenden, individuellen Blick auf Ihre Situation.
              </p>
              <p className="text-lg text-foreground/70 leading-loose">
                Egal ob es sich um Depressionen, Angststörungen, Burnout, Lebenskrisen oder andere psychische Belastungen handelt – gemeinsam erarbeiten wir Strategien, die Ihnen helfen, Ihren Alltag besser zu gestalten und Ihre Lebensqualität nachhaltig zu verbessern.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="mt-12">
              <h3 className="text-lg font-semibold mb-6 text-foreground/80">Behandlungsbereiche</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Depressionen",
                  "Angststörungen & Panikattacken",
                  "Burnout & Erschöpfung",
                  "Lebenskrisen",
                  "Trauma & PTBS",
                  "Zwangsstörungen",
                ].map((s) => (
                  <div key={s} className="flex items-center gap-3 bg-warm px-4 py-3 rounded-xl text-foreground/75">
                    <CheckCircle2 size={16} className="text-warm-accent shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-accent text-white text-center">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Jetzt Termin vereinbaren</h2>
            <p className="text-white/65 mb-10 max-w-xl mx-auto leading-relaxed">
              Buchen Sie unkompliziert online Ihren ersten Termin über Doctolib.
            </p>
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-base font-medium bg-[#00A8CC] hover:bg-[#0096b8] text-white border-0 shadow-md">
              <a href="https://www.doctolib.de" target="_blank" rel="noopener noreferrer">
                Termin bei Doctolib buchen
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

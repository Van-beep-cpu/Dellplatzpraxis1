import { HeartHandshake, MessageSquare, ClipboardList, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";

export default function Psychotherapie() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28 bg-gradient-to-br from-light via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeIn>
          
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground leading-tight max-w-3xl mb-[70px]">
              Psychotherapie & Kurzzeittherapie
            </h1>
         
            
          </FadeIn>
        </div>
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              
              <p className="text-lg text-foreground/75 leading-loose mb-5">
                Psychotherapie bietet einen geschützten Raum, in dem Sie über belastende Gedanken, Gefühle und Verhaltensmuster sprechen können. In meiner privatärztlichen Praxis kombiniere ich evidenzbasierte Therapieansätze mit einem wertschätzenden, individuellen Blick auf Ihre Situation.
              </p>
              <p className="text-lg text-foreground/75 leading-loose">
                Egal ob es sich um Depressionen, Angststörungen, Burnout, Lebenskrisen oder andere psychische Belastungen handelt – gemeinsam erarbeiten wir Strategien, die Ihnen helfen, Ihren Alltag besser zu gestalten und Ihre Lebensqualität nachhaltig zu verbessern.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="mt-10">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Depressionen",
                  "Angststörungen & Panikattacken",
                  "Burnout & Erschöpfung",
                  "Lebenskrisen",
                  "Trauma & PTBS",
                  "Zwangsstörungen",
                ].map((s) => (
                  <div key={s} className="flex items-center gap-3 text-foreground/75">
                    <CheckCircle2 size={17} className="text-primary/70 shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 bg-accent text-white text-center">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Jetzt Termin vereinbaren</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">Buchen Sie unkompliziert online Ihren ersten Termin über Doctolib.</p>
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-base font-medium bg-[#00A8CC] hover:bg-[#0096b8] text-white border-0">
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

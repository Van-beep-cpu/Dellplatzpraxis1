import { Brain, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";

export default function Adhs() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-warm via-background to-background relative overflow-hidden ml-[0px] mr-[0px]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/8 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-warm-accent/15 text-warm-accent px-4 py-2 rounded-full text-sm font-medium mb-7">
              <Brain size={15} />
              Spezialisierung
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-6 leading-tight max-w-3xl">
              ADHS im Erwachsenenalter
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl leading-relaxed font-light">
              Diagnose, Behandlung und Begleitung bei Aufmerksamkeitsdefizit-Hyperaktivitätsstörung in Duisburg
            </p>
          </FadeIn>
        </div>
      </section>
      {/* Inhalt */}
      <section className="py-20 md:py-28 text-left pt-[25px] pb-[25px] ml-[112px] mr-[112px]">
        <div className="container mx-auto px-4 md:px-8 pl-[32px] pr-[32px] ml-[0px] mr-[0px] pt-[0px] pb-[0px] mt-[40px] mb-[40px]">
          <div className="max-w-3xl mx-auto ml-[0px] mr-[0px]">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-7">
                Was ist ADHS im Erwachsenenalter?
              </h2>
              <p className="text-lg text-foreground/70 leading-loose mb-5">
                ADHS (Aufmerksamkeitsdefizit-Hyperaktivitätsstörung) ist eine neurobiologische Erkrankung, die häufig bereits in der Kindheit beginnt, jedoch oft erst im Erwachsenenalter diagnostiziert wird. Viele Betroffene berichten von anhaltenden Schwierigkeiten bei der Konzentration, Organisation und Impulskontrolle.
              </p>
              <p className="text-lg text-foreground/70 leading-loose">
                In meiner Praxis führe ich eine sorgfältige Diagnostik durch und entwickle gemeinsam mit Ihnen einen individuellen Behandlungsplan – ob medikamentös, therapeutisch oder in Kombination. Ziel ist es, Ihre Stärken zu fördern und alltagspraktische Strategien zu entwickeln, die wirklich zu Ihnen passen.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="mt-12">
              <h3 className="text-lg font-semibold mb-6 text-foreground/80">Häufige Symptome</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Konzentrations­schwierigkeiten",
                  "Impulsivität",
                  "Organisationsproble­me",
                  "Emotionale Dysregulation",
                  "Innere Unruhe",
                  "Prokrastination",
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

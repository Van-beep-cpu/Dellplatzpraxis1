import { Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";

export default function Ass() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-8 md:pt-36 md:pb-10 bg-gradient-to-br from-warm via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-secondary/8 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-warm-accent/15 text-warm-accent px-4 py-2 rounded-full text-sm font-medium mb-7">
                <Users size={15} />
                Spezialisierung
              </div>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-6 leading-tight">
                Autismus-Spektrum-Störung (ASS)
              </h1>

              <p className="text-xl text-foreground/60 leading-relaxed font-light max-w-2xl">
                Einfühlsame Diagnostik und individuelle Begleitung für Erwachsene im
                Autismus-Spektrum in Duisburg
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Inhalt */}
      <section className="pt-10 pb-20 md:pt-12 md:pb-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-7">
                Autismus im Erwachsenenalter verstehen
              </h2>
              <p className="text-lg text-foreground/70 leading-loose mb-5">
                Das Autismus-Spektrum umfasst eine Vielzahl von Entwicklungsbesonderheiten, die sich auf soziale Interaktion, Kommunikation und Verhaltensweisen auswirken. Bei vielen Betroffenen wird die Diagnose erst im Erwachsenenalter gestellt – oft nach jahrelanger Suche nach Erklärungen.
              </p>
              <p className="text-lg text-foreground/70 leading-loose">
                In meiner Praxis biete ich eine einfühlsame und strukturierte Diagnostik sowie weiterführende Begleitung an. Eine Diagnose kann der Beginn eines besseren Selbstverständnisses und neuer Strategien für den Alltag sein. Ich nehme mir die Zeit, Sie und Ihre individuelle Situation wirklich kennenzulernen.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="mt-12">
              <h3 className="text-lg font-semibold mb-6 text-foreground/80">Häufige Merkmale</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Soziale Interaktion",
                  "Kommunikations­besonderheiten",
                  "Sensorische Empfindlichkeit",
                  "Spezialinteressen",
                  "Routinen & Strukturbedürfnis",
                  "Erschöpfung (Autistic Burnout)",
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

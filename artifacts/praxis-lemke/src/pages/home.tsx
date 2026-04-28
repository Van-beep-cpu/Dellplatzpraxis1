import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Stethoscope,
  Users,
  Video,
  HeartHandshake,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Assets
import logoSrc from "@assets/ChatGPT_Image_28._Apr._2026,_15_00_16_1777381310408.png";
import heroBg from "@/assets/images/hero-bg.png";
import videoConsult from "@/assets/images/video-consult.png";
import drLemke from "@/assets/images/dr-lemke.png";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen font-sans text-foreground bg-background">
      {/* 1. Navbar */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
            <img src={logoSrc} alt="Stellplatzpraxis Lemke" className="h-16 object-contain" style={{ mixBlendMode: "multiply" }} />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo("leistungen")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Leistungen
            </button>
            <button onClick={() => scrollTo("ueber-uns")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Über uns
            </button>
            <button onClick={() => scrollTo("kontakt")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Kontakt
            </button>
            <Button onClick={() => scrollTo("kontakt")} className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Termin buchen
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg py-4 px-4 flex flex-col gap-4">
            <button onClick={() => scrollTo("leistungen")} className="text-left py-2 font-medium">Leistungen</button>
            <button onClick={() => scrollTo("ueber-uns")} className="text-left py-2 font-medium">Über uns</button>
            <button onClick={() => scrollTo("kontakt")} className="text-left py-2 font-medium">Kontakt</button>
            <Button onClick={() => scrollTo("kontakt")} className="bg-primary text-white w-full rounded-full">Termin buchen</Button>
          </div>
        )}
      </nav>
      {/* 2. Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                D.ellplatzpraxis<br className="hidden md:block" /> 
                Herr Kalle Lemke
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl leading-relaxed">
                Facharzt für Psychiatrie & Psychotherapie – persönlich vor Ort oder per Videosprechstunde.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollTo("kontakt")} className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base">
                Termin buchen
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* 3. Praxisphilosophie */}
      <section className="py-20 md:py-32 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <HeartHandshake className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ganzheitliche Behandlung im Mittelpunkt</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">In meiner Praxis betrachte ich Sie nicht nur aus medizinischer Sicht, sondern als Mensch in Ihrer gesamten Lebenssituation. Neben körperlichen Aspekten fließen auch psychologische und soziale Faktoren in die Behandlung mit ein. Gemeinsam entwickeln wir einen Ansatz, der zu Ihnen passt – individuell, nachvollziehbar und in Ihrem Tempo.</p>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* 4. Leistungen */}
      <section id="leistungen" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Leistungen</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Umfassende diagnostische und therapeutische Angebote für Ihre seelische Gesundheit.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-light rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Brain size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Psychische Gesundheit</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground/80"><CheckCircle2 size={18} className="text-primary/60" /> Depressionen</li>
                  <li className="flex items-center gap-3 text-foreground/80"><CheckCircle2 size={18} className="text-primary/60" /> Angststörungen</li>
                  <li className="flex items-center gap-3 text-foreground/80"><CheckCircle2 size={18} className="text-primary/60" /> Lebenskrisen</li>
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-light rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Stethoscope size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Spezialisierungen</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground/80"><CheckCircle2 size={18} className="text-primary/60" /> ADHS im Erwachsenenalter</li>
                  <li className="flex items-center gap-3 text-foreground/80"><CheckCircle2 size={18} className="text-primary/60" /> Autismus-Spektrum</li>
                  <li className="flex items-center gap-3 text-foreground/80"><CheckCircle2 size={18} className="text-primary/60" /> Suchterkrankungen</li>
                  <li className="flex items-center gap-3 text-foreground/80"><CheckCircle2 size={18} className="text-primary/60" /> Chronische Schmerzen</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-light rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Therapieformen</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground/80"><CheckCircle2 size={18} className="text-primary/60" /> Psychotherapie</li>
                  <li className="flex items-center gap-3 text-foreground/80"><CheckCircle2 size={18} className="text-primary/60" /> Schmerztherapie</li>
                  <li className="flex items-center gap-3 text-foreground/80"><CheckCircle2 size={18} className="text-primary/60" /> Online-Therapie</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* 5. Videosprechstunde */}
      <section className="py-20 md:py-32 bg-secondary text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Behandlung von zuhause</h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Wir bieten Ihnen die Möglichkeit, Termine bequem per Videosprechstunde wahrzunehmen – sicher, diskret und ohne Anfahrtsweg.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-4 text-lg">
                  <div className="bg-white/10 p-2 rounded-full"><Clock size={20} className="text-white" /></div>
                  Schnellere Termine
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <div className="bg-white/10 p-2 rounded-full"><MapPin size={20} className="text-white" /></div>
                  Ortsunabhängig
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <div className="bg-white/10 p-2 rounded-full"><Video size={20} className="text-white" /></div>
                  Sichere Kommunikation
                </li>
              </ul>
              
              <Button onClick={() => scrollTo("kontakt")} size="lg" className="bg-white text-secondary hover:bg-white/90 rounded-full px-8 h-14 text-base font-semibold">
                Termin online buchen
              </Button>
            </FadeIn>
            
            <FadeIn delay={0.2} className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
                <img src={videoConsult} alt="Videosprechstunde" className="w-full h-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* 6. Ablauf */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Der Weg zu uns</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Ein transparenter und strukturierter Ablauf für Ihre bestmögliche Versorgung.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-border z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Termin buchen", desc: "Kontaktieren Sie uns telefonisch oder online für einen ersten Termin." },
                { step: "02", title: "Erstgespräch", desc: "Kennenlernen und Erfassung Ihrer aktuellen Lebenssituation und Beschwerden." },
                { step: "03", title: "Diagnose", desc: "Sorgfältige medizinische und psychologische Diagnostik." },
                { step: "04", title: "Behandlung", desc: "Gemeinsame Entwicklung und Umsetzung Ihres individuellen Therapieplans." }
              ].map((item, i) => (
                <FadeIn key={item.step} delay={i * 0.1} className="text-center md:text-left flex flex-col md:block items-center">
                  <div className="w-24 h-24 bg-white border-2 border-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary mb-6 shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-foreground/70 text-center md:text-left leading-relaxed">{item.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 7. Über den Arzt */}
      <section id="ueber-uns" className="py-20 md:py-32 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <FadeIn>
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-lg">
                <img src={drLemke} alt="Dr. Kalle Lemke" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Dr. Kalle Lemke</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Nach über 20 Jahren medizinischer und persönlicher Entwicklung kehrt Dr. Lemke in seine Heimatstadt Duisburg zurück. Sein Ansatz verbindet medizinisches Fachwissen mit einem tiefen Verständnis für individuelle Lebenssituationen.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Wir nehmen uns Zeit für Sie. Eine gründliche Diagnostik und eine auf Ihre Bedürfnisse zugeschnittene Therapieplanung sind das Fundament unserer gemeinsamen Arbeit.
              </p>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm inline-block">
                <p className="font-medium text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-primary" /> Deutsch & Englisch
                </p>
                <p className="font-medium text-foreground flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-primary" /> Mitglied DGPPN
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* 8. Standort */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser Standort</h2>
            <div className="inline-flex flex-col items-center">
              <p className="text-xl font-medium mb-1">Grünstraße 17, 47051 Duisburg</p>
              <p className="text-foreground/60 flex items-center gap-2">Erdgeschoss <span className="w-1 h-1 bg-foreground/30 rounded-full"></span> Parkplätze vorhanden</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-sm border border-border">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.9972370724036!2d6.7640248!3d51.4287841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8bf67b822d8e7%3A0x63ce9a75d5e2197f!2sGr%C3%BCnstra%C3%9Fe%2017%2C%2047051%20Duisburg%2C%20Germany!5e0!3m2!1sen!2sus!4v1709230588147!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Standort"
            ></iframe>
          </FadeIn>
        </div>
      </section>
      {/* 9. Kontakt & Öffnungszeiten */}
      <section id="kontakt" className="py-20 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">Kontakt</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Telefon</p>
                    <p className="text-lg font-medium">0203 / 123 456 78</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">E-Mail</p>
                    <p className="text-lg font-medium">kontakt@stellplatzpraxis.de</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10">
                <p className="font-medium text-accent mb-2">Wichtige Hinweise:</p>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Hausbesuche nach Vereinbarung möglich</li>
                  <li>• Im Notfall wählen Sie bitte die <strong>116117</strong></li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-bold mb-8">Öffnungszeiten</h2>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
                <table className="w-full">
                  <tbody className="divide-y divide-border">
                    <tr className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <td className="py-4 font-medium">Montag</td>
                      <td className="py-1 sm:py-4 text-foreground/70">14:00 – 19:00</td>
                    </tr>
                    <tr className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <td className="py-4 font-medium">Dienstag</td>
                      <td className="py-1 sm:py-4 text-foreground/70">10:00 – 13:00, 14:00 – 19:00</td>
                    </tr>
                    <tr className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <td className="py-4 font-medium">Mittwoch</td>
                      <td className="py-1 sm:py-4 text-foreground/70 text-right">10:00 – 13:00, 14:00 – 17:00<br/>19:00 – 21:00</td>
                    </tr>
                    <tr className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <td className="py-4 font-medium">Donnerstag</td>
                      <td className="py-1 sm:py-4 text-foreground/70 text-right">10:00 – 13:00, 14:00 – 17:00<br/>19:00 – 20:00</td>
                    </tr>
                    <tr className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center border-b-0">
                      <td className="py-4 font-medium">Freitag</td>
                      <td className="py-1 sm:py-4 text-foreground/70">10:00 – 15:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* 10. Abrechnung */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">Abrechnung</h2>
            <p className="text-xl text-primary font-medium mb-6">Privat Versicherte & Selbstzahler</p>
            <p className="text-foreground/80 leading-relaxed">
              Die Abrechnung erfolgt transparent nach der Gebührenordnung für Ärzte (GOÄ). 
              Gesetzlich Versicherte können als Selbstzahler behandelt werden.
            </p>
          </FadeIn>
        </div>
      </section>
      {/* 11. Footer */}
      <footer className="bg-accent text-white/80 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <img src={logoSrc} alt="Stellplatzpraxis Lemke" className="h-16 mb-6 object-contain" style={{ mixBlendMode: "screen" }} />
              <p className="text-white/60 mb-6">
                Privatpraxis für Psychiatrie und Psychotherapie in Duisburg.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Praxis</h4>
              <ul className="space-y-4">
                <li><button onClick={() => scrollTo("leistungen")} className="hover:text-white transition-colors">Leistungen</button></li>
                <li><button onClick={() => scrollTo("ueber-uns")} className="hover:text-white transition-colors">Über den Arzt</button></li>
                <li><button onClick={() => scrollTo("kontakt")} className="hover:text-white transition-colors">Kontakt & Anfahrt</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Rechtliches</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Sprechzeiten</h4>
              <p className="text-white/60 mb-2">Mo - Fr nach Vereinbarung</p>
              <Button onClick={() => scrollTo("kontakt")} variant="outline" className="mt-4 border-white/20 text-white hover:bg-white/10">
                Termin vereinbaren
              </Button>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-sm text-white/50">
            © 2026 Stellplatzpraxis Lemke. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}

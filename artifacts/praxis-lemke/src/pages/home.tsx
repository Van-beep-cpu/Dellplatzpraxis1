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
  Menu,
  X,
  FileDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Assets
import logoSrc from "@assets/logo.png";
import heroBg from "@/assets/images/hero-bg1.jpg";
import videoConsult from "@/assets/images/video-consult.png";
import drLemke from "@/assets/images/foto.png";

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
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
            <img
              src={logoSrc}
              alt="Stellplatzpraxis Lemke"
              className="h-14 object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo("leistungen")} className="text-base font-medium text-foreground/75 hover:text-primary transition-colors">
              Leistungen
            </button>
            <button onClick={() => scrollTo("ueber-uns")} className="text-base font-medium text-foreground/75 hover:text-primary transition-colors">
              Über uns
            </button>
            <button onClick={() => scrollTo("kontakt")} className="text-base font-medium text-foreground/75 hover:text-primary transition-colors">
              Kontakt
            </button>
            <Button
              onClick={() => scrollTo("kontakt")}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 h-12 text-base"
            >
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
            <button onClick={() => scrollTo("leistungen")} className="text-left py-2 text-base font-medium">Leistungen</button>
            <button onClick={() => scrollTo("ueber-uns")} className="text-left py-2 text-base font-medium">Über uns</button>
            <button onClick={() => scrollTo("kontakt")} className="text-left py-2 text-base font-medium">Kontakt</button>
            <Button onClick={() => scrollTo("kontakt")} className="bg-primary text-white w-full rounded-full h-12 text-base">Termin buchen</Button>
          </div>
        )}
      </nav>
      {/* 2. Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="" 
            className="w-full h-full object-cover opacity-40" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="max-w-3xl">

            <FadeIn>
              <p className="text-sm tracking-wide text-foreground/50 mb-5 uppercase">Willkommen in der Dellplatzpraxis</p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground mb-6 leading-[1.08]">
                Kalle Lemke
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-xl md:text-2xl text-foreground/65 mb-5 max-w-2xl leading-relaxed font-light">
                Privatärztliche Praxis für Psychiatrie & Psychotherapie
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-base md:text-lg text-foreground/60 mb-12 max-w-xl leading-relaxed">
                Begleitung bei psychischen Belastungen – persönlich vor Ort oder per Videosprechstunde.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollTo("kontakt")}
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-base font-medium"
              >
                Termin buchen
              </Button>
            </FadeIn>

          </div>
        </div>

      </section>
      {/* 3. Praxisphilosophie */}
      <section className="py-24 md:py-36 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <HeartHandshake className="w-11 h-11 text-primary mx-auto mb-7" />
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight">Ganzheitliche Behandlung im Mittelpunkt</h2>
              <p className="text-lg text-foreground/75 leading-loose mb-5">
                In meiner Praxis in Duisburg begleite ich Sie bei psychischen und psychosomatischen Beschwerden mit einem ganzheitlichen Ansatz. Dabei betrachte ich nicht nur einzelne Symptome, sondern beziehe auch psychologische und soziale Aspekte in die Behandlung mit ein.
              </p>
              <p className="text-lg text-foreground/75 leading-loose mb-5">
                Gemeinsam schauen wir, welcher Therapie- oder Behandlungsansatz für Ihre persönliche Situation am sinnvollsten ist. Falls erforderlich, kann die Behandlung auch medikamentös unterstützt werden, stets in enger Abstimmung mit Ihnen.
              </p>
              <p className="text-lg text-foreground/75 leading-loose">
                Ein besonderer Schwerpunkt liegt unter anderem in der Behandlung von Depressionen, Suchterkrankungen sowie chronischen Schmerzsymptomen. Ich freue mich darauf, Sie kennenzulernen.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* 4. Leistungen */}
      <section id="leistungen" className="py-24 md:py-36">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Unsere Leistungen</h2>
              <p className="text-lg text-foreground/65 max-w-2xl mx-auto">
                Umfassende diagnostische und therapeutische Angebote für Ihre seelische Gesundheit.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/60 h-full hover:shadow-lg transition-all duration-300">
                <div className="w-13 h-13 bg-light rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Brain size={26} />
                </div>
                <h3 className="text-xl font-semibold mb-5">Psychische Gesundheit</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground/75"><CheckCircle2 size={17} className="text-primary/70 shrink-0" /> Depressionen</li>
                  <li className="flex items-center gap-3 text-foreground/75"><CheckCircle2 size={17} className="text-primary/70 shrink-0" /> Angststörungen</li>
                  <li className="flex items-center gap-3 text-foreground/75"><CheckCircle2 size={17} className="text-primary/70 shrink-0" /> Lebenskrisen</li>
                  <li className="flex items-center gap-3 text-foreground/75"><CheckCircle2 size={17} className="text-primary/70 shrink-0" /> Burnout</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/60 h-full hover:shadow-lg transition-all duration-300">
                <div className="w-13 h-13 bg-light rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Stethoscope size={26} />
                </div>
                <h3 className="text-xl font-semibold mb-5">Spezialisierungen</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground/75"><CheckCircle2 size={17} className="text-primary/70 shrink-0" /> ADHS im Erwachsenenalter</li>
                  <li className="flex items-center gap-3 text-foreground/75"><CheckCircle2 size={17} className="text-primary/70 shrink-0" /> Autismus-Spektrum</li>
                  <li className="flex items-center gap-3 text-foreground/75"><CheckCircle2 size={17} className="text-primary/70 shrink-0" /> Suchterkrankungen</li>
                  <li className="flex items-center gap-3 text-foreground/75"><CheckCircle2 size={17} className="text-primary/70 shrink-0" /> Chronische Schmerzen</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/60 h-full hover:shadow-lg transition-all duration-300">
                <div className="w-13 h-13 bg-light rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Users size={26} />
                </div>
                <h3 className="text-xl font-semibold mb-5">Therapieformen</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground/75"><CheckCircle2 size={17} className="text-primary/70 shrink-0" /> Psychotherapie</li>
                  <li className="flex items-center gap-3 text-foreground/75"><CheckCircle2 size={17} className="text-primary/70 shrink-0" /> Schmerztherapie</li>
                  <li className="flex items-center gap-3 text-foreground/75"><CheckCircle2 size={17} className="text-primary/70 shrink-0" /> Online-Therapie</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* 5. Videosprechstunde */}
      <section className="py-24 md:py-36 bg-secondary text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Behandlung von zuhause</h2>
              <p className="text-lg text-white/75 mb-10 leading-relaxed">
                Wir bieten Ihnen die Möglichkeit, Termine bequem per Videosprechstunde wahrzunehmen – sicher, diskret und ohne Anfahrtsweg.
              </p>

              <ul className="space-y-5 mb-12">
                <li className="flex items-center gap-4 text-base">
                  <div className="bg-white/10 p-2.5 rounded-full shrink-0"><Clock size={20} className="text-white" /></div>
                  Schnellere Termine
                </li>
                <li className="flex items-center gap-4 text-base">
                  <div className="bg-white/10 p-2.5 rounded-full shrink-0"><MapPin size={20} className="text-white" /></div>
                  Ortsunabhängig
                </li>
                <li className="flex items-center gap-4 text-base">
                  <div className="bg-white/10 p-2.5 rounded-full shrink-0"><Video size={20} className="text-white" /></div>
                  Sichere Kommunikation
                </li>
              </ul>

              <Button onClick={() => scrollTo("kontakt")} size="lg" className="bg-white text-secondary hover:bg-white/90 rounded-full px-8 h-12 text-base font-semibold">
                Termin online buchen
              </Button>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl">
                <img src={videoConsult} alt="Videosprechstunde" className="w-full h-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* 6. Ablauf */}
      <section className="py-24 md:py-36">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Der Weg zu uns</h2>
              <p className="text-lg text-foreground/65 max-w-2xl mx-auto">
                Ein transparenter und strukturierter Ablauf für Ihre bestmögliche Versorgung.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-12 right-12 h-px bg-border/40 z-0"></div>

            <div className="grid md:grid-cols-4 gap-10 relative z-10">
              {[
                { step: "01", title: "Termin buchen", desc: "Kontaktieren Sie uns telefonisch oder online für einen ersten Termin." },
                { step: "02", title: "Erstgespräch", desc: "Kennenlernen und Erfassung Ihrer aktuellen Lebenssituation und Beschwerden." },
                { step: "03", title: "Diagnose", desc: "Sorgfältige medizinische und psychologische Diagnostik." },
                { step: "04", title: "Behandlung", desc: "Gemeinsame Entwicklung und Umsetzung Ihres individuellen Therapieplans." }
              ].map((item, i) => (
                <FadeIn key={item.step} delay={i * 0.1} className="text-center md:text-left flex flex-col md:block items-center">
                  <div className="w-24 h-24 bg-white border border-border rounded-full flex items-center justify-center text-2xl font-semibold text-primary mb-6 shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-foreground/65 text-center md:text-left leading-relaxed text-sm">{item.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 7. Über den Arzt */}
      <section id="ueber-uns" className="py-24 md:py-36 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <FadeIn>
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-lg">
                <img src={drLemke} alt="Herr Kalle Lemke" className="w-full h-full object-cover" />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-7">Herr Kalle Lemke</h2>
              <p className="text-lg text-foreground/75 mb-8 leading-loose">
                Nach über 20 Jahren medizinischer und persönlicher Entwicklung kehre ich in meine Heimatstadt Duisburg zurück. Mein beruflicher Weg hat mich über viele Stationen geführt und mich in meiner Arbeit wie auch persönlich geprägt. In meiner Praxis verbinde ich medizinisches Fachwissen mit einem Verständnis für die individuellen Lebenssituationen meiner Patienten. Eine sorgfältige Diagnostik und eine auf Ihre Bedürfnisse abgestimmte Therapieplanung bilden die Grundlage unserer gemeinsamen Arbeit.
              </p>

              <div className="bg-white p-6 rounded-2xl shadow-sm inline-block">
                <p className="font-medium text-foreground mb-3 flex items-center gap-2">
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
      {/* 8. Kontakt & Öffnungszeiten (inkl. Karte) */}
      <section id="kontakt" className="py-24 md:py-36 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">Kontakt & Standort</h2>
              <p className="text-foreground/60">Grünstraße 17, 47051 Duisburg · Erdgeschoss · Parkplätze vorhanden</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
            <FadeIn>
              <h3 className="text-xl font-semibold mb-7">Kontakt</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-light rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/55 mb-1">Telefon</p>
                    <p className="text-lg font-medium">0203 / 123 456 78</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-light rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/55 mb-1">E-Mail</p>
                    <p className="text-lg font-medium">kontakt@dellplatzpraxis.de</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-light rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/55 mb-1">Adresse</p>
                    <p className="text-lg font-medium">Grünstraße 17, 47051 Duisburg</p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-accent/5 rounded-2xl border border-accent/10">
                <p className="font-medium text-accent mb-2">Wichtige Hinweise:</p>
                <ul className="space-y-2 text-foreground/75 text-sm">
                  <li>• Hausbesuche nach Vereinbarung möglich</li>
                  <li>• Im Notfall wählen Sie bitte die <strong>116117</strong></li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3 className="text-xl font-semibold mb-7">Öffnungszeiten</h3>

              <div className="bg-white p-7 rounded-2xl shadow-sm border border-border">
                <table className="w-full">
                  <tbody className="divide-y divide-border">
                    <tr className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <td className="py-4 font-medium">Montag</td>
                      <td className="pb-3 sm:py-4 text-foreground/65">14:00 – 19:00</td>
                    </tr>
                    <tr className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <td className="py-4 font-medium">Dienstag</td>
                      <td className="pb-3 sm:py-4 text-foreground/65">10:00 – 13:00, 14:00 – 19:00</td>
                    </tr>
                    <tr className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <td className="py-4 font-medium">Mittwoch</td>
                      <td className="pb-3 sm:py-4 text-foreground/65 sm:text-right">10:00 – 13:00, 14:00 – 17:00<br />19:00 – 21:00</td>
                    </tr>
                    <tr className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <td className="py-4 font-medium">Donnerstag</td>
                      <td className="pb-3 sm:py-4 text-foreground/65 sm:text-right">10:00 – 13:00, 14:00 – 17:00<br />19:00 – 20:00</td>
                    </tr>
                    <tr className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b-0">
                      <td className="py-4 font-medium">Freitag</td>
                      <td className="pb-3 sm:py-4 text-foreground/65">10:00 – 15:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>

          {/* Google Maps integrated */}
          <FadeIn delay={0.1} className="max-w-5xl mx-auto h-[380px] md:h-[450px] rounded-2xl overflow-hidden shadow-sm border border-border">
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
      {/* 9. Abrechnung */}
      <section className="py-20 bg-light border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight mb-3">Abrechnung</h2>
            <p className="text-xl text-primary font-medium mb-5">Privat Versicherte & Selbstzahler</p>
            <p className="text-foreground/70 leading-relaxed">
              Die Abrechnung erfolgt transparent nach der Gebührenordnung für Ärzte (GOÄ).
              Gesetzlich Versicherte können als Selbstzahler behandelt werden.
            </p>
          </FadeIn>
        </div>
      </section>
      {/* 10. Formulare & Downloads */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight mb-3 text-center">Formulare & Downloads</h2>
            <p className="text-foreground/60 text-center mb-10">Bitte laden Sie die folgenden Dokumente vor Ihrem ersten Termin herunter.</p>

            <div className="space-y-3">
              {[
                { label: "Anamnesebogen", desc: "Bitte ausgefüllt zum Erstgespräch mitbringen." },
                { label: "Behandlungsvertrag", desc: "Grundlage unserer gemeinsamen Arbeit." },
                { label: "Datenschutzerklärung", desc: "Informationen zum Umgang mit Ihren Daten." },
              ].map((doc) => (
                <a
                  key={doc.label}
                  href="#"
                  className="flex items-center justify-between gap-4 bg-white border border-border/70 rounded-xl px-6 py-5 hover:shadow-md hover:border-primary/30 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-light rounded-lg flex items-center justify-center text-primary shrink-0">
                      <FileDown size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">{doc.label}</p>
                      <p className="text-sm text-foreground/55">{doc.desc}</p>
                    </div>
                  </div>
                  <span className="text-xs text-foreground/40 group-hover:text-primary transition-colors font-medium uppercase tracking-wide">PDF</span>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      {/* 11. Footer */}
      <footer className="bg-accent text-white/80 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <img src={logoSrc} alt="Stellplatzpraxis Lemke" className="h-14 mb-6 object-contain" style={{ mixBlendMode: "screen" }} />
              <p className="text-white/55 text-sm leading-relaxed">
                Privatpraxis für Psychiatrie und Psychotherapie in Duisburg.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-base mb-6">Praxis</h4>
              <ul className="space-y-4 text-sm">
                <li><button onClick={() => scrollTo("leistungen")} className="hover:text-white transition-colors">Leistungen</button></li>
                <li><button onClick={() => scrollTo("ueber-uns")} className="hover:text-white transition-colors">Über den Arzt</button></li>
                <li><button onClick={() => scrollTo("kontakt")} className="hover:text-white transition-colors">Kontakt & Anfahrt</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-base mb-6">Rechtliches</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-base mb-6">Sprechzeiten</h4>
              <p className="text-white/55 mb-4 text-sm">Mo – Fr nach Vereinbarung</p>
              <Button onClick={() => scrollTo("kontakt")} variant="outline" className="border-white/20 text-white hover:bg-white/10 text-sm">
                Termin vereinbaren
              </Button>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-sm text-white/40">© 2026 dellplatzpraxis Lemke. Alle Rechte vorbehalten.</div>
        </div>
      </footer>
    </div>
  );
}

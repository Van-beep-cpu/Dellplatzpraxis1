import React from "react";
import {
  Brain,
  Stethoscope,
  Users,
  HeartHandshake,
  MapPin,
  Mail,
  CheckCircle2,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { COOKIE_CONSENT_CHANGED_EVENT, hasExternalServicesConsent, saveCookieConsent } from "@/components/CookieConsent";

import heroBg from "@/assets/images/hero-new.jpeg";
import drLemke from "@/assets/images/foto.png";

function GoogleMapEmbed() {
  const [canLoadMap, setCanLoadMap] = React.useState(false);

  React.useEffect(() => {
    setCanLoadMap(hasExternalServicesConsent());
    const handleConsentChange = () => setCanLoadMap(hasExternalServicesConsent());
    window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, handleConsentChange);
    return () => window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, handleConsentChange);
  }, []);

  const loadGoogleMap = () => {
    saveCookieConsent({ externalServices: true });
    setCanLoadMap(true);
  };

  return (
    <FadeIn delay={0.1} className="max-w-5xl mx-auto h-[260px] sm:h-[340px] md:h-[450px] rounded-3xl overflow-hidden shadow-sm border border-border/40">
      {canLoadMap ? (
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
      ) : (
        <div className="flex h-full items-center justify-center bg-light px-6 text-center">
          <div className="max-w-xl">
            <p className="text-sm leading-relaxed text-foreground/65 sm:text-base">
              Zum Anzeigen der Karte wird Google Maps geladen. Dabei können Daten an Google übertragen werden.
            </p>
            <Button className="mt-5 rounded-full bg-[#00A8CC] text-white hover:bg-[#0096b8]" onClick={loadGoogleMap}>
              Google Maps laden
            </Button>
          </div>
        </div>
      )}
    </FadeIn>
  );
}

export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* 1. Hero */}
      <section className="relative flex min-h-[720px] items-center overflow-hidden sm:min-h-screen max-sm:min-h-[620px]">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/78 via-background/53 to-background/88"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-12 sm:py-16 max-sm:pt-24 max-sm:pb-12">
          <div className="max-w-3xl -translate-y-10">
            <FadeIn>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-foreground/45 sm:mb-6">
                Willkommen in der Dellplatzpraxis
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="mb-4 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:mb-6 sm:text-5xl md:text-7xl">
                Kalle Lemke
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mb-3 max-w-2xl text-lg font-light leading-relaxed text-foreground/65 sm:mb-5 sm:text-xl md:text-2xl">
                Privatärztliche Praxis für Gesundheit
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mb-6 max-w-xl text-base leading-relaxed text-foreground/55 sm:mb-8 md:text-lg">
                Begleitung bei psychischen Belastungen – persönlich vor Ort oder per Videosprechstunde.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full px-7 text-base font-medium bg-[#00A8CC] hover:bg-[#0096b8] text-white border-0 shadow-md sm:h-14 sm:px-10"
              >
                <a
                  href="https://www.doctolib.de/privatpraxis/duisburg/kalle-lemke-praktizierender-arzt-und-psychotherapeuth/booking/specialities?source=profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Termin bei Doctolib buchen
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollTo("leistungen")}
                className="h-12 rounded-full px-7 text-base font-medium border-foreground/20 hover:border-primary hover:text-primary bg-white/40 backdrop-blur-sm sm:h-14 sm:px-10"
              >
                Leistungen entdecken
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Praxisphilosophie */}
      <section className="py-28 md:py-40 bg-warm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <HeartHandshake className="w-11 h-11 text-warm-accent mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight">
                Ganzheitliche Behandlung im Mittelpunkt
              </h2>
              <p className="text-lg text-foreground/70 leading-loose mb-5">
                In meiner Praxis in Duisburg begleite ich Sie bei psychischen und psychosomatischen Beschwerden mit einem ganzheitlichen Ansatz. Dabei betrachte ich nicht nur einzelne Symptome, sondern beziehe auch psychologische und soziale Aspekte in die Behandlung mit ein.
              </p>
              <p className="text-lg text-foreground/70 leading-loose mb-5">
                Gemeinsam schauen wir, welcher Therapie- oder Behandlungsansatz für Ihre persönliche Situation am sinnvollsten ist. Falls erforderlich, kann die Behandlung auch medikamentös unterstützt werden, stets in enger Abstimmung mit Ihnen.
              </p>
              <p className="text-lg text-foreground/70 leading-loose">
                Ein besonderer Schwerpunkt liegt unter anderem in der Behandlung von Depressionen, Suchterkrankungen sowie chronischen Schmerzsymptomen. Ich freue mich darauf, Sie kennenzulernen.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Leistungen */}
      <section id="leistungen" className="py-28 md:py-40">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Unsere Leistungen</h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Umfassende diagnostische und therapeutische Angebote für Ihre seelische Gesundheit.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/40 h-full hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-12 h-12 bg-light rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <Brain size={22} />
                </div>
                <h3 className="text-xl font-semibold mb-5">Behandlungsfelder</h3>
                <ul className="space-y-3">
                  {["Depressionen", "Angststörungen", "Lebenskrisen", "Burnout"].map((s) => (
                    <li key={s} className="flex items-center gap-3 text-foreground/70">
                      <CheckCircle2 size={16} className="text-primary/60 shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/40 h-full hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-12 h-12 bg-light rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <Stethoscope size={22} />
                </div>
                <h3 className="text-xl font-semibold mb-5">Spezialisierungen</h3>
                <ul className="space-y-3">
                  {["ADHS im Erwachsenenalter", "Autismus-Spektrum", "Suchterkrankungen", "Chronische Schmerzen"].map((s) => (
                    <li key={s} className="flex items-center gap-3 text-foreground/70">
                      <CheckCircle2 size={16} className="text-primary/60 shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/40 h-full hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-12 h-12 bg-light rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <Users size={22} />
                </div>
                <h3 className="text-xl font-semibold mb-5">Therapieformen</h3>
                <ul className="space-y-3">
                  {["Psychotherapie", "Schmerztherapie", "Online-Therapie"].map((s) => (
                    <li key={s} className="flex items-center gap-3 text-foreground/70">
                      <CheckCircle2 size={16} className="text-primary/60 shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Ablauf */}
      <section className="py-28 md:py-40 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Der Weg zu uns</h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
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
                { step: "04", title: "Behandlung", desc: "Gemeinsame Entwicklung und Umsetzung Ihres individuellen Therapieplans." },
              ].map((item, i) => (
                <FadeIn key={item.step} delay={i * 0.1} className="text-center md:text-left flex flex-col md:block items-center">
                  <div className="w-24 h-24 bg-white border border-border/60 rounded-full flex items-center justify-center text-2xl font-semibold text-primary mb-6 shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-foreground/60 text-center md:text-left leading-relaxed text-sm">{item.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Über den Arzt */}
      <section id="ueber-uns" className="py-28 md:py-40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <FadeIn>
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-lg">
                <img src={drLemke} alt="Kalle Lemke" className="w-full h-full object-cover" />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-sm tracking-widest text-primary/70 uppercase font-medium mb-4">Über mich</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-7">Kalle Lemke</h2>
              <p className="text-lg text-foreground/70 mb-8 leading-loose">
                Nach über 20 Jahren medizinischer und persönlicher Entwicklung kehre ich in meine Heimatstadt Duisburg zurück. Mein beruflicher Weg hat mich über viele Stationen geführt und mich in meiner Arbeit wie auch persönlich geprägt. In meiner Praxis verbinde ich medizinisches Fachwissen mit einem Verständnis für die individuellen Lebenssituationen meiner Patienten.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 bg-warm px-5 py-3.5 rounded-2xl">
                  <CheckCircle2 size={18} className="text-warm-accent shrink-0" />
                  <span className="font-medium text-foreground/80">Deutsch & Englisch</span>
                </div>
                <div className="flex items-center gap-3 bg-warm px-5 py-3.5 rounded-2xl">
                  <CheckCircle2 size={18} className="text-warm-accent shrink-0" />
                  <span className="font-medium text-foreground/80">Mitglied DGPPN</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. Team /}
      <section className="py-28 md:py-40 bg-warm">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Unser Team</h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Wir begleiten Sie mit Einfühlungsvermögen, Fachkompetenz und persönlichem Engagement.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-border/30 text-center hover:shadow-md transition-all duration-300">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-5 ring-4 ring-light shadow-sm">
                  <img src={drLemke} alt="Kalle Lemke" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Kalle Lemke</h3>
                <p className="text-primary text-sm font-medium mb-3">Arzt & Psychotherapeuth</p>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Psychiater und Psychotherapeuth mit langjähriger Erfahrung. Spezialisiert auf ADHS, ASS und psychosomatische Erkrankungen.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-border/30 text-center hover:shadow-md transition-all duration-300">
                <div className="w-24 h-24 rounded-full bg-light flex items-center justify-center mx-auto mb-5 ring-4 ring-light shadow-sm">
                  <User size={36} className="text-primary/35" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Praxiskoordination</h3>
                <p className="text-primary text-sm font-medium mb-3">Verwaltung & Terminmanagement</p>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Erste Anlaufstelle für Ihre Anfragen, Terminvereinbarungen und organisatorische Anliegen.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-border/30 text-center hover:shadow-md transition-all duration-300">
                <div className="w-24 h-24 rounded-full bg-light flex items-center justify-center mx-auto mb-5 ring-4 ring-light shadow-sm">
                  <User size={36} className="text-primary/35" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Therapeutische Assistenz</h3>
                <p className="text-primary text-sm font-medium mb-3">Diagnostik & Patientenbegleitung</p>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Unterstützung bei diagnostischen Verfahren und der Begleitung von Patientinnen und Patienten.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. Kontakt & Öffnungszeiten */}
      <section id="kontakt" className="py-20 md:py-40 bg-background border-t border-border/40">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">Kontakt & Standort</h2>
              <p className="text-foreground/55 leading-relaxed">Grünstraße 17, 47051 Duisburg · Erdgeschoss · Parkplätze vorhanden</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 max-w-5xl mx-auto mb-10 md:mb-12">
            <FadeIn>
              <h3 className="text-xl font-semibold mb-7">Kontakt</h3>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-warm rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 mb-1">E-Mail</p>
                    <p className="text-lg font-medium">info@dellplatzpraxis.de</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-warm rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 mb-1">Adresse</p>
                    <p className="text-lg font-medium">Grünstraße 17, 47051 Duisburg</p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-warm rounded-2xl border border-border/30">
                <p className="font-medium text-accent mb-2">Wichtige Hinweise:</p>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>• Hausbesuche nach Vereinbarung möglich</li>
                  <li>• Im Notfall wählen Sie bitte die <strong>116117</strong></li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3 className="text-xl font-semibold mb-7">Öffnungszeiten</h3>
              <div className="bg-white p-5 sm:p-7 rounded-2xl shadow-sm border border-border/40">
                <table className="w-full">
                  <tbody className="divide-y divide-border/40">
                    {[
                      { day: "Montag", hours: "11:00 – 18:00" },
                      { day: "Dienstag", hours: "10:00 – 13:00, 14:00 – 18:00" },
                      { day: "Mittwoch", hours: "10:00 – 13:00, 14:00 - 18:00, 19:00 – 21:00" },
                      { day: "Donnerstag", hours: "10:00 – 13:00, 14:00 - 18:00, 19:00 – 21:00" },
                      { day: "Freitag", hours: "10:00 – 13:00" },
                    ].map(({ day, hours }) => (
                      <tr key={day} className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <td className="py-3.5 font-medium">{day}</td>
                        <td className="pb-3 sm:py-3.5 text-foreground/60 sm:text-right leading-relaxed break-words">{hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>

          <GoogleMapEmbed />
        </div>
      </section>

      {/* 8. Abrechnung */}
      <section className="py-20 md:py-24 bg-warm border-t border-border/30">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight mb-3">Abrechnung</h2>
            <p className="text-xl text-primary font-medium mb-5">Privat Versicherte & Selbstzahlende</p>
            <p className="text-foreground/65 leading-relaxed">
              Die Abrechnung erfolgt transparent nach der Gebührenordnung für Ärzte (GOÄ).
              Gesetzlich Versicherte können als Selbstzahlende behandelt werden.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

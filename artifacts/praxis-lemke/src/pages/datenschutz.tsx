import { ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const sections = [
  {
    title: "Verantwortlicher",
    placeholder: "Name und Kontaktdaten des Verantwortlichen gemäß Art. 13 DSGVO werden hier eingefügt.",
  },
  {
    title: "Allgemeine Hinweise",
    placeholder: "Allgemeine Hinweise zum Datenschutz und zur Datenverarbeitung auf dieser Website werden hier eingefügt.",
  },
  {
    title: "Erhebung personenbezogener Daten",
    placeholder: "Informationen darüber, welche personenbezogenen Daten bei der Nutzung dieser Website erhoben werden, werden hier eingefügt.",
  },
  {
    title: "Kontaktformular",
    placeholder: "Hinweise zur Verarbeitung von Daten, die über das Kontaktformular übermittelt werden, werden hier eingefügt.",
  },
  {
    title: "Terminbuchung über Doctolib",
    placeholder: "Informationen zur Datenverarbeitung bei der Terminbuchung über den Drittanbieter Doctolib werden hier eingefügt.",
  },
  {
    title: "Patientify",
    placeholder: "Informationen zur Datenverarbeitung durch den Dienst Patientify werden hier eingefügt.",
  },
  {
    title: "Hosting",
    placeholder: "Informationen zum Hosting-Anbieter dieser Website und zur dabei stattfindenden Datenverarbeitung werden hier eingefügt.",
  },
  {
    title: "Rechte der betroffenen Personen",
    placeholder: "Hinweise zu Ihren Rechten gemäß DSGVO (Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch) werden hier eingefügt.",
  },
];

export default function Datenschutz() {
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
              <ShieldCheck size={15} />
              Rechtliches
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-6 leading-tight max-w-3xl">
              Datenschutzerklärung
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl leading-relaxed font-light">
              Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Inhalt */}
      <section className="pt-10 pb-20 md:pt-12 md:pb-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">

            {/* Datenschutzerklärung wird hier eingefügt */}

            <FadeIn>
              <div className="space-y-10">
                {sections.map((section, i) => (
                  <div key={section.title}>
                    <h2 className="text-xl font-semibold tracking-tight mb-4 text-foreground">
                      {section.title}
                    </h2>
                    <div className="bg-warm rounded-2xl px-6 py-5 text-base leading-relaxed">
                      {/* {section.title} wird hier eingefügt */}
                      <p className="italic text-foreground/40">[{section.placeholder}]</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  );
}

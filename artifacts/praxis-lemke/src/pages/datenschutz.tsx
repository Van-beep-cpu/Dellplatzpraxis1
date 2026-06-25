import { FadeIn } from "@/components/FadeIn";

const sections = [
  {
    title: "Verantwortlicher",
    placeholder: "[Name und Kontaktdaten des Verantwortlichen gemäß Art. 13 DSGVO werden hier eingefügt.]",
  },
  {
    title: "Allgemeine Hinweise",
    placeholder: "[Allgemeine Hinweise zum Datenschutz und zur Datenverarbeitung auf dieser Website werden hier eingefügt.]",
  },
  {
    title: "Erhebung personenbezogener Daten",
    placeholder: "[Informationen darüber, welche personenbezogenen Daten bei der Nutzung dieser Website erhoben werden, werden hier eingefügt.]",
  },
  {
    title: "Kontaktformular",
    placeholder: "[Hinweise zur Verarbeitung von Daten, die über das Kontaktformular übermittelt werden, werden hier eingefügt.]",
  },
  {
    title: "Terminbuchung über Doctolib",
    placeholder: "[Informationen zur Datenverarbeitung bei der Terminbuchung über den Drittanbieter Doctolib werden hier eingefügt.]",
  },
  {
    title: "Patientify",
    placeholder: "[Informationen zur Datenverarbeitung durch den Dienst Patientify werden hier eingefügt.]",
  },
  {
    title: "Hosting",
    placeholder: "[Informationen zum Hosting-Anbieter dieser Website und zur dabei stattfindenden Datenverarbeitung werden hier eingefügt.]",
  },
  {
    title: "Rechte der betroffenen Personen",
    placeholder: "[Hinweise zu Ihren Rechten gemäß DSGVO (Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch) werden hier eingefügt.]",
  },
];

export default function Datenschutz() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-6 md:pt-36 md:pb-8 bg-gradient-to-br from-warm via-background to-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-3">
              Datenschutzerklärung
            </h1>
            <p className="text-base text-foreground/55 max-w-xl leading-relaxed">
              Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Inhalt */}
      <section className="pt-8 pb-20 md:pt-10 md:pb-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl">

            {/* Datenschutzerklärung wird hier eingefügt */}

            <FadeIn>
              <div className="divide-y divide-border/40">
                {sections.map((section) => (
                  <div key={section.title} className="py-6">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/40 mb-3">
                      {section.title}
                    </h2>
                    {/* {section.title} wird hier eingefügt */}
                    <p className="text-sm text-foreground/40 italic leading-relaxed">
                      {section.placeholder}
                    </p>
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

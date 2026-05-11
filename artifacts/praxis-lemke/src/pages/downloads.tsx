import React from "react";
import { Lock, FileDown, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";

const PASSWORD = "praxis2024";

const documents = [
  {
    label: "Anamnesebogen",
    filename: "Anamnesebogen_Stellplatzpraxis.pdf",
    desc: "Bitte ausgefüllt zum Erstgespräch mitbringen.",
  },
  {
    label: "Behandlungsvertrag",
    filename: "Behandlungsvertrag_Stellplatzpraxis.pdf",
    desc: "Grundlage unserer gemeinsamen therapeutischen Arbeit.",
  },
  {
    label: "Datenschutzerklärung",
    filename: "Datenschutzerklaerung_Stellplatzpraxis.pdf",
    desc: "Informationen zum Umgang mit Ihren persönlichen Daten.",
  },
  {
    label: "Schweigepflichtsentbindung",
    filename: "Schweigepflichtsentbindung_Stellplatzpraxis.pdf",
    desc: "Für die Kommunikation mit anderen behandelnden Ärzten.",
  },
];

export default function Downloads() {
  const [input, setInput] = React.useState("");
  const [unlocked, setUnlocked] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      {!unlocked ? (
        /* Password Gate */
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-center py-12">
          <FadeIn className="w-full max-w-sm">
            <div className="bg-white rounded-2xl shadow-sm border border-border p-8 text-center">
              <div className="w-14 h-14 bg-light rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                <Lock size={24} />
              </div>
              <h1 className="text-2xl font-semibold mb-2">Geschützter Bereich</h1>
              <p className="text-foreground/60 text-sm mb-8">
                Dieser Bereich ist nur für Patienten zugänglich. Bitte geben Sie das Ihnen mitgeteilte Passwort ein.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={input}
                    onChange={(e) => { setInput(e.target.value); setError(false); }}
                    placeholder="Passwort eingeben"
                    className={`w-full px-4 py-3 rounded-xl border text-base outline-none transition-colors pr-11 ${
                      error
                        ? "border-red-400 bg-red-50 focus:border-red-400"
                        : "border-border focus:border-primary bg-background"
                    }`}
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground/70 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {error && (
                  <p className="text-sm text-red-500">Falsches Passwort. Bitte versuchen Sie es erneut.</p>
                )}

                <Button type="submit" className="w-full h-12 rounded-xl text-base bg-primary hover:bg-primary/90 text-white">
                  Zugang anfordern
                </Button>
              </form>

              <p className="text-xs text-foreground/40 mt-6">
                Das Passwort erhalten Sie bei Ihrer ersten Vorstellung in der Praxis.
              </p>
            </div>
          </FadeIn>
        </div>
      ) : (
        /* Unlocked Content */
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FileDown size={16} />
                Patientenbereich
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">Formulare & Downloads</h1>
              <p className="text-foreground/60 max-w-xl mx-auto">
                Bitte laden Sie die für Sie relevanten Dokumente herunter und bringen Sie diese ausgefüllt zu Ihrem nächsten Termin mit.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-2xl mx-auto space-y-3 mb-16">
            {documents.map((doc, i) => (
              <FadeIn key={doc.label} delay={i * 0.08}>
                <div className="flex items-center justify-between gap-4 bg-white border border-border/70 rounded-xl px-6 py-5 hover:shadow-md hover:border-primary/30 transition-all duration-200 group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-light rounded-lg flex items-center justify-center text-primary shrink-0">
                      <FileDown size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{doc.label}</p>
                      <p className="text-sm text-foreground/55">{doc.desc}</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <FileDown size={15} />
                    PDF
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Tally Formular */}
          <FadeIn delay={0.3}>
            <div className="max-w-2xl mx-auto">
              <div className="bg-light rounded-2xl p-6 md:p-8 border border-border/60">
                <h2 className="text-xl font-semibold mb-2">Online-Formular</h2>
                <p className="text-foreground/65 text-sm mb-6">
                  Sie können das folgende Formular auch direkt online ausfüllen und absenden.
                </p>
                <div className="rounded-xl overflow-hidden border border-border/60 bg-white">
                  <iframe
                    src="https://tally.so/embed/placeholder"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    title="Online-Anmeldeformular"
                    className="w-full"
                  />
                </div>
                <p className="text-xs text-foreground/40 mt-3 text-center">
                  Formular wird in Kürze verfügbar sein.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "dellplatzpraxis_cookie_consent";
export const COOKIE_SETTINGS_EVENT = "cookie-settings:open";

type ConsentChoice = "necessary" | "all";

export function hasExternalServicesConsent() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(CONSENT_KEY) === "all";
}

export function CookieConsent() {
  const [choice, setChoice] = React.useState<ConsentChoice | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);

  React.useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY) as ConsentChoice | null;
    if (stored === "all" || stored === "necessary") {
      setChoice(stored);
      return;
    }
    setIsOpen(true);
  }, []);

  React.useEffect(() => {
    const openSettings = () => {
      setShowSettings(true);
      setIsOpen(true);
    };
    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  const saveChoice = (nextChoice: ConsentChoice) => {
    window.localStorage.setItem(CONSENT_KEY, nextChoice);
    setChoice(nextChoice);
    setIsOpen(false);
    setShowSettings(false);
    window.dispatchEvent(new CustomEvent("cookie-consent:changed", { detail: nextChoice }));
  };

  if (!isOpen) return null;

  const externalServicesActive = choice === "all";

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-4 md:p-6">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border/70 bg-white p-5 shadow-2xl md:p-6">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-lg font-semibold text-foreground">Cookie-Einstellungen</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/65">
              Wir verwenden notwendige Cookies für den Betrieb der Webseite. Externe Dienste werden nur nach Ihrer Zustimmung geladen.
            </p>
            {showSettings && (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/50 bg-light/50 p-4">
                  <p className="font-medium text-foreground">Notwendige Cookies</p>
                  <p className="mt-1 text-sm text-foreground/60">Immer aktiv</p>
                </div>
                <div className="rounded-2xl border border-border/50 bg-light/50 p-4">
                  <p className="font-medium text-foreground">Externe Dienste</p>
                  <p className="mt-1 text-sm text-foreground/60">
                    {externalServicesActive ? "Aktiv" : "Nicht aktiv"}
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
            <Button className="rounded-full bg-[#00A8CC] text-white hover:bg-[#0096b8]" onClick={() => saveChoice("all")}>Alle akzeptieren</Button>
            <Button variant="outline" className="rounded-full" onClick={() => saveChoice("necessary")}>Nur notwendige</Button>
            <Button variant="ghost" className="rounded-full" onClick={() => setShowSettings((v) => !v)}>Einstellungen</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function openCookieSettings() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
  }
}

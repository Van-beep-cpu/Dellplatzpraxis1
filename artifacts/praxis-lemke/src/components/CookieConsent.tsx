import React from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const CONSENT_KEY = "dellplatzpraxis_cookie_consent";
export const COOKIE_SETTINGS_EVENT = "cookie-settings:open";
export const COOKIE_CONSENT_CHANGED_EVENT = "cookie-consent:changed";

type ConsentChoice = "necessary" | "all";

export function hasExternalServicesConsent() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(CONSENT_KEY) === "all";
}

export function saveCookieConsent(nextChoice: ConsentChoice) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, nextChoice);
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_CHANGED_EVENT, { detail: nextChoice }));
}

export function CookieConsent() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [externalServicesEnabled, setExternalServicesEnabled] = React.useState(false);

  React.useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY) as ConsentChoice | null;
    if (stored === "all" || stored === "necessary") {
      setExternalServicesEnabled(stored === "all");
      return;
    }
    setIsOpen(true);
  }, []);

  React.useEffect(() => {
    const openSettings = () => {
      const currentChoice = window.localStorage.getItem(CONSENT_KEY) as ConsentChoice | null;
      setExternalServicesEnabled(currentChoice === "all");
      setShowSettings(true);
      setIsOpen(true);
    };
    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  const saveChoice = (nextChoice: ConsentChoice) => {
    saveCookieConsent(nextChoice);
    setExternalServicesEnabled(nextChoice === "all");
    setIsOpen(false);
    setShowSettings(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-4 md:p-6" role="region" aria-label="Cookie-Einstellungen">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border/70 bg-white p-5 shadow-2xl md:p-6">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-lg font-semibold text-foreground">Cookie-Einstellungen</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/65">
              Wir verwenden notwendige Cookies für den Betrieb der Webseite. Externe Dienste wie Google Maps werden nur nach Ihrer Zustimmung geladen.
            </p>
            {showSettings && (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/50 bg-light/50 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-foreground">Notwendige Cookies / technische Speicherung</p>
                      <p className="mt-1 text-sm text-foreground/60">Für den Betrieb der Website erforderlich und immer aktiv.</p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-foreground/60">Immer aktiv</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-border/50 bg-light/50 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-foreground">Externe Dienste</p>
                      <p className="mt-1 text-sm text-foreground/60">Erlaubt das Laden der Google-Maps-Karte.</p>
                    </div>
                    <Switch
                      checked={externalServicesEnabled}
                      onCheckedChange={setExternalServicesEnabled}
                      aria-label="Externe Dienste aktivieren"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
            {showSettings ? (
              <Button className="rounded-full bg-[#00A8CC] text-white hover:bg-[#0096b8]" onClick={() => saveChoice(externalServicesEnabled ? "all" : "necessary")}>Auswahl speichern</Button>
            ) : (
              <>
                <Button className="rounded-full bg-[#00A8CC] text-white hover:bg-[#0096b8]" onClick={() => saveChoice("all")}>Alle akzeptieren</Button>
                <Button variant="outline" className="rounded-full" onClick={() => saveChoice("necessary")}>Nur notwendige</Button>
              </>
            )}
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

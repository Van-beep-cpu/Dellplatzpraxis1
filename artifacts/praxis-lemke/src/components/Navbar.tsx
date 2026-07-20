import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSrc from "@assets/logo.png";

const leistungen = [
  { label: "ADHS im Erwachsenenalter", href: "/adhs" },
  { label: "Autismus-Spektrum (ASS)", href: "/ass" },
  { label: "Psychotherapie", href: "/psychotherapie" },
  { label: "Schmerztherapie", href: "/schmerztherapie" },
];

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
const anchorHref = (id: string) => `${basePath}/#${id}`;
const doctolibHref =
  "https://www.doctolib.de/privatpraxis/duisburg/kalle-lemke-praktizierender-arzt-und-psychotherapeuth/booking/specialities?source=profile";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isLeistungenOpen, setIsLeistungenOpen] = React.useState(false);
  const [isMobileLeistungenOpen, setIsMobileLeistungenOpen] =
    React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/" || location.pathname === "";
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsLeistungenOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLeistungenOpen(false);
  }, [location.pathname]);

  const handleAnchorClick = (e: React.MouseEvent, anchor: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsLeistungenOpen(false);

    if (isHome) {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate({ pathname: "/", hash: `#${anchor}` });
    }
  };

  return (
    <nav
      className={`site-nav fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="site-nav-inner container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoSrc}
            alt="Stellplatzpraxis Lemke"
            className="site-logo h-14 object-contain"
            style={{ mixBlendMode: "multiply" }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {/* Leistungen Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLeistungenOpen((v) => !v)}
              className="flex items-center gap-1 text-base font-medium text-foreground/75 hover:text-primary transition-colors"
            >
              Leistungen
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isLeistungenOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isLeistungenOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-border/60 py-2 z-50">
                <a
                  href={anchorHref("leistungen")}
                  onClick={(e) => handleAnchorClick(e, "leistungen")}
                  className="block px-4 py-2.5 text-sm text-foreground/75 hover:text-primary hover:bg-light transition-colors"
                >
                  Alle Leistungen
                </a>
                <div className="border-t border-border/40 my-1" />
                {leistungen.map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={() => setIsLeistungenOpen(false)}
                    className="block px-4 py-2.5 text-sm text-foreground/75 hover:text-primary hover:bg-light transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href={anchorHref("ueber-uns")}
            onClick={(e) => handleAnchorClick(e, "ueber-uns")}
            className="text-base font-medium text-foreground/75 hover:text-primary transition-colors"
          >
            Über uns
          </a>
          <a
            href={anchorHref("kontakt")}
            onClick={(e) => handleAnchorClick(e, "kontakt")}
            className="text-base font-medium text-foreground/75 hover:text-primary transition-colors"
          >
            Kontakt
          </a>
          <Link
            to="/downloads"
            className="text-base font-medium text-foreground/75 hover:text-primary transition-colors"
          >
            Downloads
          </Link>
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 h-14 text-base font-medium bg-[#00A8CC] hover:bg-[#0096b8] text-white border-0"
          >
            <a href={doctolibHref} target="_blank" rel="noopener noreferrer">
              Termin bei Doctolib buchen
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-nav-actions md:hidden">
          <Button
            asChild
            className="mobile-header-appointment h-11 rounded-full bg-[#00A8CC] px-4 text-sm font-medium text-white hover:bg-[#0096b8]"
          >
            <a
              href={doctolibHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Termin bei Doctolib buchen (öffnet in neuem Tab)"
            >
              Termin
            </a>
          </Button>
          <button
            className="mobile-menu-toggle p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg py-4 px-4 flex max-h-[calc(100vh-82px)] flex-col gap-2 overflow-y-auto"
        >
          <div>
            <button
              onClick={() => setIsMobileLeistungenOpen((v) => !v)}
              className="flex items-center justify-between w-full py-2 text-base font-medium text-foreground/75"
            >
              Leistungen
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isMobileLeistungenOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isMobileLeistungenOpen && (
              <div className="ml-4 flex flex-col gap-1 mb-2">
                <a
                  href={anchorHref("leistungen")}
                  onClick={(e) => handleAnchorClick(e, "leistungen")}
                  className="py-2 text-sm text-foreground/65 hover:text-primary"
                >
                  Alle Leistungen
                </a>
                {leistungen.map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    className="py-2 text-sm text-foreground/65 hover:text-primary"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <a
            href={anchorHref("ueber-uns")}
            onClick={(e) => handleAnchorClick(e, "ueber-uns")}
            className="py-2 text-base font-medium text-foreground/75"
          >
            Über uns
          </a>
          <a
            href={anchorHref("kontakt")}
            onClick={(e) => handleAnchorClick(e, "kontakt")}
            className="py-2 text-base font-medium text-foreground/75"
          >
            Kontakt
          </a>
          <Link
            to="/downloads"
            className="py-2 text-base font-medium text-foreground/75"
          >
            Downloads
          </Link>
          <Button
            asChild
            className="mt-2 h-12 w-full rounded-full bg-[#00A8CC] text-base text-white hover:bg-[#0096b8]"
          >
            <a
              href={doctolibHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Termin bei Doctolib buchen
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}

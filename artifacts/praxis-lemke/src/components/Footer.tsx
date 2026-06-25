import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoSrc from "@assets/logo.png";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
const anchorHref = (id: string) => `${basePath}/#${id}`;

export default function Footer() {
  return (
    <footer className="bg-accent text-white/80 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <Link to="/">
              <img
                src={logoSrc}
                alt="Stellplatzpraxis Lemke"
                className="h-14 mb-6 object-contain"
                style={{ mixBlendMode: "screen" }}
              />
            </Link>
            <p className="text-white/55 text-sm leading-relaxed">
              Privatärztliche Praxis für Gesundheit  
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-6">Praxis</h4>
            <ul className="space-y-4 text-sm">
              <li><a href={anchorHref("leistungen")} className="hover:text-white transition-colors">Leistungen</a></li>
              <li><a href={anchorHref("ueber-uns")} className="hover:text-white transition-colors">Über den Arzt</a></li>
              <li><a href={anchorHref("kontakt")} className="hover:text-white transition-colors">Kontakt & Anfahrt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-6">Leistungen</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/adhs" className="hover:text-white transition-colors">ADHS</Link></li>
              <li><Link to="/ass" className="hover:text-white transition-colors">Autismus-Spektrum</Link></li>
              <li><Link to="/psychotherapie" className="hover:text-white transition-colors">Psychotherapie</Link></li>
              <li><Link to="/schmerztherapie" className="hover:text-white transition-colors">Schmerztherapie</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-6">Rechtliches</h4>
            <ul className="space-y-4 text-sm mb-6">
              <li><Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link to="/downloads" className="hover:text-white transition-colors">Downloads</Link></li>
            </ul>
            
          </div>
        </div>

        <div className="pt-8 border-t border-warm-accent/30 text-center text-sm text-white/40">
          © Dellplatzpraxis Lemke. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}

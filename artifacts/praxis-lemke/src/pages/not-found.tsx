import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <p className="text-8xl font-semibold text-primary/20 mb-6">404</p>
        <h1 className="text-3xl font-semibold text-foreground mb-4">Seite nicht gefunden</h1>
        <p className="text-foreground/60 mb-8 max-w-sm mx-auto">
          Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <Button asChild className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-white">
          <Link to="/">Zurück zur Startseite</Link>
        </Button>
      </div>
    </div>
  );
}

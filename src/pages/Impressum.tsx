import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Impressum = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="container mx-auto px-6 py-24 max-w-3xl">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">Zurück zur Startseite</span>
      </Link>

      <h1 className="font-display text-4xl md:text-5xl text-foreground mb-12 font-light">
        Impressum
      </h1>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <div>
          <h2 className="text-foreground font-display text-xl mb-2">
            Firmenname
          </h2>
          <p>Umeri Schneiderei &amp; Boutique</p>
        </div>
        <div>
          <h2 className="text-foreground font-display text-xl mb-2">
            Rechtsform
          </h2>
          <p>Einzelfirma</p>
        </div>
        <div>
          <h2 className="text-foreground font-display text-xl mb-2">Adresse</h2>
          <p>
            Marktgasse 32
            <br />
            3011 Bern, Schweiz
          </p>
        </div>
        <div>
          <h2 className="text-foreground font-display text-xl mb-2">
            Inhaberin
          </h2>
          <p>Sejhan Umeri</p>
        </div>
        <div>
          <h2 className="text-foreground font-display text-xl mb-2">
            Handelsregister
          </h2>
          <p>CH-036.1.064.690-1</p>
        </div>
        <div>
          <h2 className="text-foreground font-display text-xl mb-2">UID</h2>
          <p>CHE-276.417.882</p>
        </div>
        <div>
          <h2 className="text-foreground font-display text-xl mb-2">Kontakt</h2>
          <p>
            Telefon: <a href="tel:+41313114131" className="hover:text-primary transition-colors">031 311 41 31</a>
            <br />
            E-Mail: <a href="mailto:info@umeri-schneiderei.ch" className="hover:text-primary transition-colors">info@umeri-schneiderei.ch</a>
          </p>
        </div>
        <div className="pt-4 text-xs text-muted-foreground/50">
          <p>Quelle: Handelsregisterangaben</p>
        </div>
      </div>
    </div>
  </div>
);

export default Impressum;

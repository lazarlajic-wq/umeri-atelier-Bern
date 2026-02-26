import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => (
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
        Datenschutzerklärung
      </h1>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <div>
          <h2 className="text-foreground font-display text-xl mb-3">
            Verantwortliche Stelle
          </h2>
          <p>
            Umeri Schneiderei &amp; Boutique
            <br />
            Marktgasse 32, 3011 Bern, Schweiz
          </p>
        </div>
        <div>
          <h2 className="text-foreground font-display text-xl mb-3">
            Erhebung und Verwendung von Daten
          </h2>
          <p>
            Wir erheben personenbezogene Daten nur, wenn Sie uns diese im Rahmen
            einer Kontaktanfrage freiwillig mitteilen. Diese Daten werden
            ausschliesslich zur Bearbeitung Ihres Anliegens verwendet und nicht
            an Dritte weitergegeben.
          </p>
        </div>
        <div>
          <h2 className="text-foreground font-display text-xl mb-3">Cookies</h2>
          <p>
            Diese Website verwendet technisch notwendige Cookies. Es werden
            keine Tracking- oder Marketing-Cookies eingesetzt.
          </p>
        </div>
        <div>
          <h2 className="text-foreground font-display text-xl mb-3">
            Ihre Rechte
          </h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer
            personenbezogenen Daten. Kontaktieren Sie uns hierzu unter den oben
            genannten Kontaktdaten.
          </p>
        </div>
        <div>
          <h2 className="text-foreground font-display text-xl mb-3">Kontakt</h2>
          <p>
            Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter:
            <br />
            [E-Mail einfügen]
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Datenschutz;

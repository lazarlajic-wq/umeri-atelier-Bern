import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import logoUmeri from "@/assets/logo-umeri.png";

const footerLinks = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Galerie", href: "/#galerie" },
  { label: "Bewertungen", href: "/#bewertungen" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontakt", href: "/#kontakt" },
];

const SiteFooter = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl text-foreground tracking-[0.3em] uppercase mb-4">
            Umeri
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Premium Schneiderei in Bern für Anzüge, Kleidungsanpassungen und
            Massanfertigungen. Über 30 Jahre Erfahrung und Leidenschaft für
            perfekte Passform.
          </p>
        </div>

        <div>
          <h4 className="text-foreground text-xs tracking-[0.2em] uppercase mb-4 font-medium">
            Navigation
          </h4>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-foreground text-xs tracking-[0.2em] uppercase mb-4 font-medium">
            Kontakt
          </h4>
          <address className="not-italic text-muted-foreground text-sm space-y-2">
            <p>Marktgasse 32</p>
            <p>3011 Bern, Schweiz</p>
            <p className="mt-4">
              <a href="tel:+41313114131" className="hover:text-primary transition-colors">031 311 41 31</a>
            </p>
          </address>
        </div>
      </div>

      <Separator className="my-8 bg-border" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground/60 text-xs">
        <p>
          &copy; {new Date().getFullYear()} Umeri Schneiderei &amp; Boutique.
          Alle Rechte vorbehalten.
        </p>
        <div className="flex gap-6">
          <Link
            to="/impressum"
            className="hover:text-primary transition-colors"
          >
            Impressum
          </Link>
          <Link
            to="/datenschutz"
            className="hover:text-primary transition-colors"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;

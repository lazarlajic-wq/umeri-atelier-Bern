import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Start", href: "#start" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Galerie", href: "#galerie" },
  { label: "Bewertungen", href: "#bewertungen" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button – fixed top right */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-6 right-6 z-50 bg-background/80 backdrop-blur-sm border border-border rounded-sm p-3 hover:border-primary transition-colors duration-300"
        aria-label="Menü öffnen"
      >
        <Menu size={22} className="text-primary" />
      </button>

      {/* Side drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-background border-l border-border flex flex-col"
            >
              {/* Close button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Menü schliessen"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <ul className="flex flex-col gap-6 px-10 mt-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-lg tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom branding */}
              <div className="mt-auto p-10">
                <span className="font-display text-primary text-sm tracking-[0.15em]">
                  Umeri-Schneiderei
                </span>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

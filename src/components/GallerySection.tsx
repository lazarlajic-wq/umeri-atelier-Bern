import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gallerySuit from "@/assets/gallery-suit.jpg";
import galleryFabric from "@/assets/gallery-fabric.jpg";

const categories = ["Alle", "Anzüge", "Anpassungen", "Details", "Stoffe"];

const galleryItems = [
  { src: gallerySuit, alt: "Massgeschneiderter dunkler Anzug", category: "Anzüge" },
  { src: galleryFabric, alt: "Hochwertige Stoffe in warmen Tönen", category: "Stoffe" },
  { src: gallerySuit, alt: "Anzug Detail – Revers und Knopf", category: "Details" },
  { src: galleryFabric, alt: "Stoffauswahl Premium Qualität", category: "Stoffe" },
  { src: gallerySuit, alt: "Kleidungsanpassung – perfekte Passform", category: "Anpassungen" },
  { src: galleryFabric, alt: "Handarbeit und Nähkunst", category: "Details" },
];

const GallerySection = () => {
  const [active, setActive] = useState("Alle");
  const filtered =
    active === "Alle"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <section id="galerie" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Galerie
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Einblicke in unser Handwerk
          </h2>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs tracking-[0.15em] uppercase px-4 py-2 transition-all duration-300 ${
                active === cat
                  ? "text-primary border-b border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={`${active}-${i}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-sm aspect-[4/5]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500 flex items-end p-6">
                  <span className="text-foreground text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    {item.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-muted-foreground/50 text-xs mt-8 italic">
          Platzhalterbilder – werden durch echte Aufnahmen ersetzt.
        </p>
      </div>
    </section>
  );
};

export default GallerySection;

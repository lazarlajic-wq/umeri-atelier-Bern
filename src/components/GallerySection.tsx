import { motion } from "framer-motion";
import gallerySuit from "@/assets/gallery-suit-real.jpeg";
import galleryFabrics from "@/assets/gallery-fabrics.png";
import galleryBeratung from "@/assets/gallery-beratung.png";
import galleryVermessung from "@/assets/gallery-vermessung.png";

const galleryItems = [
  { src: gallerySuit, alt: "Massgeschneiderter Zweireiher", text: "Massgeschneiderter Zweireiher – zeitlose Eleganz" },
  { src: galleryFabrics, alt: "Erlesene Stoffe", text: "Erlesene Stoffe – handverlesen für Sie" },
  { src: galleryBeratung, alt: "Persönliche Beratung im Atelier", text: "Persönliche Beratung – Ihr Stil, unser Handwerk" },
  { src: galleryVermessung, alt: "Präzises Vermessen", text: "Präzises Vermessen – die Basis perfekter Passform" },
];

const GallerySection = () => (
  <section id="galerie" className="py-24 md:py-32 bg-card">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
          Galerie
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          Einblicke in unser Handwerk
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-sm"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500 flex items-end p-6">
              <p className="text-foreground text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;

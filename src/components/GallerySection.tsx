import { motion } from "framer-motion";
import gallerySuit from "@/assets/gallery-suit-real.jpeg";
import galleryFabrics from "@/assets/gallery-fabrics.png";
import galleryBeratung from "@/assets/gallery-beratung.png";

const galleryItems = [
  {
    src: gallerySuit,
    alt: "Massgeschneiderter Zweireiher",
    label: "Massarbeit",
  },
  {
    src: galleryFabrics,
    alt: "Erlesene Stoffe",
    label: "Stoffe",
  },
  {
    src: galleryBeratung,
    alt: "Persönliche Beratung im Atelier",
    label: "Beratung",
  },
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex flex-col items-center"
          >
            <div className="w-full overflow-hidden rounded-sm border border-primary/40 p-[3px]">
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full aspect-[3/4] object-cover rounded-sm ${i === 0 ? "object-top" : ""}`}
                loading="lazy"
              />
            </div>
            <span className="mt-4 text-primary font-display text-lg tracking-[0.15em] uppercase">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;

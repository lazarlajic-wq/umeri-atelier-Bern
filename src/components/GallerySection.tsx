import { motion } from "framer-motion";
import gallerySuit from "@/assets/gallery-suit-real.jpeg";
import galleryFabrics from "@/assets/gallery-fabrics.png";
import galleryBeratung from "@/assets/gallery-beratung.png";
import galleryVermessung from "@/assets/gallery-vermessung.png";

const galleryItems = [
  {
    src: gallerySuit,
    alt: "Massgeschneiderter Zweireiher",
    title: "Massarbeit",
    text: "Zeitlose Eleganz, massgeschneidert für Sie.",
  },
  {
    src: galleryFabrics,
    alt: "Erlesene Stoffe",
    title: "Stoffe",
    text: "Handverlesen aus den besten Webereien Europas.",
  },
  {
    src: galleryBeratung,
    alt: "Persönliche Beratung im Atelier",
    title: "Beratung",
    text: "Ihr Stil, unser Handwerk – persönlich und diskret.",
  },
  {
    src: galleryVermessung,
    alt: "Präzises Vermessen",
    title: "Vermessung",
    text: "Die Basis perfekter Passform, auf den Millimeter.",
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
        className="text-center mb-20"
      >
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
          Galerie
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          Einblicke in unser Handwerk
        </h2>
      </motion.div>

      {/* Asymmetric editorial layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
        {/* Row 1: Large left + small right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 group"
        >
          <div className="overflow-hidden rounded-sm">
            <img
              src={galleryItems[0].src}
              alt={galleryItems[0].alt}
              className="w-full aspect-[3/4] md:aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-primary font-display text-lg tracking-wide">
              {galleryItems[0].title}
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-muted-foreground text-xs tracking-wide">
              {galleryItems[0].text}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-5 group md:mt-16"
        >
          <div className="overflow-hidden rounded-sm">
            <img
              src={galleryItems[1].src}
              alt={galleryItems[1].alt}
              className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-primary font-display text-lg tracking-wide">
              {galleryItems[1].title}
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-muted-foreground text-xs tracking-wide">
              {galleryItems[1].text}
            </span>
          </div>
        </motion.div>

        {/* Row 2: Small left + large right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-5 group"
        >
          <div className="overflow-hidden rounded-sm">
            <img
              src={galleryItems[2].src}
              alt={galleryItems[2].alt}
              className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-primary font-display text-lg tracking-wide">
              {galleryItems[2].title}
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-muted-foreground text-xs tracking-wide">
              {galleryItems[2].text}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-7 group md:-mt-16"
        >
          <div className="overflow-hidden rounded-sm">
            <img
              src={galleryItems[3].src}
              alt={galleryItems[3].alt}
              className="w-full aspect-[3/4] md:aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-primary font-display text-lg tracking-wide">
              {galleryItems[3].title}
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-muted-foreground text-xs tracking-wide">
              {galleryItems[3].text}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default GallerySection;

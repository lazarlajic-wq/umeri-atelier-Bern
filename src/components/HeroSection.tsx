import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tailoring.jpg";

const HeroSection = () => (
  <section
    id="start"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Schneider bei der Arbeit an einem Massanzug"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/50" />
    </div>

    {/* Grain overlay */}
    <div className="absolute inset-0 grain-overlay pointer-events-none" />

    {/* Content */}
    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-primary tracking-[0.4em] uppercase text-xs sm:text-sm mb-6 font-medium">
          Schneiderei in Bern
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 leading-[1.1]">
          Perfekte Passform.
          <br />
          <span className="italic">Zeitloser Stil.</span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Anzüge, Anpassungen und Massanfertigungen in Bern.
          <br className="hidden sm:block" />
          Handwerk mit über 30 Jahren Erfahrung.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="gold" size="lg" asChild>
            <a href="#kontakt">Termin anfragen</a>
          </Button>
          <Button variant="goldOutline" size="lg" asChild>
            <a href="#leistungen">Leistungen ansehen</a>
          </Button>
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
    </motion.div>
  </section>
);

export default HeroSection;

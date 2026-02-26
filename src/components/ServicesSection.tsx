import { motion } from "framer-motion";
import { Scissors, Ruler, Shirt, Heart, Briefcase, Zap } from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Anzüge nach Mass",
    description:
      "Beratung, Stoffauswahl, Schnitt, Anprobe und Fertigstellung – für Ihren perfekten Anzug.",
    id: "massanfertigung",
  },
  {
    icon: Scissors,
    title: "Kleidungsanpassungen",
    description:
      "Kürzen, enger oder weiter machen, Ärmel, Taille, Reissverschluss und Reparaturen.",
    id: "anpassungen",
  },
  {
    icon: Shirt,
    title: "Spezielle Massanfertigungen",
    description:
      "Hemden, Westen, Hosen, Abendgarderobe und individuelle Spezialwünsche.",
  },
  {
    icon: Heart,
    title: "Hochzeitsanzug",
    description:
      "Der perfekte Anzug für Ihren besonderen Tag – massgeschneidert und unvergesslich.",
  },
  {
    icon: Briefcase,
    title: "Business Garderobe",
    description:
      "Professionell und souverän auftreten mit massgeschneiderter Business-Kleidung.",
  },
  {
    icon: Zap,
    title: "Express Anpassungen",
    description:
      "Schnelle Änderungen für dringende Anlässe – ohne Kompromisse bei der Qualität.",
  },
];

const ServicesSection = () => (
  <section id="leistungen" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
          Unsere Leistungen
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          Handwerk auf höchstem Niveau
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            id={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-8 bg-card border border-border rounded-sm hover:border-primary/30 transition-all duration-500"
          >
            <service.icon
              className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300"
              strokeWidth={1.5}
            />
            <h3 className="font-display text-xl text-foreground mb-3">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

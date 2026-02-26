import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Beratung & Stil-Ziel",
    description:
      "Persönliches Gespräch über Ihre Wünsche, Anlässe und Stilvorstellungen.",
  },
  {
    number: "02",
    title: "Vermessen & Schnitt",
    description:
      "Präzise Massnahme und Erstellung Ihres individuellen Schnittmusters.",
  },
  {
    number: "03",
    title: "Stoffauswahl & Details",
    description:
      "Auswahl hochwertiger Stoffe, Knöpfe, Futter und besonderer Details.",
  },
  {
    number: "04",
    title: "Anprobe & Feinschliff",
    description:
      "Sorgfältige Zwischenanprobe mit feinen Anpassungen für die perfekte Passform.",
  },
  {
    number: "05",
    title: "Übergabe & Pflege-Tipps",
    description:
      "Ihr fertiges Kleidungsstück mit professionellen Pflegehinweisen.",
  },
];

const ProcessSection = () => (
  <section className="py-24 md:py-32 bg-card">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
          Unser Ablauf
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          Von der Idee zum perfekten Stück
        </h2>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-8 mb-12 last:mb-0"
          >
            <div className="flex flex-col items-center">
              <span className="font-display text-2xl text-primary font-light">
                {step.number}
              </span>
              {i < steps.length - 1 && (
                <div className="w-px flex-1 mt-4 bg-gradient-to-b from-primary/40 to-transparent" />
              )}
            </div>
            <div className="pb-8">
              <h3 className="font-display text-xl text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;

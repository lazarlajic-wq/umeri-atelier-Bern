import { motion } from "framer-motion";
import aboutImage from "@/assets/about-workshop.jpg";

const AboutSection = () => (
  <section id="ueber-uns" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            <img
              src={aboutImage}
              alt="Umeri Schneiderei Werkstatt in Bern"
              className="w-full aspect-[4/5] object-cover rounded-sm"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-sm">
              <span className="font-display text-3xl block font-light">
                30+
              </span>
              <span className="text-xs tracking-[0.2em] uppercase">
                Jahre Erfahrung
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Über uns
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8">
            Tradition trifft Präzision
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-sm">
            <p>
              Seit über 30 Jahren steht die Umeri Schneiderei für erstklassiges
              Handwerk im Herzen von Bern. Jedes Kleidungsstück, das unsere
              Werkstatt verlässt, ist das Ergebnis jahrelanger Erfahrung, Liebe
              zum Detail und höchster Ansprüche an Qualität.
            </p>
            <p>
              Wir arbeiten mit ausgewählten Stoffen und modernsten Techniken, um
              Ihnen eine Passform zu bieten, die Sie spüren. Diskrete Beratung
              und persönliche Betreuung stehen bei uns im Mittelpunkt.
            </p>
            <p>
              Ob Massanzug, Kleidungsanpassung oder Spezialanfertigung – bei uns
              sind Sie in besten Händen.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marco B.",
    text: "Mein Hochzeitsanzug sass perfekt. Die Beratung war diskret und professionell – ich habe mich sofort wohlgefühlt.",
    stars: 5,
  },
  {
    name: "Silvia K.",
    text: "Endlich jemand, der meine Wünsche versteht. Die Anpassungen sind jedes Mal tadellos. Absolute Empfehlung.",
    stars: 5,
  },
  {
    name: "Thomas R.",
    text: "Seit Jahren mein Vertrauens-Schneider in Bern. Qualität und Handwerk auf höchstem Niveau.",
    stars: 5,
  },
  {
    name: "Elena M.",
    text: "Ein Kleid für einen besonderen Anlass – massgeschneidert und wunderschön. Vielen Dank an das Team.",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section id="bewertungen" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
          Kundenstimmen
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          Was unsere Kunden sagen
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 bg-card border border-border rounded-sm"
          >
            <Quote
              className="w-8 h-8 text-primary/30 mb-4"
              strokeWidth={1}
            />
            <p className="text-foreground/90 leading-relaxed mb-6 italic font-display text-lg">
              „{t.text}"
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{t.name}</span>
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-3.5 h-3.5 fill-primary text-primary"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

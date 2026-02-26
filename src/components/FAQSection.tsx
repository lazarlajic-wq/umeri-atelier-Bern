import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Wie lange dauert eine Anpassung?",
    a: "Je nach Aufwand zwischen 2 und 7 Werktagen. Einfache Änderungen wie Kürzen sind oft innerhalb weniger Tage erledigt.",
  },
  {
    q: "Wie lange dauert eine Massanfertigung?",
    a: "Eine vollständige Massanfertigung dauert in der Regel 4 bis 8 Wochen, abhängig von Stoff, Komplexität und Auslastung.",
  },
  {
    q: "Brauche ich einen Termin?",
    a: "Wir empfehlen eine Terminvereinbarung, damit wir uns ausreichend Zeit für Sie nehmen können. Für kleinere Anliegen sind auch spontane Besuche möglich.",
  },
  {
    q: "Welche Stoffe und Stile sind möglich?",
    a: "Wir arbeiten mit einer grossen Auswahl an hochwertigen Stoffen – von klassischer Schurwolle über Leinen bis hin zu edlen Seidenmischungen. Stilistisch ist alles möglich: klassisch, modern, sportlich-elegant.",
  },
  {
    q: "Was kostet eine Massanfertigung oder Anpassung?",
    a: "Die Kosten richten sich nach Aufwand, Material und Komplexität. Gerne erstellen wir Ihnen ein individuelles Angebot nach einer persönlichen Beratung.",
  },
  {
    q: "Sind Express-Anpassungen möglich?",
    a: "Ja, für dringende Anlässe bieten wir Express-Änderungen an. Bitte kontaktieren Sie uns direkt, damit wir die Machbarkeit prüfen können.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24 md:py-32 bg-card">
    <div className="container mx-auto px-6 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
          Häufige Fragen
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          FAQ
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border border-border rounded-sm px-6 bg-background/50 data-[state=open]:border-primary/20"
          >
            <AccordionTrigger className="text-foreground hover:text-primary font-display text-lg py-5 hover:no-underline text-left">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;

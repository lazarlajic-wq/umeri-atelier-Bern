import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Vielen Dank! Wir melden uns bei Ihnen.");
    setFormData({ name: "", phone: "", email: "", message: "", date: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  return (
    <section id="kontakt" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Kontakt
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Termin anfragen
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <Input
              name="name"
              placeholder="Name *"
              required
              maxLength={100}
              value={formData.name}
              onChange={handleChange}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 h-12"
            />
            <Input
              name="phone"
              placeholder="Telefon"
              maxLength={20}
              value={formData.phone}
              onChange={handleChange}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 h-12"
            />
            <Input
              name="email"
              type="email"
              placeholder="E-Mail *"
              required
              maxLength={255}
              value={formData.email}
              onChange={handleChange}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 h-12"
            />
            <Input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 h-12"
            />
            <Textarea
              name="message"
              placeholder="Ihr Anliegen *"
              required
              maxLength={1000}
              value={formData.message}
              onChange={handleChange}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 min-h-[120px]"
            />
            <Button variant="gold" size="lg" type="submit" className="w-full">
              Termin anfragen
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin
                className="w-5 h-5 text-primary mt-1 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="text-foreground font-medium mb-1 text-sm">
                  Adresse
                </h3>
                <p className="text-muted-foreground text-sm">
                  Marktgasse 32
                  <br />
                  3011 Bern, Schweiz
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock
                className="w-5 h-5 text-primary mt-1 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="text-foreground font-medium mb-1 text-sm">
                  Öffnungszeiten
                </h3>
                <p className="text-muted-foreground text-sm">
                  Mo – Mi: 08:00 – 18:00
                  <br />
                  Do: 08:00 – 18:00
                  <br />
                  Fr: 08:00 – 18:00
                  <br />
                  Sa: 08:00 – 17:00
                  <br />
                  So: Geschlossen
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone
                className="w-5 h-5 text-primary mt-1 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="text-foreground font-medium mb-1 text-sm">
                  Telefon
                </h3>
                <p className="text-muted-foreground text-sm">
                  <a href="tel:+41313114131" className="hover:text-primary transition-colors">031 311 41 31</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail
                className="w-5 h-5 text-primary mt-1 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="text-foreground font-medium mb-1 text-sm">
                  E-Mail
                </h3>
                <p className="text-muted-foreground text-sm">
                  <a href="mailto:info@umeri-schneiderei.ch" className="hover:text-primary transition-colors">info@umeri-schneiderei.ch</a>
                </p>
              </div>
            </div>

            <div className="w-full aspect-video rounded-sm overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.8!2d7.4474!3d46.9480!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39b2a6c76c3d%3A0x0!2sMarktgasse+32%2C+3011+Bern!5e0!3m2!1sde!2sch!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Umeri Schneiderei – Marktgasse 32, 3011 Bern"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiPhone, HiMail, HiLocationMarker, HiPaperAirplane, HiBriefcase } from "react-icons/hi";
import { Tilt } from "react-tilt";

const contactInfo = [
  { icon: HiPhone, label: "Phone", value: "+1(341) 529-6552", href: "tel:+13415296552" },
  { icon: HiMail, label: "Email", value: "srichaitanyabhargavi@gmail.com", href: "mailto:srichaitanyabhargavi@gmail.com" },
  { icon: HiLocationMarker, label: "Location", value: "Macomb, IL", href: null },
  { icon: HiBriefcase, label: "Relocation", value: "Open to Relocate", href: null },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:srichaitanyabhargavi@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-accent/5 blur-3xl -bottom-20 right-0"
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-accent font-display mb-3">Let's Connect</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 max-w-5xl">
          <motion.form
            initial={{ opacity: 0, x: -30, rotateY: 5 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
            style={{ perspective: '1000px' }}
          >
            {[
              { label: "Your Name", type: "text", key: "name" as const },
              { label: "Your Email", type: "email", key: "email" as const },
            ].map((field) => (
              <motion.div 
                key={field.key} 
                whileHover={{ x: 6, scale: 1.01 }}
                className="relative"
              >
                <label className="text-sm font-display text-muted-foreground mb-2 block tracking-wide">{field.label}</label>
                <input
                  type={field.type}
                  required
                  value={form[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl glass-card border-border/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 font-body text-foreground transition-all"
                  style={{ boxShadow: '0 4px 12px hsl(var(--primary) / 0.05)' }}
                />
              </motion.div>
            ))}
            <motion.div 
              whileHover={{ x: 6, scale: 1.01 }}
              className="relative"
            >
              <label className="text-sm font-display text-muted-foreground mb-2 block tracking-wide">Your Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl glass-card border-border/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 font-body text-foreground resize-none transition-all"
                style={{ boxShadow: '0 4px 12px hsl(var(--primary) / 0.05)' }}
              />
            </motion.div>
            <motion.button
              type="submit"
              whileHover={{ 
                scale: 1.05, 
                rotateZ: 2, 
                boxShadow: "0 25px 50px -10px hsl(var(--primary) / 0.4)",
                y: -3
              }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-primary text-primary-foreground font-display font-medium rounded-xl flex items-center gap-2 transition-all premium-shadow"
            >
              Send Message <HiPaperAirplane className="rotate-90" />
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -5 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
            style={{ perspective: '1000px' }}
          >
            {contactInfo.map((item, i) => (
              <Tilt
                key={item.label}
                options={{
                  max: 15,
                  scale: 1.05,
                  speed: 400,
                  glare: true,
                  "max-glare": 0.2,
                }}
              >
                <motion.a
                  href={item.href || undefined}
                  whileHover={{ 
                    x: 10, 
                    rotateY: 5, 
                    boxShadow: "0 20px 40px -8px hsl(var(--accent) / 0.15)"
                  }}
                  className="flex items-center gap-5 glass-card rounded-2xl p-5 group cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    whileHover={{ rotateY: 180, rotateX: 180, scale: 1.15 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/15 to-primary/10 flex items-center justify-center shrink-0 border border-border/30"
                    style={{ transformStyle: 'preserve-3d', boxShadow: '0 8px 20px hsl(var(--accent) / 0.3)' }}
                  >
                    <item.icon className="text-accent text-2xl" />
                  </motion.div>
                  <div>
                    <p className="text-xs font-display text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-body font-medium text-foreground mt-0.5">{item.value}</p>
                  </div>
                </motion.a>
              </Tilt>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

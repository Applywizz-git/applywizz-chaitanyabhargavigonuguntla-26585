import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiCheckCircle, HiBadgeCheck } from "react-icons/hi";
import { Tilt } from "react-tilt";

const certifications = [
  { name: "Machine Learning Specialization", source: "Coursera", icon: "🤖", focus: "Supervised & Unsupervised Learning, Recommender Systems" },
  { name: "Deep Learning Specialization", source: "Coursera", icon: "🧠", focus: "Neural Networks, RNNs, CNNs, Optimization" },
  { name: "Generative AI with Large Language Models", source: "Coursera", icon: "✨", focus: "LLMs, Transformers, Fine-Tuning, RLHF" },
  { name: "MLOps Specialization", source: "Coursera", icon: "⚙️", focus: "ML Systems Production, Lifecycle Management" },
  { name: "AI Engineering Foundations: Machine Learning", source: "LinkedIn Learning", icon: "🛠️", focus: "Model Development, Evaluation Metrics" },
  { name: "Building Generative AI Applications with LLMs", source: "LinkedIn Learning", icon: "🚀", focus: "Application Development, API Integration" },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-28 bg-muted/20 relative overflow-hidden">
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-primary/5 blur-3xl -top-20 left-1/3"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-accent font-display mb-3">Verified Credentials</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl" style={{ perspective: '1000px' }}>
          {certifications.map((c, i) => (
            <Tilt
              key={c.name}
              options={{
                max: 15,
                scale: 1.06,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 25, rotateX: -5 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ 
                  y: -8, 
                  rotateY: 8, 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px -10px hsl(var(--accent) / 0.15)"
                }}
                className="glass-card rounded-2xl p-5 flex items-start gap-4 group h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  whileHover={{ rotateY: 360, rotateX: 360, scale: 1.3 }}
                  transition={{ duration: 0.7, type: "spring" }}
                  className="text-2xl mt-0.5"
                  style={{ filter: 'drop-shadow(0 4px 12px hsl(var(--accent) / 0.3))' }}
                >
                  {c.icon}
                </motion.div>
                <div className="flex-1">
                  <p className="text-sm font-display font-medium text-card-foreground leading-snug">{c.name}</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <HiBadgeCheck className="text-accent text-sm" />
                    <p className="text-xs font-body text-muted-foreground">{c.source}</p>
                  </div>
                  <p className="text-[10px] font-body text-accent/70 mt-2 font-medium border-t border-border/20 pt-2 flex items-center gap-1.5">
                    <HiCheckCircle className="shrink-0" /> {c.focus}
                  </p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

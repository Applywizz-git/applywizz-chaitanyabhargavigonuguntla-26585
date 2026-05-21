import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiCog, HiDatabase, HiChartBar, HiLightningBolt, HiSparkles } from "react-icons/hi";
import { Tilt } from "react-tilt";

const highlights = [
  { icon: HiCog, label: "AI/ML Engineering", desc: "Production-grade ML systems" },
  { icon: HiLightningBolt, label: "Scalable ML Pipelines", desc: "PySpark, Kafka, Distributed processing" },
  { icon: HiSparkles, label: "LLM & Generative AI", desc: "Transformer models, BERT, RAG" },
  { icon: HiDatabase, label: "MLOps & Deployment", desc: "MLflow, Docker, Kubernetes" },
  { icon: HiChartBar, label: "Explainable AI", desc: "SHAP, LIME, Interpretability" },
];

const counters = [
  { value: "5+", label: "Years of Experience" },
  { value: "18%", label: "Accuracy Improvement" },
  { value: "40%", label: "Manual Effort Reduction" },
];

const achievements = [
  { icon: "💳", text: "Deployed transaction authorization models using Python, XGBoost, and TensorFlow at AMEX, increasing payment approval accuracy." },
  { icon: "📦", text: "Engineered shipment anomaly detection models at USPS, increasing package tracking accuracy across delivery operations." },
  { icon: "🏦", text: "Developed transaction risk and customer scoring models at Citi Bank, increasing prediction accuracy across enterprise workflows." },
  { icon: "⚡", text: "Reduced anomaly detection latency by 30% using PySpark and Kafka at Deutsche Borse Group." },
  { icon: "💊", text: "Optimized regional supply chain demand forecasting at Hetero Healthcare, reducing stockouts by 22%." },
];

const Counter = ({ value, label, index }: { value: string; label: string; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <Tilt
      options={{
        max: 20,
        scale: 1.08,
        speed: 400,
        glare: true,
        "max-glare": 0.25,
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30, rotateX: -15 }}
        animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        whileHover={{ 
          scale: 1.08, 
          rotateY: 10, 
          boxShadow: "0 25px 50px -10px hsl(var(--accent) / 0.2)"
        }}
        className="text-center glass-card rounded-2xl p-6"
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
      >
        <p className="text-4xl md:text-6xl font-heading font-bold text-accent" style={{ textShadow: '0 4px 20px hsl(var(--accent) / 0.3)' }}>{value}</p>
        <p className="text-xs md:text-sm font-display text-muted-foreground mt-2 tracking-wide">{label}</p>
      </motion.div>
    </Tilt>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-highlight/5 blur-3xl top-10 right-0"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-accent font-display mb-3">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            The Story Behind <span className="text-gradient">the Models</span>
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-3xl leading-relaxed mb-14">
            Expert AI/ML Engineer with over 5 years of experience building production-grade machine learning 
            systems across insurance, healthcare, and financial domains. Specialized in designing and 
            scaling end-to-end ML pipelines, real-time inference services, and LLM-based document intelligence 
            systems that drive measurable business impact and operational efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 mb-16" style={{ perspective: '1000px' }}>
          {highlights.map((h, i) => (
            <Tilt
              key={h.label}
              options={{
                max: 15,
                scale: 1.05,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 10, 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px -10px hsl(var(--accent) / 0.2)"
                }}
                className="flex flex-col items-center text-center p-5 rounded-2xl glass-card cursor-default h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  whileHover={{ rotateY: 360, rotateX: 360, scale: 1.2 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="mb-3"
                >
                  <h.icon className="text-3xl text-accent icon-3d" />
                </motion.div>
                <p className="text-sm font-display font-medium text-card-foreground">{h.label}</p>
                <p className="text-xs font-body text-muted-foreground mt-1">{h.desc}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {counters.map((c, i) => (
            <Counter key={c.label} {...c} index={i} />
          ))}
        </div>

        {/* Key Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
            Key <span className="text-gradient">Achievements</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, i) => (
              <Tilt
                key={i}
                options={{
                  max: 10,
                  scale: 1.03,
                  speed: 400,
                  glare: true,
                  "max-glare": 0.15,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ 
                    x: 5, 
                    boxShadow: "0 15px 30px -8px hsl(var(--accent) / 0.15)"
                  }}
                  className="glass-card rounded-xl p-5 flex items-start gap-4"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <span className="text-2xl">{achievement.icon}</span>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{achievement.text}</p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

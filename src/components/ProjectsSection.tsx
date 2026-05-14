import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiTrendingUp, HiUsers, HiCurrencyDollar, HiExternalLink } from "react-icons/hi";
import { Tilt } from "react-tilt";
import fraudDetection from "@/assets/fraud-detection.png";
import healthcareRisk from "@/assets/project-customer-analytics.jpg";
import docProcessing from "@/assets/project-financial-analytics.jpg";

const projects = [
  {
    icon: HiTrendingUp,
    image: fraudDetection,
    title: "End-to-End Fraud Detection System with Real-Time Inference ",
    problem: "Financial transactions required real-time monitoring to identify suspicious activities and reduce false positives in high-volume environments.",
    solution: "Built a scalable pipeline using PySpark, Kafka, and XGBoost, processing high-volume streams and improving detection accuracy by 17%.",
    tools: "PySpark · Kafka · XGBoost · Docker · Kubernetes",
    impact: ["+17% Detection Accuracy", "Real-Time Inference", "MLOps Pipeline"],
  },
  {
    icon: HiUsers,
    image: healthcareRisk,
    title: "Healthcare Risk Prediction & Explainable AI  System",
    problem: "Predicting patient readmission accurately is critical for improving care quality and reducing healthcare costs in clinical settings.",
    solution: "Developed predictive models using TensorFlow and PyTorch, incorporating SHAP and LIME for explainability and transparency.",
    tools: "TensorFlow · PyTorch · Scikit-learn · SHAP · LIME",
    impact: ["+14% Prediction Accuracy", "Explainable AI", "Clinical Integration"],
  },
  {
    icon: HiCurrencyDollar,
    image: docProcessing,
    title: "RAG-Based Intelligent  Document Processing System",
    problem: "Large volumes of unstructured documents made manual summarization and context-aware retrieval slow and error-prone.",
    solution: "Designed a retrieval-augmented generation pipeline using LangChain, OpenAI API, and FAISS for intelligent document processing.",
    tools: "LangChain · OpenAI API · FAISS · Prompt Engineering",
    impact: ["Semantic Search", "LoRA/PEFT Fine-Tuning", "Context-Aware AI"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-accent/5 blur-3xl top-20 -right-20"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-accent font-display mb-3">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Signature <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Tilt
              key={p.title}
              options={{
                max: 20,
                scale: 1.05,
                speed: 500,
                glare: true,
                "max-glare": 0.25,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40, rotateX: -5 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                whileHover={{
                  y: -15,
                  rotateY: 8,
                  boxShadow: "0 35px 70px -15px hsl(var(--accent) / 0.25)"
                }}
                className="glass-card rounded-3xl overflow-hidden group cursor-pointer h-full"
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <motion.div
                    whileHover={{ scale: 1.2, rotateZ: 15 }}
                    className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-card/80 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <HiExternalLink className="text-foreground text-sm" />
                  </motion.div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-display text-accent mb-1 tracking-wide uppercase">{p.tools}</p>
                  <h3 className="font-heading text-lg font-bold text-card-foreground mb-4">{p.title}</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-[10px] font-heading font-bold text-accent uppercase tracking-wider mb-1">Problem:</p>
                      <p className="text-xs font-body text-muted-foreground leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">{p.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-heading font-bold text-accent uppercase tracking-wider mb-1">Solution:</p>
                      <p className="text-xs font-body text-muted-foreground leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">{p.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.impact.map((h) => (
                      <motion.span
                        key={h}
                        whileHover={{ scale: 1.1, y: -3, rotateZ: 3 }}
                        className="px-3 py-1.5 text-[10px] rounded-lg bg-muted/80 text-muted-foreground font-display border border-border/30"
                      >
                        {h}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

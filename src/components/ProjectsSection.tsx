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
    title: "End-to-End Fraud Detection System with Real-Time Inference",
    problem: "Financial transactions required real-time monitoring to identify suspicious activities and reduce false positives in high-volume environments.",
    highlights: [
      "Built a scalable fraud detection pipeline using PySpark, Kafka, and XGBoost, processing high-volume transaction streams and improving detection accuracy by 17% while reducing false positives.",
      "Designed feature engineering and model optimization workflows using Pandas, Scikit-learn, and MLflow, improving F1-score and ensuring stable model performance across validation datasets.",
      "Deployed real-time inference services using FastAPI, Docker, and Kubernetes, enabling low-latency predictions and ensuring high availability across distributed environments."
    ],
    tools: "PySpark · Kafka · XGBoost · Pandas · Scikit-learn · MLflow · FastAPI · Docker · Kubernetes",
    impact: ["+17% Detection Accuracy", "Real-Time Inference", "MLOps Pipeline"],
  },
  {
    icon: HiUsers,
    image: healthcareRisk,
    title: "Healthcare Risk Prediction & Explainable AI System",
    problem: "Predicting patient readmission accurately is critical for improving care quality and reducing healthcare costs in clinical settings.",
    highlights: [
      "Developed patient readmission prediction models using TensorFlow, PyTorch, and Scikit-learn, improving prediction accuracy by 14% across clinical datasets.",
      "Applied explainability techniques using SHAP and LIME to interpret model outputs, improving transparency and supporting adoption by healthcare stakeholders.",
      "Integrated models into production using MLflow, CI/CD pipelines, and Docker, ensuring reproducible deployments and consistent model performance."
    ],
    tools: "TensorFlow · PyTorch · Scikit-learn · SHAP · LIME · MLflow · Docker · CI/CD",
    impact: ["+14% Prediction Accuracy", "Explainable AI", "Clinical Integration"],
  },
  {
    icon: HiCurrencyDollar,
    image: docProcessing,
    title: "RAG-Based Intelligent Document Processing System",
    problem: "Large volumes of unstructured documents made manual summarization and context-aware retrieval slow and error-prone.",
    highlights: [
      "Designed a document retrieval and generation pipeline using LangChain, OpenAI API, and FAISS, enabling context-aware responses and improving retrieval accuracy.",
      "Implemented semantic search using embedding models and vector databases, enhancing document relevance and reducing search latency across large datasets.",
      "Improved response quality using prompt engineering and fine-tuning techniques (LoRA, PEFT), increasing output consistency and contextual accuracy."
    ],
    tools: "LangChain · OpenAI API · FAISS · Vector Databases · LoRA · PEFT · Prompt Engineering",
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
                      <p className="text-[10px] font-heading font-bold text-accent uppercase tracking-wider mb-1">Key Highlights:</p>
                      <ul className="space-y-1.5 mt-1 list-none">
                        {p.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-[11px] font-body text-muted-foreground leading-relaxed flex gap-2 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
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

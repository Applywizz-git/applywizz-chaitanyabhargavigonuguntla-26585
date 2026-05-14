import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiChartBar, HiDatabase, HiCloud, HiCog, HiSearch, HiCode, HiPresentationChartLine, HiSparkles, HiLightningBolt } from "react-icons/hi";
import { Tilt } from "react-tilt";

const skillCategories = [
  {
    icon: HiCode,
    title: "Programming & Data Processing",
    skills: ["Python", "SQL", "Pandas", "NumPy"],
  },
  {
    icon: HiSearch,
    title: "Machine Learning & Modeling",
    skills: [
      "Supervised & Unsupervised Learning",
      "Deep Learning",
      "Feature Engineering",
      "Model Evaluation (Precision, Recall, F1, ROC-AUC)",
      "Hyperparameter Optimization",
      "Ensemble Methods",
      "K-Means Clustering",
      "Time Series Forecasting",
      "Bayesian Modeling",
    ],
  },
  {
    icon: HiCog,
    title: "ML Frameworks",
    skills: ["Scikit-learn", "XGBoost", "TensorFlow", "PyTorch"],
  },
  {
    icon: HiSparkles,
    title: "NLP, Generative AI & LLMs",
    skills: [
      "Transformer Models (BERT)",
      "NLP Pipelines (NER, Text Classification)",
      "Semantic Search",
      "Embeddings",
      "LLMs",
      "Prompt Engineering",
      "Fine-Tuning (LoRA, PEFT)",
      "RAG",
      "LangChain",
      "OpenAI API",
      "Azure OpenAI",
      "Vector Databases (FAISS)",
    ],
  },
  {
    icon: HiDatabase,
    title: "MLOps & Model Lifecycle",
    skills: ["MLflow", "Experiment Tracking", "Model Versioning", "Model Monitoring", "Drift Detection", "CI/CD", "Jenkins"],
  },
  {
    icon: HiCloud,
    title: "Deployment & Backend",
    skills: ["FastAPI", "Flask", "REST APIs", "Docker", "Kubernetes", "Model Deployment"],
  },
  {
    icon: HiLightningBolt,
    title: "Data Engineering & Processing",
    skills: ["Apache Spark", "PySpark", "Spark Streaming", "Kafka", "Airflow", "ETL Pipelines", "Batch & Stream Processing", "Distributed Systems"],
  },
  {
    icon: HiCloud,
    title: "Cloud & Data Platforms",
    skills: ["AWS (SageMaker, S3, EC2)", "GCP (Vertex AI, BigQuery)", "Azure Machine Learning", "Snowflake", "Amazon Redshift"],
  },
  {
    icon: HiSearch,
    title: "Responsible AI & Explainability",
    skills: ["SHAP", "LIME", "Model Interpretability", "Bias Mitigation"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 bg-muted/20 relative overflow-hidden">
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-highlight/5 blur-3xl bottom-0 left-1/2"
        animate={{ x: [-50, 50, -50] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-accent font-display mb-3">Technical Arsenal</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" style={{ perspective: '1200px' }}>
          {skillCategories.map((cat, i) => (
            <Tilt
              key={cat.title}
              options={{
                max: 15,
                scale: 1.05,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: -8 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ 
                  y: -12, 
                  rotateY: 10, 
                  rotateX: -5, 
                  scale: 1.05, 
                  boxShadow: "0 30px 60px -12px hsl(var(--accent) / 0.2)"
                }}
                className="glass-card rounded-2xl p-6 h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  whileHover={{ rotateY: 360, rotateX: 360, scale: 1.25 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 flex items-center justify-center mb-4"
                  style={{ boxShadow: '0 8px 20px hsl(var(--accent) / 0.3)' }}
                >
                  <cat.icon className="text-2xl text-accent icon-3d" />
                </motion.div>
                <h3 className="font-display text-base font-semibold text-card-foreground mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <motion.span 
                      key={s} 
                      whileHover={{ scale: 1.12, y: -3, rotateZ: 5 }}
                      className="px-2.5 py-1.5 text-xs rounded-lg bg-muted/60 text-muted-foreground font-body border border-border/30"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiBriefcase, HiOfficeBuilding, HiLocationMarker, HiCalendar } from "react-icons/hi";
import { Tilt } from "react-tilt";

const experiences = [
  {
    title: "AI/ML Engineer",
    company: "Success Tech Solutions Inc",
    period: "Jun 2024 - Mar 2025",
    location: "Mckinney, TX",
    color: "from-primary to-accent",
    problem: "Insurance underwriting workflows were hindered by manual claims summarization and high false positive rates in fraud detection, leading to operational bottlenecks.",
    solution: "Engineered fraud detection models using XGBoost and Scikit-learn, and developed a RAG-based document intelligence system using BERT and LangChain for automated summarization.",
    tools: "Python, Scikit-learn, XGBoost, PySpark, BERT, LangChain, FAISS, FastAPI, Docker, MLflow",
    impact: [
      "Improved prediction accuracy by 18% and reduced false positives",
      "Reduced manual review effort by 40% through RAG-based automation",
      "Reduced fraud detection latency by 25% using Spark and Kafka",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company: "Delisis Inc",
    period: "Jan 2023 - May 2024",
    location: "San Jose, CA",
    color: "from-accent to-highlight",
    problem: "Healthcare providers lacked predictive insights for patient readmission and real-time monitoring of vitals, leading to reactive rather than proactive care.",
    solution: "Devised patient readmission models using TensorFlow and PyTorch, and built real-time anomaly detection workflows using Spark Streaming and Kafka.",
    tools: "TensorFlow, PyTorch, Scikit-learn, XGBoost, Airflow, PySpark, Kafka, FastAPI, Docker",
    impact: [
      "Improved prediction accuracy by 15% for patient readmission",
      "Improved care prioritization efficiency by 20% through risk stratification",
      "Reduced data processing time by 35% via Airflow ETL pipelines",
    ],
  },
  {
    title: "Machine Learning Engineer / AI Engineer",
    company: "Deutsche Borse Group",
    period: "Oct 2021 - Sep 2022",
    location: "Eschborn, Germany",
    color: "from-highlight to-primary",
    problem: "High-volume trading systems required faster and more accurate identification of suspicious activity to strengthen market surveillance and regulatory compliance.",
    solution: "Built fraud detection models and anomaly detection pipelines using Scikit-learn and XGBoost, processing high-volume streaming data with PySpark and Kafka.",
    tools: "Python, Scikit-learn, XGBoost, PySpark, Kafka, Airflow, SQL, BERT, Flask, Docker",
    impact: [
      "Improved detection accuracy by 16% on transaction datasets",
      "Reduced anomaly detection latency by 30% through streaming processing",
      "Improved compliance review efficiency by 25% using NLP risk signals",
    ],
  },
  {
    title: "Data Scientist",
    company: "Hetero Healthcare Limited",
    period: "Jun 2017 - Sep 2019",
    location: "Chennai, India",
    color: "from-primary to-highlight",
    problem: "Inefficiencies in healthcare supply chain and sales forecasting led to stockouts and inconsistent regional distribution planning.",
    solution: "Analyzed supply chain data using Python and SQL, and built demand forecasting models using Scikit-learn to optimize inventory planning.",
    tools: "Python, SQL, Pandas, NumPy, Scikit-learn, XGBoost, Airflow, Power BI",
    impact: [
      "Improved inventory planning accuracy by 18% through demand analysis",
      "Reduced stockouts by 22% using advanced demand forecasting",
      "Reduced manual effort by 35% through Airflow reporting automation",
    ],
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Tilt
      options={{
        max: 15,
        scale: 1.03,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40, rotateX: -5 }}
        animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        whileHover={{ 
          y: -10, 
          rotateY: 5, 
          boxShadow: "0 35px 70px -15px hsl(var(--accent) / 0.2)"
        }}
        className="glass-card rounded-3xl overflow-hidden group h-full flex flex-col"
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        <div className={`h-1.5 bg-gradient-to-r ${exp.color}`} />
        <div className="p-6 md:p-8 flex flex-col flex-1">
          <div className="flex items-start gap-4 mb-5">
            <motion.div 
              whileHover={{ rotateY: 180, scale: 1.15 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center shrink-0 border border-border/30"
              style={{ transformStyle: 'preserve-3d', boxShadow: '0 8px 20px hsl(var(--accent) / 0.2)' }}
            >
              <HiBriefcase className="text-accent text-2xl" />
            </motion.div>
            <div>
              <h3 className="font-heading text-lg font-bold text-card-foreground">
                {exp.title} — {exp.company}
              </h3>
              <div className="flex items-center gap-3 mt-1.5 text-xs font-body text-muted-foreground">
                <span className="flex items-center gap-1"><HiLocationMarker className="text-accent/60" />{exp.location}</span>
                <span className="flex items-center gap-1"><HiCalendar className="text-accent/60" />{exp.period}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 flex-1">
            <div>
              <p className="text-xs font-heading font-bold text-accent uppercase tracking-wider mb-1">Problem:</p>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{exp.problem}</p>
            </div>
            
            <div>
              <p className="text-xs font-heading font-bold text-accent uppercase tracking-wider mb-1">Solution:</p>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{exp.solution}</p>
            </div>
            
            <div>
              <p className="text-xs font-heading font-bold text-accent uppercase tracking-wider mb-1">Tools & Technologies:</p>
              <p className="text-sm font-body text-accent/80 font-medium">{exp.tools}</p>
            </div>
            
            <div>
              <p className="text-xs font-heading font-bold text-accent uppercase tracking-wider mb-1">Impact / Results:</p>
              <ul className="space-y-2 mt-2">
                {exp.impact.map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-sm font-body text-muted-foreground flex gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-28 bg-muted/20 relative overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/3 blur-3xl -bottom-40 -left-40"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-accent font-display mb-3">Career Journey</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

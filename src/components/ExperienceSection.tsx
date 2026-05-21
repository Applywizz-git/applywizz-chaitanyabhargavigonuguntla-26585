import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiBriefcase, HiOfficeBuilding, HiLocationMarker, HiCalendar } from "react-icons/hi";
import { Tilt } from "react-tilt";

const experiences = [
  {
    title: "AI/ML Engineer",
    company: "AMEX",
    period: "Mar 2026 - Present",
    location: "Illinois",
    color: "from-primary to-accent",
    problem: "Large-scale enterprise payment processing networks required accelerated transaction evaluation speed, highly precise risk scoring, and advanced anomaly detection to prevent fraud while maintaining high payment approval accuracy.",
    solution: "Deployed spend-behavior and payment authorization models using XGBoost and TensorFlow, orchestrated event-driven scoring workflows through Spark Streaming, and designed Azure OpenAI dispute classifiers.",
    tools: "Python · XGBoost · TensorFlow · Snowflake · SQL · NumPy · Spark Streaming · Azure OpenAI · Transformer Models · Bayesian Modeling · Flask · Docker · Jenkins · Apache Airflow · SHAP · LIME",
    impact: [
      "Deployed transaction authorization models using Python, XGBoost, and TensorFlow to evaluate customer spending behavior, increasing payment approval accuracy across enterprise card processing systems.",
      "Examined merchant activity and transaction history using Snowflake, SQL, and NumPy to identify abnormal purchase behavior, strengthening enterprise payment risk intelligence workflows.",
      "Orchestrated event-driven payment scoring workflows through Spark Streaming and distributed processing frameworks, accelerating transaction evaluation speed across high-volume digital payment networks.",
      "Designed intelligent dispute classification systems using Transformer Models, Azure OpenAI, and semantic embeddings to expand automation across customer investigation operations.",
      "Strengthened transaction risk scoring through Bayesian Modeling and ensemble learning methods, boosting classification precision across large-scale authorization datasets.",
      "Integrated AI-powered payment analytics services using Flask, REST APIs, and Docker to sustain stable throughput and support scalable enterprise inference environments.",
      "Coordinated automated retraining and deployment orchestration using Jenkins, Airflow, and model versioning practices, increasing release reliability across distributed production systems.",
      "Assessed live model quality through SHAP, LIME, ROC-AUC, and drift detection frameworks, preserving consistent fraud scoring behavior across evolving transaction patterns."
    ],
  },
  {
    title: "AI/ML Engineer",
    company: "USPS (United States Postal Service)",
    period: "Jun 2024 - Mar 2025",
    location: "Mckinney, TX",
    color: "from-accent to-highlight",
    problem: "Large-scale parcel movement and logistics operations required automated exception handling, package tracking anomaly detection, and rapid issue analysis to minimize exceptions.",
    solution: "Engineered shipment anomaly detection models using Scikit-learn and XGBoost, built PySpark pipelines, and developed a FAISS-based RAG issue classification system using BERT and LangChain.",
    tools: "Python · Scikit-learn · XGBoost · PySpark · Pandas · Apache Spark · Kafka · BERT · OpenAI API · LangChain · FAISS · FastAPI · Docker · Kubernetes · MLflow · CI/CD",
    impact: [
      "Engineered shipment anomaly detection models using Python, Scikit-learn, and XGBoost on logistics and parcel movement datasets, increasing package tracking accuracy across delivery operations.",
      "Leveraged PySpark and Pandas to transform shipment, routing, and warehouse data into model-ready inputs, accelerating operational analytics and strengthening delivery forecasting workflows.",
      "Assembled scalable ML pipelines using Apache Spark and Kafka to support batch and near real-time parcel monitoring, decreasing shipment exception response time across logistics networks.",
      "Developed intelligent document processing workflows using BERT, OpenAI API, LangChain, and FAISS-based RAG to automate shipment classification and delivery issue analysis across support operations.",
      "Executed hyperparameter tuning using Scikit-learn with experiment tracking workflows, increasing F1-score and stabilizing model performance across logistics prediction datasets.",
      "Delivered low-latency inference services by building REST APIs using FastAPI and Docker, enabling scalable integration with shipment tracking and operational management systems.",
      "Established reproducible ML workflows using MLflow, CI/CD pipelines, and Kubernetes, increasing deployment consistency and strengthening distributed model lifecycle management.",
      "Monitored production model behavior using ROC-AUC, F1-score, and drift monitoring frameworks, preserving reliable shipment prediction accuracy across evolving delivery patterns."
    ],
  },
  {
    title: "Machine Learning Engineer",
    company: "Citi Bank",
    period: "Dec 2022 - May 2024",
    location: "San Jose, CA",
    color: "from-highlight to-primary",
    problem: "Banking analytics systems and payment processing networks required real-time fraud monitoring, transaction risk scoring, and customer segmentation to mitigate risk without impacting throughput.",
    solution: "Developed customer scoring models using TensorFlow and PyTorch, integrated SQL/PySpark pipelines, built Spark Streaming anomaly detection, and utilized BERT text classification for payment narratives.",
    tools: "Python · TensorFlow · PyTorch · Scikit-learn · XGBoost · K-Means · Apache Airflow · PySpark · SQL · Spark Streaming · Kafka · Transformer Models · BERT · spaCy · FastAPI · Docker · Kubernetes · Jenkins · CI/CD",
    impact: [
      "Developed transaction risk and customer scoring models using TensorFlow and PyTorch on financial datasets, increasing prediction accuracy across enterprise banking analytics workflows.",
      "Mobilized Scikit-learn, XGBoost, and K-Means to segment customer transaction behavior, strengthening fraud monitoring and enhancing financial risk assessment capabilities.",
      "Structured and maintained ETL pipelines using Apache Airflow, PySpark, and SQL to integrate transaction, customer, and operational banking datasets for large-scale analytics.",
      "Engineered real-time anomaly detection workflows using Apache Spark Streaming and Kafka, accelerating suspicious transaction identification across high-volume payment systems.",
      "Applied NLP pipelines using Transformer Models, BERT, and spaCy to extract financial insights from transaction narratives and banking documents, expanding automation across compliance operations.",
      "Enhanced model performance through feature engineering and hyperparameter optimization using Scikit-learn with structured experiment tracking, increasing precision and validation consistency across risk models.",
      "Delivered scalable inference services using FastAPI, Docker, and Kubernetes to support enterprise banking analytics, sustaining stable API throughput during peak transaction workloads.",
      "Implemented CI/CD pipelines using Jenkins and automated experiment tracking workflows, increasing deployment reliability and supporting consistent model release management."
    ],
  },
  {
    title: "Machine Learning Engineer / AI Engineer",
    company: "Deutsche Borse Group",
    period: "Oct 2021 - Sep 2022",
    location: "Eschborn, Germany",
    color: "from-primary to-highlight",
    problem: "High-volume trading systems required faster and more accurate identification of suspicious activity to strengthen market surveillance and regulatory compliance.",
    solution: "Built fraud detection models and anomaly detection pipelines using Scikit-learn and XGBoost, processing high-volume streaming data with PySpark and Kafka.",
    tools: "Python · Scikit-learn · XGBoost · PySpark · Kafka · Apache Airflow · SQL · Apache Spark · BERT · spaCy · Flask · Docker · MLflow",
    impact: [
      "Built fraud detection models using Python, Scikit-learn, and XGBoost on transaction datasets, improving detection accuracy by 16% and strengthening surveillance across trading systems.",
      "Leveraged PySpark and Kafka to process high-volume streaming data, reducing anomaly detection latency by 30% and enabling faster identification of suspicious activity.",
      "Designed data integration workflows using Apache Airflow and SQL, consolidating transaction and regulatory datasets and reducing data preparation time by 35%.",
      "Engineered distributed data processing pipelines using Apache Spark, improving processing efficiency by 40% and enabling near real-time risk analytics.",
      "Applied NLP pipelines using BERT and spaCy to extract structured risk signals from financial documents, improving compliance review efficiency by 25%.",
      "Enhanced model performance through feature engineering and hyperparameter optimization using Scikit-learn with experiment tracking, increasing precision and recall across validation datasets.",
      "Crafted scalable inference services using Flask and Docker, improving response time by 20% and enabling integration with internal risk management systems.",
      "Implemented model monitoring workflows using MLflow and evaluation metrics such as ROC-AUC and F1-score, maintaining production performance and reducing model drift impact."
    ],
  },
  {
    title: "Data Scientist",
    company: "Hetero Healthcare Limited",
    period: "Jun 2017 - Sep 2019",
    location: "Chennai, India",
    color: "from-highlight to-accent",
    problem: "Inefficiencies in healthcare supply chain and sales forecasting led to stockouts and inconsistent regional distribution planning.",
    solution: "Analyzed supply chain data using Python and SQL, and built demand forecasting models using Scikit-learn to optimize inventory planning.",
    tools: "Python · SQL · Pandas · NumPy · Scikit-learn · XGBoost · Apache Airflow · Power BI",
    impact: [
      "Analyzed healthcare supply chain and sales data using Python, SQL, Pandas, and NumPy, uncovering demand patterns that improved inventory planning accuracy by 18% across regional distribution centers.",
      "Built demand forecasting models using Scikit-learn and XGBoost, reducing stockouts by 22% and improving product availability across multiple warehouse locations.",
      "Designed data transformation workflows using Pandas and SQL, improving data quality and reducing inconsistencies by 30%, enabling reliable downstream analytics and reporting.",
      "Developed integrated analytical datasets using SQL and Python, reducing data preparation time by 25% and enabling faster access to insights for business teams.",
      "Created interactive dashboards using Power BI, improving visibility into sales and inventory KPIs and accelerating decision-making for supply chain operations.",
      "Automated reporting pipelines using Apache Airflow and SQL, reducing manual effort by 35% and ensuring consistent and timely data refresh cycles.",
      "Performed statistical analysis using Python and NumPy, identifying key drivers of demand variability and improving the accuracy of forecasting inputs.",
      "Collaborated with business stakeholders to build analytical solutions using Python and Scikit-learn, enabling data-driven decisions and supporting early adoption of predictive analytics."
    ],
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Tilt
      options={{
        max: 10,
        scale: 1.02,
        speed: 400,
        glare: true,
        "max-glare": 0.15,
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40, rotateX: -5 }}
        animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        whileHover={{ 
          y: -10, 
          rotateY: 2, 
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

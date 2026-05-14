import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap, HiLocationMarker, HiCalendar } from "react-icons/hi";
import { Tilt } from "react-tilt";

const education = [
  {
    degree: "Master of Science in Data Science",
    school: "University of Trier",
    location: "Germany",
    period: "Oct 2019 - Jun 2022",
    color: "from-primary to-accent",
    coursework: ["Machine Learning", "Statistical Computing", "Big Data Analytics", "Deep Learning", "NLP", "Distributed Systems"],
    highlights: ["Specialized in AI/ML & Data Engineering", "Conducted research on scalable ML models"],
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-accent font-display mb-3">Academic Foundation</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Education & <span className="text-gradient">Learning</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8 max-w-5xl">
          {education.map((e, i) => (
            <Tilt
              key={e.school}
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
                transition={{ duration: 0.7, delay: i * 0.2 }}
                whileHover={{
                  y: -12,
                  rotateY: 8,
                  scale: 1.04,
                  boxShadow: "0 35px 70px -15px hsl(var(--accent) / 0.2)"
                }}
                className="glass-card rounded-[2rem] overflow-hidden h-full flex flex-col"
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              >
                <div className={`h-1.5 bg-gradient-to-r ${e.color}`} />
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start gap-5 mb-6">
                    <motion.div
                      whileHover={{ rotateY: 180, rotateX: 180, scale: 1.15 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/15 to-primary/10 flex items-center justify-center shrink-0 border border-border/30"
                      style={{ transformStyle: 'preserve-3d', boxShadow: '0 8px 20px hsl(var(--accent) / 0.3)' }}
                    >
                      <HiAcademicCap className="text-accent text-3xl" />
                    </motion.div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-card-foreground leading-tight">{e.degree}</h3>
                      <p className="text-base font-display text-accent mt-2 font-medium">{e.school}</p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs font-body text-muted-foreground">
                        <span className="flex items-center gap-1.5"><HiLocationMarker className="text-accent/60" />{e.location}</span>
                        <span className="flex items-center gap-1.5"><HiCalendar className="text-accent/60" />{e.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 flex-1">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-heading font-bold text-accent mb-3">Key Coursework</p>
                      <div className="flex flex-wrap gap-2">
                        {e.coursework.map(course => (
                          <span key={course} className="px-3 py-1.5 text-[10px] font-display rounded-lg bg-muted/60 text-muted-foreground border border-border/30">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-heading font-bold text-accent mb-3">Highlights</p>
                      <ul className="space-y-2">
                        {e.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex gap-2.5 text-xs font-body text-muted-foreground leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default EducationSection;

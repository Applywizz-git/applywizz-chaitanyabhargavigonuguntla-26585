import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HiArrowDown, HiDownload, HiSparkles } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 overflow-hidden relative">
      {/* Background Effects */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-accent/5 blur-3xl -top-20 -right-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-primary/5 blur-3xl bottom-20 -left-20"
        animate={{
          scale: [1, 0.8, 1],
          rotate: [0, -90, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="max-w-3xl"
        >
          {/* Tag */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <HiSparkles className="text-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Chaitanya Bhargavi <br />
            <span className="text-gradient">Gonuguntla</span>
          </h1>

          {/* Role */}
          <p className="text-xl text-accent mb-4">
            AI/ML Engineer
          </p>

          {/* Description */}
          <p className="text-muted-foreground mb-8">
            AI/ML Engineer with 5+ years of experience building production-grade machine learning systems across insurance, healthcare, and financial domains.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="projects" smooth duration={500} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white rounded-xl flex items-center gap-2"
              >
                Explore My Work <HiArrowDown />
              </motion.button>
            </Link>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card rounded-xl flex items-center gap-2"
            >
              Download Resume <HiDownload />
            </motion.a>
          </div>
        </motion.div>

        {/* 🔥 Floating Skills at Bottom */}
        <div className="relative w-full flex justify-center flex-wrap gap-6 mt-10">
          
          <motion.div
            className="px-4 py-2 rounded-xl glass-card border border-accent/30"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-sm text-accent font-semibold">PyTorch</span>
          </motion.div>

          <motion.div
            className="px-4 py-2 rounded-xl glass-card border border-primary/30"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <span className="text-sm text-primary font-semibold">TensorFlow</span>
          </motion.div>

          <motion.div
            className="px-4 py-2 rounded-xl glass-card border border-highlight/30"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-sm text-highlight font-semibold">LLMs</span>
          </motion.div>

          <motion.div
            className="px-4 py-2 rounded-xl glass-card border border-accent/30"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.2, repeat: Infinity }}
          >
            <span className="text-sm text-accent font-semibold">LangChain</span>
          </motion.div>

          <motion.div
            className="px-4 py-2 rounded-xl glass-card border border-primary/30"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
          >
            <span className="text-sm text-primary font-semibold">PySpark</span>
          </motion.div>

          <motion.div
            className="px-4 py-2 rounded-xl glass-card border border-highlight/30"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <span className="text-sm text-highlight font-semibold">MLOps</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const firstName = "CHAITANYA".split("");
const lastName = "BHARGAVI".split("");

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 600);
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating 3D orbs */}
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-accent/10 blur-3xl"
            animate={{ x: [0, 50, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.2, 0.9, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{ top: '20%', left: '15%' }}
          />
          <motion.div
            className="absolute w-48 h-48 rounded-full bg-primary/10 blur-3xl"
            animate={{ x: [0, -40, 50, 0], y: [0, 30, -40, 0], scale: [1, 0.9, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{ bottom: '20%', right: '15%' }}
          />

          <div className="relative" style={{ perspective: '1000px' }}>
            <motion.div
              initial={{ rotateX: 20, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex gap-2 md:gap-3 mb-4"
            >
              {firstName.map((letter, i) => (
                <motion.span
                  key={`f-${i}`}
                  className="text-3xl md:text-6xl font-display font-bold text-foreground"
                  style={{ textShadow: '0 4px 12px hsl(var(--primary) / 0.2)' }}
                  initial={{ opacity: 0, y: 30, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, type: "spring" }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <motion.div className="flex gap-2 md:gap-3 justify-center">
              {lastName.map((letter, i) => (
                <motion.span
                  key={`l-${i}`}
                  className="text-3xl md:text-6xl font-display font-bold text-accent"
                  style={{ textShadow: '0 4px 12px hsl(var(--accent) / 0.3)' }}
                  initial={{ opacity: 0, y: 30, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.7 + i * 0.08, duration: 0.5, type: "spring" }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.p
            className="mt-6 text-sm font-display tracking-[0.4em] uppercase text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            AI/ML Engineer
          </motion.p>

          <motion.div
            className="mt-6 h-[2px] rounded-full bg-gradient-to-r from-primary via-accent to-highlight"
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

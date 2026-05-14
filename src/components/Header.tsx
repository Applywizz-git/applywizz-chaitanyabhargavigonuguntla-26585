import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  "home", "about", "experience", "projects", "skills", "education", "certifications", "contact",
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/30" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="home" smooth duration={500} className="cursor-pointer">
            <motion.span 
              whileHover={{ scale: 1.15, rotateY: 15, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              className="font-heading text-2xl font-bold text-foreground inline-block"
              style={{ textShadow: '0 4px 12px hsl(var(--primary) / 0.2)', transformStyle: 'preserve-3d' }}
            >
              CB<span className="text-accent">.</span>
            </motion.span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                smooth
                duration={500}
                offset={-80}
                spy
                activeClass="!text-accent !bg-accent/10"
                className="text-sm font-display capitalize text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg transition-all cursor-pointer relative group"
              >
                <motion.span
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </nav>

          <div className="flex md:hidden items-center gap-3">
            <motion.button 
              onClick={() => setMenuOpen(true)} 
              whileHover={{ scale: 1.1 }}
              className="text-foreground"
            >
              <HiMenuAlt3 size={24} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <motion.button 
              onClick={() => setMenuOpen(false)} 
              whileHover={{ rotate: 90, scale: 1.1 }}
              className="absolute top-6 right-6 text-foreground"
            >
              <HiX size={28} />
            </motion.button>
            <nav className="flex flex-col items-center gap-5">
              {navItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 30, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: i * 0.06, type: "spring" }}
                >
                  <Link
                    to={item}
                    smooth
                    duration={500}
                    offset={-80}
                    className="text-3xl font-heading capitalize text-foreground hover:text-accent transition-colors cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

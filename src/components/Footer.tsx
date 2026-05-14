import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { HiMail, HiHeart } from "react-icons/hi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border/30 relative overflow-hidden">
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-accent/3 blur-3xl top-0 left-1/2"
        animate={{ x: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="font-heading text-xl font-bold text-foreground"
            >
              CB<span className="text-accent">.</span>
            </motion.span>
            <p className="text-sm font-body text-muted-foreground mt-1 flex items-center gap-1 justify-center md:justify-start">
              © {year} — Crafted with <HiHeart className="text-accent inline" /> by Chaitanya Bhargavi
            </p>
          </div>
          <div className="flex items-center gap-3">
            {[
              { href: "mailto:srichaitanyabhargavi@gmail.com", icon: HiMail, size: 17 },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ 
                  y: -6, 
                  rotateY: 20, 
                  rotateX: 10,
                  scale: 1.15, 
                  boxShadow: "0 15px 30px -5px hsl(var(--accent) / 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-accent transition-colors"
                style={{ 
                  transformStyle: 'preserve-3d',
                  filter: 'drop-shadow(0 4px 12px hsl(var(--accent) / 0.2))'
                }}
              >
                <social.icon size={social.size} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

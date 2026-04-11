import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const typewriterTexts = [
  "BUILDING 0→1 PLATFORMS",
  "SCALING DATA SYSTEMS",
  "OPTIMIZING AI WORKFLOWS",
  "DRIVING PRODUCT STRATEGY"
];

const DataParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            y: Math.random() * 1000, 
            x: Math.random() * 100 + "%" 
          }}
          animate={{ 
            opacity: [0, 0.05, 0],
            y: [null, -200],
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 10
          }}
          className="absolute w-0.5 h-0.5 bg-foreground/20 rounded-sm"
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentFullText = typewriterTexts[textIndex];
      
      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
        setSpeed(50);
      } else {
        setDisplayText(prev => currentFullText.substring(0, prev.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, speed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <DataParticles />
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary text-xs font-medium tracking-wider uppercase mb-6">
              Available for new opportunities
            </span>
          </motion.div>

          <div className="h-[120px] md:h-[200px] flex items-center justify-center mb-8">
            <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] min-h-[1em]">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-[0.8em] bg-primary ml-1 align-middle"
              />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a Senior Product Manager with 5+ years of experience building and scaling data-intensive, 
            revenue-critical advertising platforms and AI-assisted workflow orchestration systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="rounded-full px-8 h-14 text-base group" render={<a href="#projects" />} nativeButton={false}>
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base" render={<a href="https://drive.google.com/file/d/1d9S_YT8ZH6Ax049G2DAC-50yy6xXCzOG/view?usp=sharing" target="_blank" rel="noreferrer" />} nativeButton={false}>
                <Eye className="mr-2" size={18} />
                View CV
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

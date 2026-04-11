import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Explorations", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Set default theme to dark
    document.documentElement.classList.add("dark");
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter">
          ABHINAB<span className="text-muted-foreground">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4 border-l border-border pl-8">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <a href="https://github.com/Abhinabmishra" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abhinabmishra/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-2xl font-display font-medium hover:text-muted-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex items-center gap-6 mt-4">
                  <a href="https://github.com/Abhinabmishra" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/abhinabmishra/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}

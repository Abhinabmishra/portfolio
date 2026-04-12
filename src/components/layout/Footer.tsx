import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visit")
      .then((res) => res.json())
      .then((data) => setVisitorCount(data.count))
      .catch((err) => console.error("Error fetching visitor count:", err));
  }, []);

  return (
    <footer className="bg-card/20 backdrop-blur-lg border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="text-xl font-display font-bold tracking-tighter">
              ABHINAB MISHRA<span className="text-muted-foreground">.</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Senior Product Manager | Bengaluru, Karnataka
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-6">
              <a href="https://github.com/Abhinabmishra" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/abhinabmishra/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:abhinab1999@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={20} />
              </a>
            </div>
            {visitorCount !== null && (
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                Unique Visitors: {visitorCount}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, RotateCcw, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Commute AI: Bengaluru",
    description: "An AI-powered commute planner that decides the best ride option (Uber, Ola, Rapido, Namma Yatri) based on cost, time, and reliability heuristics.",
    image: "https://picsum.photos/seed/commute/800/600",
    tags: ["Product Strategy", "AI", "Google Maps API", "Vibe Coded"],
    github: "https://github.com/Abhinabmishra/commute-ai",
    demo: "https://www.linkedin.com/posts/abhinabmishra_buildinpublic-productmanagement-ai-activity-7442065162498461696-SQEV",
    process: [
      "Identified user friction in comparing multiple ride-hailing apps during peak hours.",
      "Developed a heuristic-based engine to evaluate cost vs. time vs. reliability.",
      "Integrated Google Maps API for real-time traffic and routing data.",
      "Built a minimal, 'vibe-coded' interface for rapid decision-making."
    ]
  },
  {
    title: "Plan Meet-up: Google Maps",
    description: "A product exploration for multi-origin routing focused on 'Time Equity', helping users find equidistant meeting points based on real-time traffic.",
    image: "https://picsum.photos/seed/maps/800/600",
    tags: ["UX Exploration", "Case Study", "Monetization", "Strategy"],
    github: "https://github.com/Abhinabmishra",
    demo: "https://www.linkedin.com/posts/abhinabmishra_plan-meet-up-a-product-exploration-for-activity-7406539300831408128-LfPp",
    process: [
      "Analyzed the 'Time Equity' problem where one person usually travels significantly more.",
      "Designed a multi-origin routing algorithm to find equidistant meeting points.",
      "Explored monetization strategies through local business partnerships.",
      "Created a high-fidelity UX case study for feature integration into Google Maps."
    ]
  },
  {
    title: "AI Workflow Orchestration Engine",
    description: "Built a system that re-architected serial execution flows into parallel SLA-driven pipelines, reducing manual reconciliation time by 98%.",
    image: "https://picsum.photos/seed/workflow/800/600",
    tags: ["AI", "System Design", "SLA Optimization", "B2B"],
    github: null,
    demo: null,
    process: [
      "Audited existing serial execution flows to identify bottlenecks and manual steps.",
      "Rearchitected the system into a parallel, SLA-driven orchestration pipeline.",
      "Implemented automated reconciliation logic to handle distributed data states.",
      "Achieved a 98% reduction in manual intervention through intelligent error handling."
    ]
  },
];

export default function Projects() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
                PRODUCT <span className="text-muted-foreground italic">EXPLORATIONS</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Side projects and deep dives into solving real-world friction points. <span className="text-primary font-medium">Click a card to see the process.</span>
              </p>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="perspective-1000 h-[500px] cursor-pointer relative group" 
              onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
            >
              <motion.div
                className="relative w-full h-full transition-all duration-500 preserve-3d"
                initial={false}
                animate={{ 
                  rotateY: flippedIndex === index ? 180 : 0,
                }}
                whileHover={flippedIndex === index ? {} : { 
                  rotateX: -5,
                  rotateY: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  rotateY: { type: "spring", stiffness: 260, damping: 20 },
                }}
              >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden">
                  <Card className="h-full overflow-hidden bg-card/60 backdrop-blur-md border border-border group-hover:border-primary/40 transition-colors duration-300 rounded-3xl flex flex-col relative">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      {/* Interaction Hint: Visible on hover for desktop, always visible (subtly) on mobile */}
                      <div className="absolute inset-0 bg-black/40 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 transform translate-y-4 md:translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <RotateCcw size={12} className="animate-spin-slow" />
                            Tap to see process
                          </p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-8 flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider bg-secondary/80 border-border font-bold">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)]">
                  <Card className="h-full overflow-hidden bg-white dark:bg-zinc-950 border-2 border-primary/30 rounded-3xl flex flex-col p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-display font-bold text-primary uppercase tracking-tighter">The Process</h3>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <RotateCcw size={16} className="text-primary" />
                      </div>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      {project.process.map((step, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: flippedIndex === index ? 1 : 0, x: flippedIndex === index ? 0 : -10 }}
                          transition={{ delay: i * 0.1 + 0.3 }}
                          className="flex gap-3"
                        >
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/20">
                            <span className="text-primary font-mono text-[10px] font-bold">0{i + 1}</span>
                          </div>
                          <p className="text-sm text-foreground/90 leading-relaxed font-medium">{step}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="pt-6 mt-auto border-t border-border/50 flex items-center justify-between">
                      <div className="flex gap-3">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/80 border border-border hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
                            onClick={(e) => e.stopPropagation()}
                            title="View Code"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {project.demo && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/80 border border-border hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
                            onClick={(e) => e.stopPropagation()}
                            title="View Case Study"
                          >
                            {project.demo.includes("linkedin.com") ? <Linkedin size={18} /> : <ExternalLink size={18} />}
                          </a>
                        )}
                      </div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-black">Click to flip back</p>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


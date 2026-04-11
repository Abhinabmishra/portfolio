import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Commute AI: Bengaluru",
    description: "An AI-powered commute planner that decides the best ride option (Uber, Ola, Rapido, Namma Yatri) based on cost, time, and reliability heuristics.",
    image: "https://picsum.photos/seed/commute/800/600",
    tags: ["Product Strategy", "AI", "Google Maps API", "Vibe Coded"],
    github: "https://github.com/Abhinabmishra/commute-ai",
    demo: "https://www.linkedin.com/posts/abhinabmishra_buildinpublic-productmanagement-ai-activity-7442065162498461696-SQEV",
  },
  {
    title: "Plan Meet-up: Google Maps",
    description: "A product exploration for multi-origin routing focused on 'Time Equity', helping users find equidistant meeting points based on real-time traffic.",
    image: "https://picsum.photos/seed/maps/800/600",
    tags: ["UX Exploration", "Case Study", "Monetization", "Strategy"],
    github: "https://github.com/Abhinabmishra",
    demo: "https://www.linkedin.com/posts/abhinabmishra_plan-meet-up-a-product-exploration-for-activity-7406539300831408128-LfPp",
  },
  {
    title: "AI Workflow Orchestration Engine",
    description: "Built a system that re-architected serial execution flows into parallel SLA-driven pipelines, reducing manual reconciliation time by 98%.",
    image: "https://picsum.photos/seed/workflow/800/600",
    tags: ["AI", "System Design", "SLA Optimization", "B2B"],
    github: null,
    demo: null,
  },
];

export default function Projects() {
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
                Side projects and deep dives into solving real-world friction points.
              </p>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden bg-background border-border group hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex md:hidden gap-3">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                          <Github size={18} />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Product Strategy",
    skills: ["Product Discovery", "Roadmapping", "Monetization", "User Research", "Stakeholder Management", "Agile/Scrum", "PRDs"],
  },
  {
    title: "Data & Tech",
    skills: ["SQL", "Funnel Analysis", "API Integrations", "System Design", "AWS", "Datadog", "QuickSight", "Python"],
  },
  {
    title: "AI & Automation",
    skills: ["AI Workflows", "Optimization Logic", "Applied ML", "Workflow Orchestration", "Human-in-the-loop Systems"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
            TECHNICAL <span className="text-muted-foreground italic">STACK</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I use a modern set of tools and technologies to build high-performance 
            and scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8 border-b border-border pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-20px" }}
                    transition={{ 
                      duration: 0.3, 
                      delay: skillIndex * 0.05,
                      type: "spring",
                      stiffness: 260,
                      damping: 20 
                    }}
                    className="px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm font-medium hover:border-primary/50 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

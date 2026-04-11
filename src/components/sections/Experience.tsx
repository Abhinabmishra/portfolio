import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "SureWaves MediaTech Pvt Ltd",
    location: "Bengaluru, India",
    period: "Jan 2021 - Present",
    roles: [
      { title: "Senior Product Manager", period: "Apr 2024 - Present" },
      { title: "Product Manager", period: "Aug 2021 - Mar 2024" },
      { title: "Product Manager Intern", period: "Jan 2021 - Jul 2021" },
    ],
    description: [
      "Leading the evolution of data-intensive, revenue-critical advertising platforms.",
      "Successfully managed a $60M revenue-impacting platform while maintaining 99.9% uptime.",
      "Built AI-assisted workflow orchestration engines that reduced manual reconciliation time by 98%.",
      "Re-architected serial execution flows into parallel SLA-driven pipelines.",
      "Scaled platform usage across 7 broadcast networks.",
      "Bridging the gap between complex B2B requirements and high-performance engineering delivery."
    ],
  },
  {
    company: "KingSoft Software India Pvt Ltd (WPS Office)",
    location: "Bengaluru, India",
    period: "Oct 2019 - Jun 2020",
    roles: [
      { title: "Assistant Product Manager", period: "Oct 2019 - Jun 2020" },
    ],
    description: [
      "Focused on consumer onboarding, discovery, and engagement for WPS Office productivity products in India.",
      "Drove an 18% increase in activation and retention by redesigning onboarding flows using behavioral segmentation.",
      "Achieved a 12% lift in daily active usage by optimizing feature exposure and messaging based on user behavior insights."
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
            WORK <span className="text-muted-foreground italic">JOURNEY</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A timeline of my professional growth and the impact I've delivered at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Timeline Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group ${
                    activeIndex === index
                      ? "bg-background border-primary shadow-xl"
                      : "bg-transparent border-border hover:border-muted-foreground/30"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`font-bold transition-colors ${activeIndex === index ? "text-foreground" : "text-muted-foreground"}`}>
                      {exp.company}
                    </h3>
                    <ChevronRight className={`transition-transform duration-300 ${activeIndex === index ? "rotate-90 text-primary" : "text-muted-foreground"}`} size={18} />
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{exp.period}</p>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-background border-border shadow-2xl overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin size={14} />
                        {experiences[activeIndex].location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        {experiences[activeIndex].period}
                      </div>
                    </div>

                    <div className="space-y-6 mb-10">
                      {experiences[activeIndex].roles.map((role, i) => (
                        <div key={i} className="relative pl-6 border-l-2 border-primary/20">
                          <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                          <h4 className="text-xl font-bold text-foreground">{role.title}</h4>
                          <p className="text-sm text-muted-foreground">{role.period}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      {experiences[activeIndex].description.map((point, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.2 }}
                          className="flex gap-3"
                        >
                          <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {point}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

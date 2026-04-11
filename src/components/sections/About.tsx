import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden grayscale md:hover:grayscale-0 transition-all duration-700 shadow-2xl relative group">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 md:hidden"
              />
              <img
                src="https://picsum.photos/seed/productmanager/800/1000"
                alt="Abhinab Mishra"
                className="object-cover w-full h-full transition-all duration-700 md:grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.5 }}
              className="absolute -bottom-8 -right-8 w-48 h-48 bg-card/40 backdrop-blur-3xl border border-border rounded-2xl -z-10" 
            />
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.7 }}
              className="absolute -top-8 -left-8 w-48 h-48 border border-border rounded-2xl -z-10" 
            />
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8"
            >
              ABOUT <span className="text-muted-foreground italic">ME</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                I specialize in bridging B2B and B2C platform capabilities within regulated, 
                reliability-critical environments. Currently, I'm a Senior Product Manager at 
                SureWaves MediaTech, where I lead AI-assisted optimization systems.
              </p>
              <p>
                My approach combines deep technical collaboration with outcome-driven roadmapping, 
                focusing on reducing operational complexity and driving measurable business impact.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-8">
                {[
                  { val: "30%", label: "Platform Adoption Lift" },
                  { val: "2.5k+", label: "Hours Reclaimed Annually" },
                  { val: "$60M", label: "Revenue Impacted" },
                  { val: "99.9%", label: "System Uptime Maintained" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="p-4 rounded-2xl bg-card/40 border border-border backdrop-blur-sm"
                  >
                    <h4 className="text-foreground font-bold text-2xl mb-1">{stat.val}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

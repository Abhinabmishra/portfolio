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
            <div className="aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <img
                src="https://picsum.photos/seed/productmanager/800/1000"
                alt="Abhinab Mishra"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary rounded-2xl -z-10" 
            />
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.7 }}
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
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-foreground font-bold text-3xl mb-1">30%</h4>
                  <p className="text-xs uppercase tracking-widest">Platform Adoption Lift</p>
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-3xl mb-1">2.5k+</h4>
                  <p className="text-xs uppercase tracking-widest">Hours Reclaimed Annually</p>
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-3xl mb-1">$60M</h4>
                  <p className="text-xs uppercase tracking-widest">Revenue Impacted</p>
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-3xl mb-1">99.9%</h4>
                  <p className="text-xs uppercase tracking-widest">System Uptime Maintained</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

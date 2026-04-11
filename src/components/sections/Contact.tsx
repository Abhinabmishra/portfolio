import { useState, ChangeEvent } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: ""
  });

  const isFormValid = Object.values(formData).every(value => typeof value === 'string' && value.trim() !== "");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8">
              LET'S <span className="text-muted-foreground italic">CONNECT</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              I'm always open to new opportunities and collaborations. 
              Feel free to reach out if you have a role that fits my profile.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                  <p className="font-medium">abhinab1999@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                  <p className="font-medium">Bengaluru, Karnataka</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="bg-background p-8 rounded-2xl border border-border shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="bg-secondary/30 border-border" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                  <Input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    type="email" 
                    className="bg-secondary/30 border-border" 
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Contact Number</label>
                  <Input 
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="+91 00000 00000" 
                    className="bg-secondary/30 border-border" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Subject</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Role Inquiry" 
                    className="bg-secondary/30 border-border" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity..." 
                  className="min-h-[150px] bg-secondary/30 border-border" 
                />
              </div>
              <Button 
                disabled={!isFormValid}
                className="w-full h-14 rounded-xl text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

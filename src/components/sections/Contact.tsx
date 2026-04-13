import { useState, ChangeEvent, FormEvent } from "react";
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

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const isFormValid = 
    formData.name.trim() !== "" && 
    formData.email.trim() !== "" && 
    formData.subject.trim() !== "" && 
    formData.message.trim() !== "";

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    setStatus("sending");

    try {
      const formId = import.meta.env.VITE_FORMSPREE_ID || "meepypay";
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", contact: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const data = await response.json();
        console.error("Formspree error:", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
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
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="bg-card/60 backdrop-blur-md p-8 rounded-3xl border border-border shadow-2xl transition-colors duration-200"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border focus:border-primary/20 transition-all" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                  <Input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    className="bg-secondary/50 border-border focus:border-primary/20 transition-all" 
                    required
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
                    className="bg-secondary/50 border-border focus:border-primary/20 transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Subject</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border focus:border-primary/20 transition-all" 
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[150px] bg-secondary/50 border-border focus:border-primary/20 transition-all" 
                  required
                />
              </div>
              <Button 
                type="submit"
                disabled={!isFormValid || status === "sending"}
                className="w-full h-14 rounded-xl text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Error! Check Formspree ID" : "Send Message"}
              </Button>
              {status === "success" && (
                <p className="text-green-500 text-center text-sm mt-2">Thanks! I'll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-destructive text-center text-sm mt-2">Something went wrong. Please check your Formspree ID or try again later.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

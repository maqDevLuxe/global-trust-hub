import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-background to-midnight-light" />
        <div className="relative z-10 container mx-auto text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-semibold">Contact Us</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-6xl font-black mb-6">
            Let's <span className="gradient-text">Connect</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-muted-foreground max-w-xl mx-auto font-body">
            Our enterprise team is ready to discuss your cross-border banking needs.
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-6 mb-10">
              {[
                { icon: Mail, label: "enterprise@crossbank.com" },
                { icon: Phone, label: "+44 20 7946 0958" },
                { icon: MapPin, label: "25 Old Broad Street, London EC2N 1HN" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-sm text-platinum-dark font-body">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-2">Enterprise Support</h3>
              <p className="text-sm text-muted-foreground font-body">Available 24/7 for existing corporate clients. Dedicated relationship managers for accounts over $10M.</p>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 glow"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="h-7 w-7 text-success" />
                </div>
                <h3 className="text-xl font-bold mb-2">Request Received</h3>
                <p className="text-sm text-muted-foreground font-body">Our enterprise team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold mb-2">Request Corporate Account</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block font-medium">First Name</label>
                    <input required className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent" />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block font-medium">Last Name</label>
                    <input required className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block font-medium">Corporate Email</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block font-medium">Company Name</label>
                  <input required className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block font-medium">Annual Revenue</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent">
                    <option>$1M - $10M</option>
                    <option>$10M - $100M</option>
                    <option>$100M - $1B</option>
                    <option>$1B+</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block font-medium">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent resize-none" />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all glow magnetic-hover"
                >
                  Submit Request
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Contact;

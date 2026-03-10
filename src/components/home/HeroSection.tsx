import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-midnight via-background to-midnight-light" />
    
    {/* Animated grid lines */}
    <div className="absolute inset-0 opacity-10">
      <div className="h-full w-full" style={{
        backgroundImage: `linear-gradient(hsl(var(--accent) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent) / 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
    </div>

    {/* Globe */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute right-[-10%] top-[15%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-20"
    >
      <div className="w-full h-full globe-grid" />
    </motion.div>

    {/* Glowing orbs */}
    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" />
    <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan/5 rounded-full blur-[150px] animate-pulse-slow" />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-8"
      >
        <Globe className="h-4 w-4 text-accent" />
        <span className="text-xs font-medium text-accent uppercase tracking-widest">Global Corporate Banking</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-balance"
      >
        Cross-Border Banking
        <br />
        <span className="gradient-text">Without Borders</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-body"
      >
        Enterprise-grade treasury, forex, and trade finance solutions powering multinational corporations across 190+ countries.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all glow magnetic-hover"
        >
          Request Corporate Account
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/corporate"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-secondary transition-all magnetic-hover"
        >
          Explore Solutions
        </Link>
      </motion.div>

      {/* Trust bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground/50 text-xs uppercase tracking-widest font-medium"
      >
        {["ISO 27001", "SOC 2 Type II", "PCI DSS", "SWIFT Connected", "FCA Regulated"].map((badge) => (
          <span key={badge} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-success" />
            {badge}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

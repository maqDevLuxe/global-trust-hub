import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <SectionWrapper>
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass-card p-12 md:p-20 text-center glow-strong relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cyan/5" />
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Transform Your Global Banking?</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8 font-body leading-relaxed">
          Join 850+ enterprises already leveraging CrossBank for cross-border corporate banking excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            Schedule Demo
          </Link>
        </div>
      </div>
    </motion.div>
  </SectionWrapper>
);

export default CTASection;

import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";
import { Shield, Fingerprint, Eye, Lock, Server, Key } from "lucide-react";

const features = [
  { icon: Shield, title: "End-to-End Encryption", desc: "AES-256 encryption at rest and TLS 1.3 in transit." },
  { icon: Fingerprint, title: "Biometric Auth", desc: "Multi-factor authentication with biometric verification." },
  { icon: Eye, title: "24/7 Monitoring", desc: "Real-time threat detection and anomaly monitoring." },
  { icon: Lock, title: "Zero Trust Architecture", desc: "Every request verified, never trusted by default." },
  { icon: Server, title: "Geo-Redundancy", desc: "Multi-region data centers with automatic failover." },
  { icon: Key, title: "HSM Key Management", desc: "Hardware security modules for cryptographic operations." },
];

const SecuritySection = () => (
  <SectionWrapper>
    <div className="text-center mb-16">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3 font-semibold">Security</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Enterprise-Grade Security</h2>
      <p className="text-muted-foreground max-w-xl mx-auto font-body">
        Bank-grade security infrastructure protecting trillions in assets.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="glass-card p-8 magnetic-hover group"
        >
          <f.icon className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SecuritySection;

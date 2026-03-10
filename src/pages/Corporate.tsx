import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Building2, Globe, Users, BarChart3, Briefcase, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Building2, title: "Corporate Accounts", desc: "Multi-entity, multi-currency corporate accounts with centralized control and local access." },
  { icon: Globe, title: "Cross-Border Payments", desc: "Same-day settlement in 190+ countries with full regulatory compliance built in." },
  { icon: Users, title: "Subsidiary Management", desc: "Centralized oversight of all subsidiary banking relationships and cash positions." },
  { icon: BarChart3, title: "Cash Pooling", desc: "Physical and notional cash pooling structures to optimize group-wide liquidity." },
  { icon: Briefcase, title: "Trade Finance", desc: "Letters of credit, guarantees, and supply chain financing for international trade." },
  { icon: ShieldCheck, title: "Compliance Suite", desc: "Automated KYC/AML, sanctions screening, and regulatory reporting across jurisdictions." },
];

const Corporate = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    
    {/* Hero */}
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-background to-midnight-light" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
      <div className="relative z-10 container mx-auto text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-semibold">Corporate Solutions</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-6xl font-black mb-6">
          Enterprise Banking <span className="gradient-text">Reimagined</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
          End-to-end corporate banking infrastructure designed for multinational organizations operating at scale.
        </motion.p>
      </div>
    </section>

    {/* Services Grid */}
    <SectionWrapper>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-8 magnetic-hover group"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
              <s.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>

    {/* CTA */}
    <SectionWrapper>
      <div className="glass-card p-12 md:p-16 text-center glow-strong">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale Your Corporate Banking?</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8 font-body">Speak to our enterprise team about a tailored solution for your organization.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all glow magnetic-hover">
          Get Started <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </SectionWrapper>

    <Footer />
  </div>
);

export default Corporate;

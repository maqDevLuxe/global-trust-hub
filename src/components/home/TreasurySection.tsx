import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";
import { Wallet, BarChart3, TrendingUp, Lock } from "lucide-react";

const features = [
  { icon: Wallet, title: "Multi-Currency Accounts", desc: "Hold and manage 40+ currencies in a single consolidated treasury platform." },
  { icon: BarChart3, title: "Cash Flow Forecasting", desc: "AI-powered predictive analytics for optimized liquidity management." },
  { icon: TrendingUp, title: "Yield Optimization", desc: "Automated sweep accounts and overnight investment strategies." },
  { icon: Lock, title: "Risk Hedging", desc: "Integrated FX hedging tools to protect against currency volatility." },
];

const TreasurySection = () => (
  <SectionWrapper>
    <div className="text-center mb-16">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3 font-semibold">Treasury Management</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Centralized Global Treasury</h2>
      <p className="text-muted-foreground max-w-xl mx-auto font-body">
        Unified visibility and control over your global cash positions, liquidity, and risk exposure.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass-card p-8 group magnetic-hover"
        >
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
            <f.icon className="h-6 w-6 text-accent" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed font-body">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default TreasurySection;

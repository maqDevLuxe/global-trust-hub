import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";
import { ArrowLeftRight, Clock, Zap } from "lucide-react";

const pairs = [
  { pair: "EUR/USD", rate: "1.0847", change: "+0.12%" },
  { pair: "GBP/USD", rate: "1.2634", change: "+0.08%" },
  { pair: "USD/JPY", rate: "149.82", change: "-0.15%" },
  { pair: "USD/CHF", rate: "0.8791", change: "+0.04%" },
  { pair: "AUD/USD", rate: "0.6523", change: "+0.21%" },
  { pair: "USD/CAD", rate: "1.3612", change: "-0.09%" },
];

const ForexSection = () => (
  <SectionWrapper className="bg-midnight-light/30">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3 font-semibold">Forex & Trade Finance</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Institutional-Grade FX Execution</h2>
        <p className="text-muted-foreground mb-8 font-body leading-relaxed">
          Access deep liquidity pools with ultra-tight spreads across 150+ currency pairs. Execute large-volume trades with minimal market impact.
        </p>
        <div className="flex gap-8">
          {[
            { icon: Zap, label: "Sub-ms Execution" },
            { icon: Clock, label: "24/5 Trading" },
            { icon: ArrowLeftRight, label: "150+ Pairs" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <item.icon className="h-4 w-4 text-accent" />
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-6 glow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Live Rates</h3>
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
        </div>
        <div className="space-y-3">
          {pairs.map((p, i) => (
            <motion.div
              key={p.pair}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-between py-3 px-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <span className="font-semibold text-sm">{p.pair}</span>
              <span className="text-sm font-mono text-platinum">{p.rate}</span>
              <span className={`text-xs font-medium ${p.change.startsWith("+") ? "text-success" : "text-destructive"}`}>
                {p.change}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default ForexSection;

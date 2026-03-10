import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Clock, Shield, Zap, ArrowLeftRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Zap, title: "Ultra-Low Latency", desc: "Sub-millisecond execution speeds with direct market access to tier-1 liquidity." },
  { icon: BarChart3, title: "Deep Liquidity", desc: "Aggregated liquidity from 50+ institutional counterparties for optimal pricing." },
  { icon: ArrowLeftRight, title: "150+ Currency Pairs", desc: "Access majors, minors, exotics, and NDF markets in a single platform." },
  { icon: Clock, title: "24/5 Markets", desc: "Continuous trading across all major forex sessions with no downtime." },
  { icon: Shield, title: "Risk Management", desc: "Integrated stop-loss, take-profit, and automated hedging strategies." },
  { icon: TrendingUp, title: "Analytics Suite", desc: "Real-time market data, technical analysis, and trade performance reporting." },
];

const pairs = [
  { pair: "EUR/USD", bid: "1.0845", ask: "1.0847", spread: "0.2" },
  { pair: "GBP/USD", bid: "1.2632", ask: "1.2636", spread: "0.4" },
  { pair: "USD/JPY", bid: "149.80", ask: "149.84", spread: "0.4" },
  { pair: "AUD/USD", bid: "0.6521", ask: "0.6524", spread: "0.3" },
  { pair: "USD/CHF", bid: "0.8789", ask: "0.8793", spread: "0.4" },
  { pair: "EUR/GBP", bid: "0.8586", ask: "0.8589", spread: "0.3" },
  { pair: "NZD/USD", bid: "0.6012", ask: "0.6015", spread: "0.3" },
  { pair: "USD/CAD", bid: "1.3610", ask: "1.3614", spread: "0.4" },
];

const Forex = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-background to-midnight-light" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[200px]" />
      <div className="relative z-10 container mx-auto text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-semibold">Forex Trading</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-6xl font-black mb-6">
          Institutional <span className="gradient-text">FX Execution</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
          Access the world's deepest liquidity pools with institutional-grade execution and analytics.
        </motion.p>
      </div>
    </section>

    {/* Live rates */}
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Live Market Rates</h2>
        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Live</span>
        </div>
      </div>
      <div className="glass-card overflow-hidden glow">
        <div className="grid grid-cols-4 gap-4 p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-b border-border/30">
          <span>Pair</span><span className="text-right">Bid</span><span className="text-right">Ask</span><span className="text-right">Spread</span>
        </div>
        {pairs.map((p, i) => (
          <motion.div
            key={p.pair}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="grid grid-cols-4 gap-4 p-4 hover:bg-secondary/30 transition-colors border-b border-border/10 last:border-0"
          >
            <span className="font-semibold">{p.pair}</span>
            <span className="text-right font-mono text-sm text-platinum">{p.bid}</span>
            <span className="text-right font-mono text-sm text-platinum">{p.ask}</span>
            <span className="text-right font-mono text-sm text-accent">{p.spread}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>

    {/* Features */}
    <SectionWrapper className="bg-midnight-light/20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Trading Infrastructure</h2>
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
            <h3 className="text-lg font-bold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>

    {/* CTA */}
    <SectionWrapper>
      <div className="glass-card p-12 md:p-16 text-center glow-strong">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Trading with Institutional Spreads</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8 font-body">Open a forex trading account with access to 150+ currency pairs.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all glow magnetic-hover">
          Open Trading Account <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </SectionWrapper>

    <Footer />
  </div>
);

export default Forex;

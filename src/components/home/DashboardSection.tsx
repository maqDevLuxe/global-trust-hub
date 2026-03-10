import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, DollarSign, Activity } from "lucide-react";

const DashboardSection = () => (
  <SectionWrapper>
    <div className="text-center mb-16">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3 font-semibold">Dashboard</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Corporate Command Center</h2>
      <p className="text-muted-foreground max-w-xl mx-auto font-body">
        Real-time visibility into every transaction, balance, and risk metric across all entities.
      </p>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 md:p-8 glow-strong"
    >
      {/* Top stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { icon: DollarSign, label: "Total Assets", value: "$4.2B", change: "+12.4%", up: true },
          { icon: Activity, label: "Active Positions", value: "1,847", change: "+5.2%", up: true },
          { icon: TrendingUp, label: "Revenue (MTD)", value: "$182M", change: "+8.7%", up: true },
          { icon: TrendingDown, label: "FX Exposure", value: "$340M", change: "-2.1%", up: false },
        ].map((stat) => (
          <div key={stat.label} className="p-4 rounded-lg bg-secondary/40">
            <div className="flex items-center gap-2 mb-2">
              <stat.icon className="h-4 w-4 text-accent" />
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
            <p className="text-xl font-bold">{stat.value}</p>
            <span className={`text-xs font-medium ${stat.up ? "text-success" : "text-destructive"}`}>
              {stat.change}
            </span>
          </div>
        ))}
      </div>

      {/* Chart placeholder */}
      <div className="h-48 rounded-lg bg-secondary/20 border border-border/30 flex items-end justify-around px-6 pb-4 gap-2">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${20 + Math.sin(i * 0.5) * 30 + Math.random() * 40}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.5 }}
            className="flex-1 rounded-t bg-gradient-to-t from-accent/40 to-accent/80 min-w-[4px]"
          />
        ))}
      </div>
    </motion.div>
  </SectionWrapper>
);

export default DashboardSection;

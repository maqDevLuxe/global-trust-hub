import SectionWrapper from "../SectionWrapper";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const metrics = [
  { value: 99.99, suffix: "%", label: "Uptime SLA" },
  { value: 0.3, suffix: "ms", label: "Avg. Latency" },
  { value: 2.4, suffix: "M+", label: "Daily Transactions" },
  { value: 190, suffix: "+", label: "Countries Served" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  const display = value >= 1 ? (value % 1 === 0 ? Math.round(count) : count.toFixed(value.toString().split(".")[1]?.length || 1)) : count.toFixed(1);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black gradient-text">
      {display}{suffix}
    </span>
  );
};

const MetricsSection = () => (
  <SectionWrapper>
    <div className="text-center mb-16">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3 font-semibold">Performance</p>
      <h2 className="text-3xl md:text-5xl font-bold">Transaction Speed Metrics</h2>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass-card p-8 text-center magnetic-hover"
        >
          <Counter value={m.value} suffix={m.suffix} />
          <p className="text-sm text-muted-foreground mt-3 font-body">{m.label}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default MetricsSection;

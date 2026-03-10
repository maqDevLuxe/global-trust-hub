import SectionWrapper from "../SectionWrapper";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const volumes = [
  { value: 3.8, prefix: "$", suffix: "T", label: "Annual Volume Processed" },
  { value: 12, prefix: "", suffix: "M+", label: "Transactions Settled" },
  { value: 850, prefix: "", suffix: "+", label: "Enterprise Clients" },
  { value: 40, prefix: "", suffix: "+", label: "Currencies Supported" },
];

const AnimNum = ({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 60;
    const step = value / total;
    const id = setInterval(() => {
      frame++;
      setN(Math.min(step * frame, value));
      if (frame >= total) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [inView, value]);

  const display = value < 10 ? n.toFixed(1) : Math.round(n);

  return (
    <span ref={ref} className="text-4xl md:text-6xl font-black gradient-text">
      {prefix}{display}{suffix}
    </span>
  );
};

const VolumeSection = () => (
  <SectionWrapper>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {volumes.map((v, i) => (
        <motion.div
          key={v.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center"
        >
          <AnimNum value={v.value} prefix={v.prefix} suffix={v.suffix} />
          <p className="text-sm text-muted-foreground mt-3 font-body">{v.label}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default VolumeSection;

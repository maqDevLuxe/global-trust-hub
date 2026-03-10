import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const hubs = [
  { city: "London", role: "European HQ" },
  { city: "New York", role: "Americas HQ" },
  { city: "Singapore", role: "APAC HQ" },
  { city: "Dubai", role: "MENA HQ" },
  { city: "Frankfurt", role: "EU Operations" },
  { city: "Tokyo", role: "Japan Desk" },
];

const GlobalHubSection = () => (
  <SectionWrapper className="relative overflow-hidden bg-midnight-light/20">
    <div className="text-center mb-16">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3 font-semibold">Global Presence</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Strategic Financial Hubs</h2>
      <p className="text-muted-foreground max-w-xl mx-auto font-body">
        Operating from the world's most important financial centers to ensure 24/7 coverage.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {hubs.map((hub, i) => (
        <motion.div
          key={hub.city}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="glass-card p-6 text-center magnetic-hover group"
        >
          <MapPin className="h-6 w-6 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-bold">{hub.city}</h3>
          <p className="text-xs text-muted-foreground mt-1 font-body">{hub.role}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default GlobalHubSection;

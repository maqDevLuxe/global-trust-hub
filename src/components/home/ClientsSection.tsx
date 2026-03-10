import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const clients = [
  "Siemens", "Unilever", "Maersk", "Shell", "HSBC", "Tata Group", "Samsung", "Nestlé"
];

const ClientsSection = () => (
  <SectionWrapper className="border-b border-border/20">
    <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10 font-medium">
      Trusted by multinational corporations worldwide
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {clients.map((client, i) => (
        <motion.div
          key={client}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="glass-card p-6 flex items-center justify-center gap-3 magnetic-hover"
        >
          <Building2 className="h-5 w-5 text-accent/60" />
          <span className="text-sm font-semibold text-platinum-dark">{client}</span>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ClientsSection;

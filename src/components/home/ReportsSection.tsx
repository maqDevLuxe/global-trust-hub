import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";
import { FileText, Download, Calendar } from "lucide-react";

const reports = [
  { title: "Q4 2025 Global FX Outlook", date: "Dec 2025", type: "Research" },
  { title: "Emerging Markets Risk Assessment", date: "Nov 2025", type: "Analysis" },
  { title: "APAC Trade Finance Trends", date: "Oct 2025", type: "Report" },
  { title: "Central Bank Policy Monitor", date: "Oct 2025", type: "Briefing" },
];

const ReportsSection = () => (
  <SectionWrapper className="bg-midnight-light/20">
    <div className="text-center mb-16">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3 font-semibold">Insights</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Global Market Reports</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      {reports.map((r, i) => (
        <motion.div
          key={r.title}
          initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="glass-card p-6 flex items-center justify-between magnetic-hover group"
        >
          <div className="flex items-start gap-4">
            <FileText className="h-8 w-8 text-accent/60 mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">{r.title}</h3>
              <div className="flex gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{r.date}</span>
                <span className="px-2 py-0.5 rounded bg-accent/10 text-accent font-medium">{r.type}</span>
              </div>
            </div>
          </div>
          <Download className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ReportsSection;

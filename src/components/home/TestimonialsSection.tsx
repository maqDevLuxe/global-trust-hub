import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "CrossBank transformed our global treasury operations. We reduced FX costs by 40% in the first quarter.",
    name: "Sarah Chen",
    title: "CFO, Pacific Logistics Group",
  },
  {
    quote: "The API integration was seamless. Our ERP now has real-time visibility across 30 entities in 18 countries.",
    name: "Marcus Weber",
    title: "VP Finance, Eurotech Industries",
  },
  {
    quote: "Their compliance infrastructure saved us months of regulatory work when expanding into APAC markets.",
    name: "Ayesha Patel",
    title: "Group Treasurer, Meridian Holdings",
  },
];

const TestimonialsSection = () => (
  <SectionWrapper className="bg-midnight-light/20">
    <div className="text-center mb-16">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3 font-semibold">Testimonials</p>
      <h2 className="text-3xl md:text-5xl font-bold">Trusted by CFOs Worldwide</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass-card p-8 magnetic-hover relative"
        >
          <Quote className="h-8 w-8 text-accent/20 absolute top-6 right-6" />
          <p className="text-sm text-platinum-dark leading-relaxed mb-6 font-body italic">"{t.quote}"</p>
          <div>
            <p className="font-semibold text-sm">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default TestimonialsSection;

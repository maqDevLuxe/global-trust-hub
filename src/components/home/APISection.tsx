import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";
import { Code2, Plug, Layers, Cpu } from "lucide-react";

const APISection = () => (
  <SectionWrapper className="bg-midnight-light/30">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Code preview */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass-card p-6 glow font-mono text-sm overflow-hidden"
      >
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-gold/60" />
          <div className="w-3 h-3 rounded-full bg-success/60" />
        </div>
        <pre className="text-muted-foreground overflow-x-auto">
          <code>{`const payment = await crossbank.payments.create({
  amount: 1_250_000.00,
  currency: "USD",
  destination: {
    country: "DE",
    iban: "DE89370400440532013000"
  },
  compliance: {
    aml_check: true,
    sanctions_screening: true
  }
});

// Response: { id: "txn_8kf3...", status: "settled" }`}</code>
        </pre>
      </motion.div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3 font-semibold">API Banking</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Developer-First Infrastructure</h2>
        <p className="text-muted-foreground mb-8 font-body leading-relaxed">
          RESTful APIs with comprehensive SDKs. Integrate payments, FX, and compliance directly into your ERP systems.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Code2, label: "RESTful APIs" },
            { icon: Plug, label: "Webhook Events" },
            { icon: Layers, label: "SDK Libraries" },
            { icon: Cpu, label: "Sandbox Testing" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
              <item.icon className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default APISection;

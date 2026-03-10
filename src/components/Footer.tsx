import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="bg-midnight border-t border-border/30 section-padding">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-accent" />
            <span className="text-lg font-bold text-foreground">
              CROSS<span className="text-accent">BANK</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Enterprise-grade cross-border corporate banking for multinational organizations worldwide.
          </p>
        </div>
        {[
          { title: "Solutions", links: ["Treasury", "Forex Trading", "Trade Finance", "API Banking"] },
          { title: "Company", links: ["About", "Careers", "Press", "Compliance"] },
          { title: "Resources", links: ["Documentation", "Market Reports", "Security", "Support"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © 2026 CrossBank Global. All rights reserved. Licensed & regulated.
        </p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <Link to="#" className="hover:text-accent transition-colors">Privacy</Link>
          <Link to="#" className="hover:text-accent transition-colors">Terms</Link>
          <Link to="#" className="hover:text-accent transition-colors">Cookies</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

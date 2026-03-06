import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden">
    <div className="absolute inset-0 hero-gradient opacity-95" />
    <div className="absolute inset-0 hero-pattern opacity-10" />
    <div className="relative container py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Link to="/" className="font-heading text-xl font-bold tracking-tight text-primary-foreground">
            Nexus<span className="text-accent">Tech</span>
          </Link>
          <p className="mt-4 text-sm text-primary-foreground/50 leading-relaxed max-w-xs">
            Empowering businesses with intelligent software solutions that drive growth and operational excellence.
          </p>
          <Link
            to="/contact"
            className="mt-6 group inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all"
          >
            Get Started <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold text-primary-foreground mb-5">Company</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/50">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold text-primary-foreground mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/50">
            <li className="hover:text-accent transition-colors cursor-pointer">Cloud Solutions</li>
            <li className="hover:text-accent transition-colors cursor-pointer">Data Analytics</li>
            <li className="hover:text-accent transition-colors cursor-pointer">Custom Development</li>
            <li className="hover:text-accent transition-colors cursor-pointer">Consulting</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold text-primary-foreground mb-5">Connect</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/50">
            <li className="hover:text-accent transition-colors cursor-pointer">LinkedIn</li>
            <li className="hover:text-accent transition-colors cursor-pointer">Twitter</li>
            <li className="hover:text-accent transition-colors cursor-pointer">GitHub</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between text-xs text-primary-foreground/40">
        <p>© 2026 NexusTech. All rights reserved.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <span className="hover:text-accent transition-colors cursor-pointer">Privacy Policy</span>
          <span className="hover:text-accent transition-colors cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Link to="/" className="font-heading text-xl font-bold tracking-tight">
            Nexus<span className="text-accent">Tech</span>
          </Link>
          <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
            Empowering businesses with intelligent software solutions that drive growth and operational excellence.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li>Cloud Solutions</li>
            <li>Data Analytics</li>
            <li>Custom Development</li>
            <li>Consulting</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold mb-4">Connect</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between text-xs text-primary-foreground/50">
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

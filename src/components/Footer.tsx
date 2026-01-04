import { Building2, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-civic-navy text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-civic-teal/20 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-civic-teal" />
              </div>
              <span className="font-display text-2xl font-bold">MuniPulse</span>
            </div>
            <p className="text-white/70 mb-6 max-w-sm">
              AI-powered municipal performance management for transparent, 
              efficient, and citizen-centric urban governance.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-civic-teal/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Platform</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-civic-teal transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-civic-teal transition-colors">Dashboard Demo</a></li>
              <li><a href="#" className="hover:text-civic-teal transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-civic-teal transition-colors">API Reference</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-civic-teal transition-colors">Research Paper</a></li>
              <li><a href="#" className="hover:text-civic-teal transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-civic-teal transition-colors">Open Source</a></li>
              <li><a href="#" className="hover:text-civic-teal transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2026 MuniPulse. Open-source municipal governance platform.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

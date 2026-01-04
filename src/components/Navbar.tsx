import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Building2, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Benefits", href: "#benefits" },
    { label: "Research", href: "#research" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
              isScrolled ? "bg-civic-teal/10" : "bg-white/10"
            }`}>
              <Building2 className={`w-5 h-5 transition-colors ${
                isScrolled ? "text-civic-teal" : "text-white"
              }`} />
            </div>
            <span className={`font-display text-xl font-bold transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>
              MuniPulse
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-civic-teal ${
                  isScrolled ? "text-muted-foreground" : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant={isScrolled ? "ghost" : "hero-outline"} 
              size="sm"
            >
              Sign In
            </Button>
            <Button 
              variant={isScrolled ? "civic" : "hero"} 
              size="sm"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-foreground font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex gap-3">
                <Button variant="outline" className="flex-1">Sign In</Button>
                <Button variant="civic" className="flex-1">Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

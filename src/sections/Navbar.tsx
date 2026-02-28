import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Speaking & Media", href: "#speaking" },
  { label: "VDV Labs", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-rv-bg/90 backdrop-blur-xl border-b border-rv-border"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            <a href="#" className="relative">
              <img
                src="/images/Frame-header.png"
                alt="Brand Alchemy - Robert Vandervoort"
                width={180}
                height={40}
                sizes="180px"
                className="h-auto w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-rv-text-secondary hover:text-rv-accent text-sm font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rv-accent transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-rv-border text-black text-sm font-medium rounded-md hover:border-rv-accent transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book to Speak
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-rv-bg/95 backdrop-blur-xl pt-[72px] md:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white text-lg font-medium hover:text-rv-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-[#932a1c] text-white font-medium rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book to Speak
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

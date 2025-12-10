"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white-100/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-10 py-6 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mono-18 text-black-100"
        >
          {/* Logo placeholder - to be attached */}
          <a href="/">PRIYANSHU</a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <a
            href="#about"
            className="text-16 text-black-70 hover:text-black-100 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-16 text-black-70 hover:text-black-100 transition-colors"
          >
            Projects
          </a>
          <a
            href="#technologies"
            className="text-16 text-black-70 hover:text-black-100 transition-colors"
          >
            Technologies
          </a>
          <a
            href="#contact"
            className="text-16 text-black-70 hover:text-black-100 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-black-100"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-black-100"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-black-100"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white-100 border-t border-black-10"
          >
            <div className="container mx-auto px-10 py-8 flex flex-col gap-6">
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="menu-text text-black-100"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="menu-text text-black-100"
              >
                Projects
              </a>
              <a
                href="#technologies"
                onClick={() => setIsOpen(false)}
                className="menu-text text-black-100"
              >
                Technologies
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="menu-text text-black-100"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

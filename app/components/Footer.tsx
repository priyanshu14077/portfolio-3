"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Technologies", href: "#technologies" },
      { label: "Contact", href: "#contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" }, // to be attached
      { label: "Terms & Conditions", href: "/terms-and-conditions" }, // to be attached
      { label: "Imprint", href: "/imprint" }, // to be attached
    ],
    social: [
      { label: "LinkedIn", href: "#" }, // to be attached
      { label: "GitHub", href: "#" }, // to be attached
      { label: "Twitter", href: "#" }, // to be attached
      { label: "Email", href: "#" }, // to be attached
    ],
  };

  return (
    <footer className="w-full bg-black-100 text-white-100 py-24">
      <div className="container mx-auto max-w-[1200px] px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="heading-6">Priyanshu Kumar Singh</h3>
            <p className="text-16 text-white-100/70 max-w-md">
              Full Stack Developer specializing in Next.js, TypeScript, and
              scalable backend architectures.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="mono-16 text-white-100/80 mb-2">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.navigation.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-16 text-white-100/70 hover:text-white-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="mono-16 text-white-100/80 mb-2">Legal</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-16 text-white-100/70 hover:text-white-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h4 className="mono-16 text-white-100/80 mb-2">Connect</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-16 text-white-100/70 hover:text-white-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white-100/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-14 text-white-100/60">
            © {currentYear} Priyanshu Kumar Singh. All rights reserved.
          </p>
          <p className="text-14 text-white-100/60">
            Built with Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}

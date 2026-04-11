"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={`fixed z-50 top-0 w-full transition-all duration-500 ${
        scrolled || open
          ? "bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-lg sm:text-xl tracking-wider text-white"
        >
          MEGOKRUTO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/services"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="pill-button-primary text-sm font-medium"
          >
            Get in Touch
          </Link>
        </div>

        {/* Hamburger - bigger touch target */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu - slide down animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 sm:px-6 pb-6 bg-[#0a0a0b]/95 backdrop-blur-xl border-t border-white/5">
          {[
            { href: "/services", label: "Services" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              className="text-gray-300 hover:text-white transition-colors py-3 text-base border-b border-white/5 last:border-0"
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 text-gray-500 text-sm pt-3">
            <Phone size={14} />
            <a
              href="tel:+31631237307"
              className="hover:text-white transition-colors"
            >
              +31 6 27 58 69 65
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

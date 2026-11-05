"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/agenda", label: "Agenda" },
  { href: "/speakers", label: "Speakers" },
  { href: "/venue", label: "Venue" },
  { href: "/tickets", label: "Tickets" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg">
              <span className="text-navy-900 font-bold text-lg">I</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-semibold text-sm leading-tight tracking-wide">
                IDEAS THAT MOVE
              </div>
              <div className="text-gold-400 text-xs tracking-widest">THE WORLD</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-navy-100 hover:text-gold-400 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/register"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-gold-400 text-navy-900 text-sm font-semibold hover:bg-gold-300 transition-colors shadow-md"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="lg:hidden bg-navy-900 border-t border-navy-800">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-navy-100 hover:text-gold-400 hover:bg-navy-800 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="mt-2 mx-3 py-3 text-center rounded-full bg-gold-400 text-navy-900 font-semibold"
            >
              Register Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

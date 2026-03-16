"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-alabaster/80 backdrop-blur-lg border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Sauceappnewlogo.png"
            alt="Sauce logo"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-xl font-semibold tracking-tight text-primary">
            Sauce
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            How It Works
          </a>
          <Link
            href="/privacy"
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            Terms
          </Link>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-pink-accent text-white text-sm font-medium rounded-full hover:bg-pink-hover transition-all duration-300 hover:shadow-lg hover:shadow-pink-accent/25"
          >
            Download Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-primary"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-0.5 bg-primary"
          />
          <motion.span
            animate={
              mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
            }
            className="block w-5 h-0.5 bg-primary"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-alabaster/95 backdrop-blur-lg border-b border-black/5"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              <a
                href="#how-it-works"
                onClick={() => setMobileOpen(false)}
                className="text-base text-secondary hover:text-primary transition-colors"
              >
                How It Works
              </a>
              <Link
                href="/privacy"
                onClick={() => setMobileOpen(false)}
                className="text-base text-secondary hover:text-primary transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                onClick={() => setMobileOpen(false)}
                className="text-base text-secondary hover:text-primary transition-colors"
              >
                Terms
              </Link>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 bg-pink-accent text-white text-sm font-medium rounded-full hover:bg-pink-hover transition-all duration-300"
              >
                Download Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

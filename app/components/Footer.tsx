'use client'

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 mt-20 border-t border-white/10">
      
      {/* Neon Glow Line */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "100%" }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 h-[2px] bg-[var(--wt-accent)] shadow-[0_0_25px_var(--wt-accent)]"
      />

      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--wt-accent)]/10 blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Branding */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[var(--wt-card)] rounded-xl flex items-center justify-center text-[var(--wt-accent)] font-bold shadow-lg">
              W
            </div>
            <span className="text-[var(--wt-text)] text-lg font-semibold tracking-wide">
              Wisertab
            </span>
          </div>
          <p className="mt-4 text-[var(--wt-muted)] max-w-sm">
            Where Ideas Turn Into Intelligent Digital Solutions.
            We build powerful digital experiences for modern businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[var(--wt-text)] font-semibold text-xl mb-4">Navigation</h4>
          <div className="flex flex-col gap-3 text-[var(--wt-muted)]">
            <Link href="#services" className="hover:text-[var(--wt-accent)] transition">Services</Link>
            <Link href="#about" className="hover:text-[var(--wt-accent)] transition">About</Link>
            <Link href="#process" className="hover:text-[var(--wt-accent)] transition">Process</Link>
            <Link href="#technologies" className="hover:text-[var(--wt-accent)] transition">Technologies</Link>
            <Link href="#contact" className="hover:text-[var(--wt-accent)] transition">Contact</Link>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-[var(--wt-text)] font-semibold text-xl mb-4">Connect</h4>
          <div className="flex flex-col gap-3 text-[var(--wt-muted)]">
            <a href="#" className="hover:text-[var(--wt-accent)] transition">Instagram</a>
            <a href="#" className="hover:text-[var(--wt-accent)] transition">LinkedIn</a>
            <a href="#" className="hover:text-[var(--wt-accent)] transition">Twitter</a>
            <a href="https://wa.me/919756523326" className="hover:text-[var(--wt-accent)] transition">WhatsApp</a>
          </div>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="text-center mt-14 text-[var(--wt-muted)] text-sm opacity-70">
        © {new Date().getFullYear()} Wisertab. All rights reserved.
      </div>

    </footer>
  )
}

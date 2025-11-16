'use client'

import { motion } from "framer-motion"

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919756523326"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 left-8 z-[999] group"
    >
      {/* Outer Glow Pulse */}
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 w-16 h-16 rounded-full bg-green-500/40 blur-xl"
      />

      {/* Button Container */}
      <div
        className="relative flex items-center justify-center w-16 h-16 rounded-2xl
                   bg-[var(--wt-card)] border border-green-500/50 shadow-[0_0_25px_rgba(0,255,0,0.4)]
                   backdrop-blur-xl group-hover:scale-110 transition-transform duration-300"
      >
        {/* WhatsApp Icon SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="rgba(0,255,0,0.9)"
          viewBox="0 0 448 512"
          className="w-8 h-8"
        >
          <path d="M380.9 97.1C339-6.7 241.6-33.8 147.1 14 52.7 61.8 6.3 158 34.2 252.3L2.8 377.4c-2.4 9.6 6.3 18.3 15.9 15.9l125.1-31.4c92.1 49.3 208.2 13.7 255.9-80.7 47.8-94.4 20.6-191.8-18.8-224.1zm-20.3 204.6c-33.8 67-116.8 92.9-183.8 55.2l-6.4-3.6-92.8 23.3 24.8-90-3.9-6.7C58.2 218.1 79.5 135.9 146 102.1c66.3-33.9 148.3-8 182.2 58.3 33.9 66.3 8.1 148.2-58.4 182.1z"/>
        </svg>
      </div>
    </motion.a>
  )
}

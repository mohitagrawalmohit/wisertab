'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true)
      else setVisible(false)
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.5,
      }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-8 right-8 z-[999] group"
    >
      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 rounded-full border-2 border-[var(--wt-accent)]/40 blur-[1px]"
      />

      {/* Inner glowing button */}
      <div
        className="absolute inset-0 flex items-center justify-center w-16 h-16
                   rounded-full bg-[var(--wt-card)] border border-[var(--wt-accent)]/40
                   shadow-[0_0_25px_var(--wt-accent)] group-hover:scale-110 transition-transform duration-300"
      >
        {/* Arrow Icon */}
        <motion.div
          animate={{ y: [4, -4, 4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-[var(--wt-accent)] text-2xl font-bold"
        >
          ↑
        </motion.div>
      </div>
    </motion.button>
  )
}

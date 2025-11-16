'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500) // Loader duration

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.6 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[var(--wt-bg)]"
    >
      {/* Neon Pulse Background Glow */}
      <div className="absolute w-96 h-96 bg-[var(--wt-accent)]/20 blur-[120px]"></div>

      {/* Central Loader */}
      <div className="relative flex flex-col items-center gap-6">

        {/* Rotating Neon Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 rounded-full border-4 border-[var(--wt-accent)] border-t-transparent shadow-[0_0_25px_var(--wt-accent)]"
        />

        {/* Wisertab Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[var(--wt-text)] text-xl font-semibold tracking-widest"
        >
          Wisertab
        </motion.p>
      </div>
    </motion.div>
  )
}

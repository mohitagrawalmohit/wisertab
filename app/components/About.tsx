'use client'

import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="relative py-12 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[var(--wt-accent)]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full"></div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/grid.svg')] bg-cover animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--wt-text)] leading-tight">
            Redefining the Future of<br />
            <span className="text-[var(--wt-accent)]">Digital Innovation</span>
          </h2>

          <p className="mt-6 text-lg text-[var(--wt-muted)] max-w-xl leading-relaxed">
            At Wisertab, we combine advanced engineering, futuristic UI/UX,
            intelligent automation, and precision development to create digital
            experiences that feel <span className="text-[var(--wt-accent)]">alive, intuitive, and powerful.</span>
          </p>

          {/* Bullet Highlight */}
          <div className="mt-10 space-y-4">
            {[
              "High-end Web & App Engineering",
              "Cutting-edge UI/UX & Motion Design",
              "CRM, Automation & Cloud Integrations",
              "Enterprise-grade Software Architecture"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-3 h-3 rounded-full bg-[var(--wt-accent)] shadow-[0_0_8px_var(--wt-accent)]"></div>
                <p className="text-[var(--wt-text)]/80">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE - Futuristic Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* 3D Card */}
          <div className="relative bg-[#101829] border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
            
            {/* Floating Orbs */}
            <div className="absolute -top-10 -right-8 w-24 h-24 bg-[var(--wt-accent)]/20 blur-2xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 blur-2xl rounded-full animate-pulse"></div>

            <div className="h-80 rounded-2xl bg-gradient-to-br from-[#1c2940] to-[#0B1221] flex items-center justify-center text-[var(--wt-muted)] text-lg">
              <span className="opacity-70">
                Futuristic Wisertab Studio  
              </span>
            </div>
          </div>

          {/* Floating Accent Line */}
          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -bottom-6 left-10 w-40 h-[2px] bg-[var(--wt-accent)]/60 blur-sm"
          />
        </motion.div>
      </div>
    </section>
  )
}

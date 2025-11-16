'use client'

import { motion } from "framer-motion"

const techCategories = [
  {
    name: "Web & App Technologies",
    items: ["Next.js", "React", "Node.js", "TailwindCSS", "Express", "MongoDB"]
  },
  {
    name: "CRM & Cloud Platforms",
    items: ["Zoho", "Salesforce", "HubSpot", "AWS", "Firebase"]
  },
  {
    name: "Marketing Tools",
    items: ["Google Ads", "Meta Ads", "Analytics", "Search Console"]
  },
  {
    name: "SEO & Research",
    items: ["Ahrefs", "Semrush", "Moz", "Keyword Planner"]
  }
]

export default function Technologies() {
  return (
    <section id="technologies" className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-10 left-0 w-96 h-96 bg-[var(--wt-accent)]/10 blur-[170px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[200px]"></div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/grid.svg')] bg-cover animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-[var(--wt-text)]"
        >
          Technology Stack
        </motion.h2>

        <p className="mt-4 text-center text-[var(--wt-muted)] max-w-2xl mx-auto">
          Tools and platforms we use to build intelligent, scalable, modern digital experiences.
        </p>

        {/* Categories */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
          {techCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="relative bg-[var(--wt-card)] rounded-3xl border border-white/10 p-8 backdrop-blur-xl shadow-lg"
            >
              
              {/* Floating Accent Light */}
              <motion.div
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-4 right-10 w-24 h-1 bg-[var(--wt-accent)]/60 blur-sm"
              />

              <h3 className="text-2xl font-semibold text-[var(--wt-text)]">
                {cat.name}
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className="p-4 bg-[#111a2c] rounded-xl border border-white/5 text-center
                               text-[var(--wt-text)] shadow-[0_0_15px_rgba(0,0,0,0.3)]
                               hover:border-[var(--wt-accent)] hover:shadow-[0_0_20px_var(--wt-accent)/30]
                               transition-all"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

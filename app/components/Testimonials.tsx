'use client'

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder, FinTech Startup",
    review:
      "Wisertab transformed our idea into a fully functional platform with incredible UI and top-tier performance."
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director, E-Commerce",
    review:
      "The level of design, detail, and intelligence Wisertab brings is something I haven’t seen before."
  },
  {
    name: "Rahul Sharma",
    role: "Operations Head, Logistics",
    review:
      "Their automation and CRM solutions saved our team hundreds of hours every month. Truly game-changing!"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--wt-accent)]/10 blur-[200px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[200px] -z-10"></div>

      {/* Light Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/grid.svg')]"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-[var(--wt-text)]"
        >
          What People Say About Us
        </motion.h2>

        <p className="mt-4 text-center text-[var(--wt-muted)] max-w-2xl mx-auto">
          Real experiences. Real transformation.
        </p>

        {/* Futuristic Testimonial Carousel */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex gap-10 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-none"
          >
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.04 }}
                className="
                  min-w-[330px] max-w-[350px] snap-center
                  bg-[var(--wt-card)]
                  border border-white/10
                  rounded-3xl p-8 shadow-xl
                  backdrop-blur-xl
                  hover:border-[var(--wt-accent)] hover:shadow-[0_0_35px_var(--wt-accent)/25]
                  transition-all duration-500
                "
              >
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -top-3 right-10 w-20 h-1 bg-[var(--wt-accent)]/60 blur-sm"
                />

                <p className="text-[var(--wt-text)] text-lg leading-relaxed">
                  “{t.review}”
                </p>

                <div className="mt-6">
                  <h4 className="text-[var(--wt-text)] font-semibold">{t.name}</h4>
                  <p className="text-[var(--wt-muted)] text-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

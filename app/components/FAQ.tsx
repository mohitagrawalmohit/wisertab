'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    q: "What services does Wisertab provide?",
    a: "We help businesses build apps, websites, automation systems, CRM integrations, marketing systems, and intelligent digital experiences."
  },
  {
    q: "How long does a project usually take?",
    a: "Most projects take 2–8 weeks depending on complexity. Large systems may take more time with milestones."
  },
  {
    q: "Do you offer custom solutions?",
    a: "Yes — every Wisertab project is tailor-made based on your brand, users, and specific requirements."
  },
  {
    q: "What technologies do you use?",
    a: "Next.js, React, Node.js, CRM platforms, automation tools, AWS, cloud services, databases, and more."
  },
  {
    q: "How do we get started?",
    a: "Simply reach out using the contact form. We’ll understand your needs and prepare a proper roadmap for you."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-32 px-6 overflow-hidden">

      {/* Background Lights */}
      <div className="absolute -top-20 left-0 w-[400px] h-[400px] bg-[var(--wt-accent)]/10 blur-[150px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[180px] -z-10" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/grid.svg')] -z-10" />

      <div className="relative max-w-5xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-[var(--wt-text)]"
        >
          Frequently Asked Questions
        </motion.h2>

        <p className="text-[var(--wt-muted)] text-center mt-4">
          All you need to know before starting your project with Wisertab.
        </p>

        {/* FAQ Accordion Box */}
        <div className="mt-16 space-y-6">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="
                  bg-[var(--wt-card)] border border-white/10
                  rounded-2xl p-6 backdrop-blur-lg shadow-lg
                  hover:border-[var(--wt-accent)]/50 transition-all cursor-pointer
                "
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {/* Question Row */}
                <div className="flex justify-between items-center">
                  <h3 className="text-xl text-[var(--wt-text)] font-semibold">
                    {item.q}
                  </h3>

                  {/* Toggle Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[var(--wt-accent)] text-2xl font-bold"
                  >
                    +
                  </motion.div>
                </div>

                {/* Answer Dropdown */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="text-[var(--wt-muted)] mt-4 leading-relaxed"
                    >
                      {item.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

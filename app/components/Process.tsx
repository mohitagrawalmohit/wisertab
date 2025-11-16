'use client'

import { motion } from "framer-motion"

const steps = [
  {
    title: "Discovery & Strategy",
    desc: "We understand your vision, analyze requirements, and define a high-impact product roadmap."
  },
  {
    title: "Design & Experience",
    desc: "We craft futuristic interfaces, micro-interactions, and smooth user journeys."
  },
  {
    title: "Development",
    desc: "We build scalable applications with clean architecture, modern frameworks, and robust performance."
  },
  {
    title: "Testing & QA",
    desc: "Every feature is tested across devices, flows, and stress conditions for reliability."
  },
  {
    title: "Launch & Optimization",
    desc: "Deployment, monitoring, analytics, and continuous improvements to ensure long-term success."
  }
]

export default function Process() {
  return (
    <section id="process" className="relative py-12 px-6 overflow-hidden">

      {/* Background Lighting */}
      <div className="absolute inset-0 -z-10 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/grid.svg')] bg-cover"></div>
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-[var(--wt-accent)]/10 blur-[150px]"></div>
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-blue-400/10 blur-[160px]"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-[var(--wt-text)] text-center"
        >
          Our Workflow
        </motion.h2>

        <p className="mt-4 text-[var(--wt-muted)] max-w-2xl mx-auto text-center">
          A streamlined, intelligent process designed to turn your ideas into powerful digital products.
        </p>

        {/* TIMELINE */}
        <div className="relative mt-20">

          {/* Vertical Line */}
          <div className="
            absolute 
            left-1/2 
            top-0 
            bottom-0 
            w-[3px] 
            bg-white/10
            rounded-full 
            transform 
            -translate-x-1/2
          "></div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                
                className={`relative flex flex-col md:flex-row items-center gap-10 
                  ${index % 2 === 0 ? "md:flex-row-reverse" : ""} 
                  md:justify-between
                `}
              >
                {/* Connector Dot */}
                <div
                  className="
                    absolute 
                    left-1/2 
                    -translate-x-1/2 
                    w-6 
                    h-6 
                    bg-[var(--wt-accent)] 
                    rounded-full 
                    shadow-[0_0_25px_var(--wt-accent)] 
                    z-10
                  "
                ></div>

                {/* Card */}
                <div
                  className="
                    bg-[var(--wt-card)] 
                    p-8 
                    rounded-2xl 
                    border 
                    border-white/10 
                    w-full 
                    md:w-[45%]
                    backdrop-blur-xl 
                    shadow-[0_0_30px_rgba(255,255,255,0.03)]
                    text-center 
                    md:text-left
                  "
                >
                  <h3 className="text-2xl font-semibold text-[var(--wt-text)]">{step.title}</h3>
                  <p className="mt-3 text-[var(--wt-muted)] leading-relaxed">{step.desc}</p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

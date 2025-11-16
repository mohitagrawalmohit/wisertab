'use client'

import { motion } from "framer-motion"

const services = [
  {
    title: "App Development",
    desc: "iOS, Android & Cross-platform applications built for performance and scale."
  },
  {
    title: "Web Development",
    desc: "Modern, fast & SEO-ready websites using Next.js, React & Tailwind."
  },
  {
    title: "CRM & Cloud Solutions",
    desc: "Zoho, Salesforce, HubSpot, automation & workflow integrations."
  },
  {
    title: "Digital Marketing",
    desc: "SEO, PPC, Social Media, Performance campaigns & lead systems."
  },
  {
    title: "UI / UX Design",
    desc: "Premium user experiences, design systems, prototypes & dashboards."
  },
  {
    title: "Software & ERP",
    desc: "Custom enterprise software and automation tools for operations."
  },
]

export default function Services() {
  return (
    <section id="services" className="py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[var(--wt-text)]"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-3 max-w-2xl text-[var(--wt-muted)]"
        >
          We build high-quality digital products and scalable systems for brands and businesses.
        </motion.p>

        {/* Service Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--wt-card)] border border-white/5 rounded-2xl p-6 hover:border-[var(--wt-accent)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--wt-accent)]/10"
            >
              <h3 className="text-xl font-semibold text-[var(--wt-text)]">
                {service.title}
              </h3>
              <p className="mt-3 text-[var(--wt-muted)] leading-relaxed">
                {service.desc}
              </p>

              <button className="mt-6 text-[var(--wt-accent)] font-medium hover:underline">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

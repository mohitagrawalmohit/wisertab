'use client'

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 overflow-hidden">

      {/* Background Accent Lights */}
      <div className="absolute -top-20 left-10 w-[300px] h-[300px] bg-[var(--wt-accent)]/15 blur-[160px]"></div>
      <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-blue-500/10 blur-[180px]"></div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/grid.svg')] bg-cover"></div>

      <div className="relative max-w-5xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[var(--wt-text)]"
        >
          Let's Build Something Intelligent
        </motion.h2>

        <p className="mt-3 text-center text-[var(--wt-muted)] max-w-xl mx-auto text-sm sm:text-base">
          Share your project idea with us — we’ll respond with a tailored plan.
        </p>

        {/* FORM CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="
            mt-12 sm:mt-16 
            bg-[var(--wt-card)] 
            border border-white/10 
            rounded-2xl sm:rounded-3xl 
            p-6 sm:p-10 
            backdrop-blur-xl 
            shadow-2xl
          "
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

            {/* Name */}
            <div className="flex flex-col">
              <label className="text-[var(--wt-text)] mb-1 sm:mb-2 text-sm sm:text-base">Name</label>
              <input
                type="text"
                className="
                  px-3 py-2 sm:px-4 sm:py-3 
                  rounded-xl 
                  bg-[#111a2c] 
                  border border-white/10 
                  text-[var(--wt-text)]
                  focus:border-[var(--wt-accent)] 
                  focus:shadow-[0_0_10px_var(--wt-accent)] 
                  outline-none 
                  transition
                  text-sm sm:text-base
                "
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[var(--wt-text)] mb-1 sm:mb-2 text-sm sm:text-base">Email</label>
              <input
                type="email"
                className="
                  px-3 py-2 sm:px-4 sm:py-3 
                  rounded-xl 
                  bg-[#111a2c] 
                  border border-white/10 
                  text-[var(--wt-text)]
                  focus:border-[var(--wt-accent)] 
                  focus:shadow-[0_0_10px_var(--wt-accent)] 
                  outline-none 
                  transition
                  text-sm sm:text-base
                "
                placeholder="name@email.com"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-[var(--wt-text)] mb-1 sm:mb-2 text-sm sm:text-base">Phone</label>
              <input
                type="text"
                className="
                  px-3 py-2 sm:px-4 sm:py-3 
                  rounded-xl 
                  bg-[#111a2c] 
                  border border-white/10 
                  text-[var(--wt-text)]
                  focus:border-[var(--wt-accent)] 
                  focus:shadow-[0_0_10px_var(--wt-accent)] 
                  outline-none 
                  transition
                  text-sm sm:text-base
                "
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Service */}
            <div className="flex flex-col">
              <label className="text-[var(--wt-text)] mb-1 sm:mb-2 text-sm sm:text-base">Service Required</label>
              <select
                className="
                  px-3 py-2 sm:px-4 sm:py-3 
                  rounded-xl 
                  bg-[#111a2c] 
                  border border-white/10 
                  text-[var(--wt-text)]
                  focus:border-[var(--wt-accent)] 
                  focus:shadow-[0_0_10px_var(--wt-accent)] 
                  outline-none 
                  transition
                  text-sm sm:text-base
                "
              >
                <option>App Development</option>
                <option>Web Development</option>
                <option>CRM / Automation</option>
                <option>UI / UX Design</option>
                <option>Digital Marketing</option>
                <option>Software / ERP</option>
              </select>
            </div>

            {/* Message */}
            <div className="col-span-1 md:col-span-2 flex flex-col">
              <label className="text-[var(--wt-text)] mb-1 sm:mb-2 text-sm sm:text-base">Message</label>
              <textarea
                rows={4}
                className="
                  px-3 py-2 sm:px-4 sm:py-3
                  rounded-xl 
                  bg-[#111a2c] 
                  border border-white/10 
                  text-[var(--wt-text)]
                  focus:border-[var(--wt-accent)] 
                  focus:shadow-[0_0_10px_var(--wt-accent)] 
                  outline-none 
                  transition
                  text-sm sm:text-base
                "
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            {/* Button */}
            <div className="col-span-1 md:col-span-2">
              <button
                className="
                  w-full 
                  py-3 sm:py-4 
                  rounded-xl 
                  bg-[var(--wt-accent)] 
                  text-black 
                  font-semibold 
                  text-sm sm:text-lg
                  hover:bg-pink-300 
                  transition 
                  shadow-xl
                "
              >
                Submit Request
              </button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  )
}

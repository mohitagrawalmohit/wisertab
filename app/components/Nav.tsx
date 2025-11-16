'use client'

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Nav() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { name: "Home", link: "#hero" },
    { name: "Services", link: "#services" },
    { name: "About", link: "#about" },
    { name: "Technologies", link: "#technologies" },
    { name: "Contact", link: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* 🔥 Animated Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-[6px] z-[999]"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-8 h-[3px] bg-[var(--wt-accent)] rounded"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-8 h-[3px] bg-[var(--wt-accent)] rounded"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-8 h-[3px] bg-[var(--wt-accent)] rounded"
          />
        </button>

        {/* 🌟 Centered Logo */}
<div className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 flex items-center gap-3 z-[998]">
  
  {/* Logo Image */}
  <img 
    src="/logo.png" 
    alt="WiserTab Logo" 
    className="w-20 h-20 object-contain drop-shadow-[0_0_10px_#EE82ED55]"
  />

  <span className="text-[var(--wt-text)] font-bold tracking-wide text-2xl">
    WiserTab
  </span>

</div>


        {/* 🖥 Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-[var(--wt-muted)] hover:text-[var(--wt-accent)] transition"
            >
              {item.name}
            </Link>
          ))}

          <Link href="#contact" 
            className="px-4 py-2 rounded-full border border-[var(--wt-accent)] text-[var(--wt-accent)] hover:bg-[var(--wt-accent)] hover:text-black transition">
            Contact
          </Link>
        </div>
      </div>

      {/* 🔥 FULLSCREEN MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-40"
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 left-0 w-full h-full bg-[var(--wt-bg)] z-50 p-10 flex flex-col justify-center relative"
            >
              {/* Neon Strip */}
              <div className="absolute left-0 top-0 h-full w-[3px] bg-[var(--wt-accent)] shadow-[0_0_20px_var(--wt-accent)]" />

              {/* Menu Items */}
              <div className="flex flex-col gap-10 text-center">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.link}
                      onClick={() => setOpen(false)}
                      className="text-[var(--wt-text)] text-3xl font-semibold hover:text-[var(--wt-accent)] transition"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Contact Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6"
                >
                  <Link
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="px-6 py-3 rounded-full border border-[var(--wt-accent)] text-[var(--wt-accent)] hover:bg-[var(--wt-accent)] hover:text-black transition text-xl"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

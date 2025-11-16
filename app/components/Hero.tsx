'use client'

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <header 
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      

      {/* CONTENT */}
      <div className="
        relative 
        max-w-3xl 
        mx-auto 
        text-center 
        z-10
        pt-0       /* moves content UP */
        sm:pt-3 
        md:pt-0
      ">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            font-extrabold 
            leading-tight 
            text-[var(--wt-text)]
            text-3xl 
            sm:text-4xl 
            md:text-5xl 
            lg:text-6xl
          "
        >
          Transforming Ideas Into  
          <span className="block text-[var(--wt-accent)] mt-1">
            Intelligent Digital Solutions
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
            mt-4 
            text-md
            sm:text-base 
            md:text-xl 
            text-[var(--wt-muted)] 
            max-w-md 
            mx-auto
          "
        >
          “Where Ideas Turn Into Intelligent Digital Solutions.”
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            mt-16      /* moves buttons DOWN */
            sm:mt-14
            md:mt-45
            w-full
            flex 
            flex-col 
            items-center 
            justify-center 
            gap-3
            sm:flex-row
          "
        >
          <a 
            href="#contact"
            className="
              px-4 py-2
              sm:px-6 sm:py-3
              rounded-full 
              bg-[var(--wt-accent)] 
              text-black 
              font-semibold 
              text-xs 
              sm:text-sm 
              shadow-xl 
              hover:bg-pink-300 
              transition 
              text-center
              w-[150px]
            "
          >
            Start Project
          </a>

          <a 
            href="#services"
            className="
              px-4 py-2
              sm:px-6 sm:py-3
              rounded-full 
              border border-[var(--wt-accent)] 
              text-[var(--wt-accent)] 
              hover:bg-[var(--wt-accent)] 
              hover:text-black 
              transition 
              text-center
              text-xs 
              sm:text-sm
              w-[150px]
            "
          >
            Services
          </a>
        </motion.div>

      </div>
    </header>
  )
}

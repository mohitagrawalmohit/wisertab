'use client'

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springX = useSpring(cursorX, { stiffness: 300, damping: 25 })
  const springY = useSpring(cursorY, { stiffness: 300, damping: 25 })

  // Store pulse animations
  const [pulses, setPulses] = useState<
    { id: number; x: number; y: number }[]
  >([])

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener("mousemove", moveCursor)

    return () => window.removeEventListener("mousemove", moveCursor)
  }, [])

  // CLICK PULSE EFFECT
  useEffect(() => {
    const createPulse = (e: MouseEvent) => {
      const id = Date.now()
      const x = e.clientX
      const y = e.clientY

      setPulses((prev) => [...prev, { id, x, y }])

      // Remove after animation
      setTimeout(() => {
        setPulses((prev) => prev.filter((p) => p.id !== id))
      }, 600)
    }

    window.addEventListener("click", createPulse)
    return () => window.removeEventListener("click", createPulse)
  }, [])

  // MAGNETIC EFFECT
  useEffect(() => {
    const items = document.querySelectorAll("[data-magnetic]")

    items.forEach((item) => {
      const strength = 50

      const move = (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement
        const rect = target.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        target.style.transform = `translate(${x / strength}px, ${y / strength}px)`
      }

      const reset = (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement
        target.style.transform = "translate(0px, 0px)"
      }

      item.addEventListener("mousemove", move as EventListener)
      item.addEventListener("mouseleave", reset as EventListener)
    })
  }, [])

  return (
    <>
      {/* MAIN CURSOR */}
      <motion.div
        ref={cursorRef}
        style={{
          translateX: springX,
          translateY: springY,
        }}
        className="
          fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999]
          border-2 border-[var(--wt-accent)] shadow-[0_0_20px_var(--wt-accent)]
          mix-blend-screen
        "
      />

      {/* CLICK PULSES */}
      {pulses.map((pulse) => (
        <motion.div
          key={pulse.id}
          initial={{ opacity: 0.7, scale: 0 }}
          animate={{ opacity: 0, scale: 4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            pointer-events-none fixed w-10 h-10 rounded-full z-[9998]
            border border-[var(--wt-accent)] 
            shadow-[0_0_35px_var(--wt-accent)]
          "
          style={{
            left: pulse.x - 20,
            top: pulse.y - 20,
          }}
        ></motion.div>
      ))}
    </>
  )
}

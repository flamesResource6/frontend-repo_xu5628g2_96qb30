import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Disable on touch devices
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    if (isCoarse) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    }

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      raf = requestAnimationFrame(loop)
    }

    let raf = requestAnimationFrame(loop)
    window.addEventListener('mousemove', move)

    const interactiveSelector = 'a, button, [role="button"], input, textarea, select, .cursor-interactive'
    const enter = () => ring.classList.add('scale-150', 'bg-sky-300/10', 'border-sky-400/60')
    const leave = () => ring.classList.remove('scale-150', 'bg-sky-300/10', 'border-sky-400/60')

    const handleEnter = (e) => enter()
    const handleLeave = (e) => leave()

    const bindHoverEvents = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener('mouseenter', handleEnter)
        el.addEventListener('mouseleave', handleLeave)
      })
    }

    const unbindHoverEvents = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }

    bindHoverEvents()

    const hide = () => {
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }
    const show = () => {
      dot.style.opacity = '1'
      ring.style.opacity = '1'
    }

    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
      unbindHoverEvents()
    }
  }, [])

  // Reduced motion: render nothing
  if (prefersReducedMotion) return null

  // Hide on touch devices by CSS pointer coarse
  return (
    <>
      <motion.div
        ref={ringRef}
        className="fixed left-0 top-0 z-[10000] pointer-events-none hidden md:block h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-400/50 backdrop-blur-sm bg-white/5 transition-transform duration-150 will-change-transform"
      />
      <motion.div
        ref={dotRef}
        className="fixed left-0 top-0 z-[10001] pointer-events-none hidden md:block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
      />
    </>
  )
}

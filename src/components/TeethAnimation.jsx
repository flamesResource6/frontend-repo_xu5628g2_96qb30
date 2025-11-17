import { useEffect, useMemo, useRef, useState } from 'react'
import { Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

function Sparkle({ delay = 0, x = 0, y = 0, scale = 1 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, x, y }}
      animate={{
        opacity: [0, 1, 0.8, 0],
        scale: [0.6, 1, 1.1, 0.8],
        y: [y, y - 12, y - 20, y - 28],
      }}
      transition={{ duration: 3.2, repeat: Infinity, delay, ease: 'easeOut' }}
      className="absolute"
    >
      <Sparkles className="w-4 h-4 text-sky-300 drop-shadow-[0_0_12px_rgba(125,211,252,0.8)]" />
    </motion.div>
  )
}

function Rings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative">
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <div className="ring ring-3" />
      </div>
      <style>{`
        .ring {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 9999px;
          background: radial-gradient(closest-side, rgba(59,130,246,0.15), transparent);
          filter: blur(2px);
          animation: ring-rotate 18s linear infinite;
        }
        .ring-2 { width: 520px; height: 520px; animation-duration: 24s; opacity: .6 }
        .ring-3 { width: 640px; height: 640px; animation-duration: 32s; opacity: .35 }
        @keyframes ring-rotate { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
      `}</style>
    </div>
  )
}

function GlossSweep() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -inset-x-24 -inset-y-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-gloss" />
      </div>
    </div>
  )
}

export default function TeethAnimation() {
  const prefersReducedMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const sparkles = useMemo(
    () => new Array(16).fill(0).map((_, i) => ({
      delay: (i % 8) * 0.4 + Math.random() * 0.4,
      x: Math.cos((i / 16) * Math.PI * 2) * (80 + Math.random() * 40),
      y: Math.sin((i / 16) * Math.PI * 2) * (60 + Math.random() * 30),
      scale: 0.9 + Math.random() * 0.6,
    })),
    []
  )

  return (
    <div className="relative aspect-[4/3] md:aspect-[5/3] rounded-2xl overflow-hidden bg-[radial-gradient(1200px_600px_at_80%_0%,rgba(14,165,233,0.20),transparent),radial-gradient(800px_400px_at_10%_100%,rgba(59,130,246,0.22),transparent)] shadow-2xl">
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute -inset-24 bg-gradient-to-br from-sky-300/20 via-white/10 to-indigo-300/10 blur-2xl" />
      </div>

      {/* Floating rings */}
      {!prefersReducedMotion && <Rings />}

      {/* Central tooth SVG */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative w-[68%] max-w-[560px]">
          <motion.div
            initial={{ y: 8, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <svg viewBox="0 0 512 512" className="w-full drop-shadow-[0_40px_70px_rgba(2,132,199,0.25)]">
              <defs>
                <linearGradient id="toothGradient" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#e6f4ff" />
                  <stop offset="100%" stopColor="#dbeafe" />
                </linearGradient>
                <radialGradient id="shadow" cx="50%" cy="60%" r="60%">
                  <stop offset="0%" stopColor="rgba(0,0,0,0.10)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                </radialGradient>
                <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* shadow under tooth */}
              <ellipse cx="256" cy="420" rx="120" ry="26" fill="url(#shadow)" />

              {/* tooth shape */}
              <path
                d="M256 64c-54 0-84 28-104 60-20 32-26 70-26 96 0 58 24 90 52 90 36 0 44-24 56-24 12 0 20 24 56 24 28 0 52-32 52-90 0-26-6-64-26-96-20-32-50-60-104-60z"
                fill="url(#toothGradient)"
                filter="url(#innerGlow)"
              />

              {/* enamel highlight */}
              <path
                d="M196 120c-18 10-34 30-42 46-6 12-8 22-8 30 0 6 2 10 6 12 10 6 24-8 34-22 16-24 38-44 66-52 10-2 10-18-10-20-18-2-34 2-46 6z"
                fill="#ffffff"
                opacity="0.6"
              />

              {/* gloss shine sweep overlay via mask */}
              <g className="mix-blend-overlay">
                <path
                  d="M320 120c14 10 26 28 32 44 4 10 6 22 6 30 0 8-2 14-6 18-8 8-18 0-26-12-14-20-36-40-64-48-8-2-8-16 8-20 18-4 36-2 50-12z"
                  fill="#f8fbff"
                  opacity=".55"
                />
              </g>

              {/* small sparkle stars on tooth */}
              <g>
                <circle cx="312" cy="180" r="2.2" fill="#7dd3fc" />
                <circle cx="220" cy="200" r="1.8" fill="#bae6fd" />
                <circle cx="280" cy="240" r="2.4" fill="#93c5fd" />
              </g>
            </svg>
            {!prefersReducedMotion && <GlossSweep />}
          </motion.div>
        </div>
      </div>

      {/* Sparkles field */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0">
          {sparkles.map((s, i) => (
            <Sparkle key={i} {...s} />
          ))}
        </div>
      )}

      {/* Edge vignette */}
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(120%_120% at 50% 40%, rgba(2,6,23,0) 40%, rgba(2,6,23,0.08) 70%, rgba(2,6,23,0.18) 100%)'
      }} />
    </div>
  )
}

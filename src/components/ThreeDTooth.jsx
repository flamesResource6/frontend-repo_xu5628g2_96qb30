import { Suspense, useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import TeethAnimation from './TeethAnimation'
import { useReducedMotion, motion } from 'framer-motion'

export default function ThreeDTooth() {
  const prefersReducedMotion = useReducedMotion()
  const [canUseSpline, setCanUseSpline] = useState(false)
  const sceneUrl = import.meta.env.VITE_SPLINE_TOOTH_URL || ''

  useEffect(() => {
    // Avoid loading heavy 3D on users who prefer reduced motion
    if (prefersReducedMotion) return setCanUseSpline(false)
    // Only enable if a scene URL is provided
    setCanUseSpline(Boolean(sceneUrl))
  }, [prefersReducedMotion, sceneUrl])

  if (!canUseSpline) {
    // Fallback to lightweight SVG animation
    return (
      <div className="relative">
        <TeethAnimation />
        {!sceneUrl && (
          <div className="absolute top-3 left-3 text-[11px] md:text-xs bg-white/70 backdrop-blur px-2 py-1 rounded shadow text-slate-700">
            Tipp: Für ein echtes 3D-Modell URL setzen → VITE_SPLINE_TOOTH_URL
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative aspect-[4/3] md:aspect-[5/3] rounded-2xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white" />
      <Suspense fallback={<div className="absolute inset-0 grid place-items-center text-slate-500">Lade 3D …</div>}>
        <Spline scene={sceneUrl} className="absolute inset-0" />
      </Suspense>
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120%_120% at 50% 40%, rgba(2,6,23,0) 40%, rgba(2,6,23,0.06) 70%, rgba(2,6,23,0.12) 100%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  )
}

import { ShieldCheck, Trophy, Building2, Ribbon } from 'lucide-react'

const items = [
  { icon: Ribbon, text: '4,9 ★ auf Google – über 500 Bewertungen' },
  { icon: Trophy, text: '10+ Jahre Erfahrung in ästhetischer Zahnmedizin' },
  { icon: ShieldCheck, text: 'Deutsche & schweizerische Materialien' },
  { icon: Building2, text: 'Einzige Klinik in Hurghada mit echtem Ein-Tages-CEREC-Labor' },
]

export default function TrustBar() {
  return (
    <div className="border-y bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto">
        <div className="flex items-center gap-6 min-w-max">
          {items.map((it) => (
            <div key={it.text} className="flex items-center gap-2 text-slate-700 text-sm whitespace-nowrap">
              <it.icon className="w-4 h-4 text-sky-700" /> {it.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

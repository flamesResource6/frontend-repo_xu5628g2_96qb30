import { Search } from 'lucide-react'

const items = [
  { caption: 'Vollkeramikkronen Oberkiefer – 24 Stunden' },
  { caption: 'Veneers für Frontzähne – natürlich & hell' },
  { caption: 'Komplette Oberkiefer-Sanierung' },
  { caption: 'Implantatgetragene Krone – digitales Design' },
  { caption: 'Bleaching & Formkorrektur – harmonisches Lächeln' },
  { caption: 'Brückenversorgung – passgenau & stabil' },
]

export default function Gallery() {
  return (
    <section id="vorher-nachher" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-8">Vorher–Nachher Ergebnisse</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((g, idx) => (
            <div key={idx} className="group rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-slate-200 relative">
                <div className="absolute inset-0 hidden group-hover:grid place-items-center bg-black/20 text-white">
                  <Search className="w-6 h-6" />
                </div>
              </div>
              <div className="p-4 text-sm text-slate-700">{g.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

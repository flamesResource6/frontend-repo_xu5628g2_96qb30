import { ScanLine, Crown, Smile, Drill, Sparkles, Camera, ShieldPlus, Ambulance } from 'lucide-react'

const services = [
  {
    icon: Crown,
    title: 'CEREC Kronen in 24 Stunden',
    text: 'Präzise Vollkeramikkronen aus deutschem Zirkon – gescannt, designt und eingesetzt binnen 24 Stunden.'
  },
  {
    icon: Smile,
    title: 'CEREC Veneers in 24 Stunden',
    text: 'Natürliche, hochästhetische Veneers aus Schweizer Keramik – direkt vor Ort gefertigt.'
  },
  {
    icon: Drill,
    title: 'Zahnimplantate (inkl. Straumann)',
    text: 'Hochwertige Implantatsysteme aus der Schweiz mit digitaler Planung und 3D-Röntgen.'
  },
  {
    icon: Sparkles,
    title: 'Komplette Smile-Makeover & Vollsanierungen',
    text: 'Umfassende ästhetische Konzepte für Ober- und Unterkiefer – planbar während Ihres Urlaubs.'
  },
  {
    icon: Camera,
    title: 'Professionelle Zahnreinigung & Bleaching',
    text: 'Tiefenreinigung und schonendes In-Office-Bleaching für ein strahlendes Lächeln.'
  },
  {
    icon: ScanLine,
    title: '3D-Röntgen (CBCT) & digitale Diagnostik',
    text: 'Moderne Bildgebung für sichere Planung und minimalinvasive Behandlungen.'
  },
  {
    icon: ShieldPlus,
    title: 'Zahnersatz (Brücken, Inlays, Onlays)',
    text: 'Langlebiger, ästhetischer Ersatz – individuell designt und passgenau eingesetzt.'
  },
  {
    icon: Ambulance,
    title: '24/7 Schmerz- und Notfallbehandlung',
    text: 'Schnelle Hilfe für Touristen – WhatsApp-Support und flexible Termine.'
  },
]

export default function Services() {
  return (
    <section id="leistungen" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-8">Unsere Leistungen für Ihr Lächeln</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <s.icon className="w-6 h-6 text-sky-700 mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-3">{s.text}</p>
              <a href="#kontakt" className="text-sky-700 text-sm hover:underline">Mehr erfahren</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

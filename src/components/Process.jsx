import { MessageCircle, MapPin, Gauge, ShieldCheck } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    title: 'Kontakt & WhatsApp-Beratung',
    text: 'Senden Sie Fotos/Röntgenbilder. Wir geben eine erste Einschätzung und eine Preisrange.'
  },
  {
    icon: MapPin,
    title: 'Ankunft in Hurghada & Erstuntersuchung',
    text: 'Kostenlose Hotel-Abholung, klinische Untersuchung, 3D-Scan und finaler Behandlungsplan.'
  },
  {
    icon: Gauge,
    title: 'Behandlung in 24 Stunden',
    text: 'CEREC-Design & Fräsung, Einprobe und Eingliederung von Kronen/Veneers/Implantaten.'
  },
  {
    icon: ShieldCheck,
    title: 'Nachkontrolle & Garantie',
    text: 'Kontrolle, Pflegehinweise und WhatsApp-Nachbetreuung für nachhaltige Ergebnisse.'
  }
]

export default function Process() {
  return (
    <section id="ablauf" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-8">So läuft Ihre Behandlung ab</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="p-6 rounded-xl border bg-white shadow-sm relative">
              <div className="absolute -top-3 -left-3 bg-sky-700 text-white w-8 h-8 rounded-full grid place-items-center text-sm font-semibold">{i+1}</div>
              <s.icon className="w-6 h-6 text-sky-700 mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-600 mt-6">Hinweis: Ideal für eine einwöchige Reise. Die meisten Smile-Makeover lassen sich in diesem Zeitraum planen und abschließen.</p>
      </div>
    </section>
  )
}

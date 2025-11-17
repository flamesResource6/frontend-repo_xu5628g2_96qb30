import { Timer, Gem, Route, BadgeCheck } from 'lucide-react'

const benefits = [
  {
    icon: Timer,
    title: 'Echte Ein-Tages-Behandlungen',
    text: 'Kronen und Veneers werden bei uns gescannt, designt und vor Ort im eigenen CEREC-Labor gefertigt – in der Regel innerhalb von 24 Stunden.'
  },
  {
    icon: Gem,
    title: 'Premium-Materialien aus Deutschland & der Schweiz',
    text: 'Straumann Implantate, deutsches Zirkon und schweizerische Keramiken – für langlebige, ästhetische Ergebnisse auf europäischem Niveau.'
  },
  {
    icon: Route,
    title: 'Kompletter Service für Touristen',
    text: 'Kostenlose Hotel-Abholung, flexible Termine während Ihres Urlaubs und persönliche WhatsApp-Betreuung – unkompliziert und planbar.'
  },
  {
    icon: BadgeCheck,
    title: 'Transparente Festpreise ohne Überraschungen',
    text: 'Klare, schriftliche Kostenpläne vor Beginn. Keine versteckten Gebühren – Sie wissen stets, womit Sie rechnen.'
  }
]

export default function Benefits() {
  return (
    <section id="warum" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-8">Warum deutsche Patienten uns wählen</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="group p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
              <b.icon className="w-6 h-6 text-sky-700 mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">{b.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

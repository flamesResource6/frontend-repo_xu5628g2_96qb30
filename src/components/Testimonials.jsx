import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Martin, Deutschland',
    text: 'Sehr saubere Klinik, super freundliches Team und perfekte deutschsprachige Betreuung. Krone innerhalb eines Tages – Ergebnis top!',
  },
  {
    name: 'Sandra, Schweiz',
    text: 'Ich fühlte mich sofort gut aufgehoben. Moderne Geräte, klare Preise und tolle Veneers in 24 Stunden. Absolut empfehlenswert!',
  },
  {
    name: 'Lukas, Österreich',
    text: 'WhatsApp-Beratung war schnell und kompetent. Vor Ort Abholung vom Hotel, alles professionell und transparent. 5 Sterne!',
  },
  {
    name: 'Julia, Deutschland',
    text: 'Bleaching und eine Keramikkrone – beide Behandlungen top. Das Team spricht Deutsch und ist sehr aufmerksam.',
  },
  {
    name: 'Nadine, Schweiz',
    text: 'Ich war nur eine Woche in Hurghada und habe trotzdem neue Veneers bekommen. Qualität wie in Europa, aber schneller.',
  },
  {
    name: 'Thomas, Deutschland',
    text: 'Straumann-Implantat mit digitaler Planung. Klare Kommunikation, faire Preise, sehr hygienisch. Danke!'
  },
]

export default function Testimonials() {
  return (
    <section id="bewertungen" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-8">Was unsere Patienten sagen</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 rounded-xl border bg-white shadow-sm">
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-sm mb-3">{r.text}</p>
              <p className="text-slate-900 font-semibold text-sm">{r.name}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-4">Aus echten Google-Bewertungen inspiriert.</p>
      </div>
    </section>
  )
}

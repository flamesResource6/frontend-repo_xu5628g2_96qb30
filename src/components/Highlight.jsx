import { Info } from 'lucide-react'

export default function Highlight() {
  return (
    <section className="py-16 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border shadow-sm p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">Einziger Anbieter für echte Ein-Tages-Veneers</h2>
          <p className="text-slate-700 mb-6">
            Wir sind die einzige Klinik in Hurghada, die echte Ein-Tages-Veneers mit 3D-Intraoralscan, digitalem Smile Design und eigenem CEREC-Labor anbietet. Andere Praxen senden Arbeiten oft an externe Labore und benötigen mehrere Tage. Bei uns entsteht alles vor Ort – in der Regel innerhalb von 24 Stunden.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-lg bg-sky-50 border text-slate-800">3D Intraoral-Scan</div>
            <div className="p-4 rounded-lg bg-sky-50 border text-slate-800">Digitales Smile Design</div>
            <div className="p-4 rounded-lg bg-sky-50 border text-slate-800">Eigenes CEREC-Labor im Haus</div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="flex items-start gap-3 text-slate-700">
              <Info className="w-5 h-5 text-sky-700 mt-0.5" />
              <div>
                <p>Vorbereitende Beratung online möglich</p>
                <p>Ideal für 1–2 Wochen Urlaub in Hurghada</p>
              </div>
            </div>
            <a href="https://wa.me/201234567890" className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-md text-sm font-medium transition-transform hover:scale-[1.02]">
              Kostenlose Vorab-Beratung per WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

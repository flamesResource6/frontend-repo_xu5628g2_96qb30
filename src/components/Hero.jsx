import { Star, CheckCircle2, MessageCircle, Calendar } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="pt-24 md:pt-28 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
            Ihr neues Lächeln – in nur einem Tag in Hurghada.
          </h1>
          <p className="text-slate-700 text-base sm:text-lg">
            Premium Zahnklinik für deutschsprachige Touristen: CEREC Kronen und Veneers in 24 Stunden, mit deutschen und schweizerischen Materialien, 4,9★ Google-Bewertung und kostenlosem Hotel-Abholservice.
          </p>
          <ul className="space-y-3">
            {[
              'Echte Ein-Tages-Behandlungen dank 3D-Scan & eigenem CEREC-Labor',
              'Deutsche & schweizerische Materialien (z.B. Straumann, deutsches Zirkon)',
              'Deutschsprachige Betreuung – von der ersten Nachricht bis zur Nachkontrolle',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-sky-700 mt-0.5" /> <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://wa.me/201234567890" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-md text-sm font-medium transition-transform hover:scale-[1.02]">
              <MessageCircle className="w-4 h-4" /> Jetzt WhatsApp-Beratung starten
            </a>
            <a href="#kontakt" className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 hover:bg-slate-50 px-5 py-3 rounded-md text-sm font-medium transition-transform hover:scale-[1.02]">
              <Calendar className="w-4 h-4" /> Online-Termin sichern
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-video rounded-xl bg-slate-200 shadow-inner" />
          <div className="absolute -bottom-4 right-4 bg-white shadow-lg rounded-lg px-4 py-3 flex items-center gap-3">
            <div className="flex items-center text-amber-500">
              <Star className="w-5 h-5 fill-amber-400" />
              <Star className="w-5 h-5 fill-amber-400" />
              <Star className="w-5 h-5 fill-amber-400" />
              <Star className="w-5 h-5 fill-amber-400" />
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-slate-900 leading-none">4,9 ★★★★★ auf Google</p>
              <p className="text-slate-600 leading-none">500+ zufriedene Patienten</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

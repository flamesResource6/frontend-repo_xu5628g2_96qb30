export default function Pricing() {
  return (
    <section id="preise" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-8">Transparente Preise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-1">Einzelne Krone (deutsches Zirkon)</h3>
            <p className="text-slate-700 text-sm mb-4">Enthält: 3D-Scan, Design, CEREC-Fertigung, Einsetzen, Kontrolle</p>
            <p className="text-3xl font-bold text-slate-900">ab ca. 170 €</p>
            <ul className="mt-4 text-sm text-slate-700 space-y-2">
              <li>Hochpräzise Passung</li>
              <li>Natürliche Ästhetik</li>
              <li>Fertig in 24 Stunden</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white border shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-1">Einzelne Krone (schweizerische Keramik)</h3>
            <p className="text-slate-700 text-sm mb-4">Premium-Ästhetik, hohe Transluzenz, ideal für Frontzähne</p>
            <p className="text-3xl font-bold text-slate-900">ab ca. 220 €</p>
            <ul className="mt-4 text-sm text-slate-700 space-y-2">
              <li>Maximale Natürlichkeit</li>
              <li>Hohe Festigkeit</li>
              <li>24-Stunden-Service</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white border shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-1">Straumann Implantat-Paket</h3>
            <p className="text-slate-700 text-sm mb-4">Implantat + Aufbau, inkl. Planung und 3D-Röntgen</p>
            <p className="text-3xl font-bold text-slate-900">ab ca. 650–700 €</p>
            <ul className="mt-4 text-sm text-slate-700 space-y-2">
              <li>Schweizer Premiumhersteller</li>
              <li>Digitale Planung</li>
              <li>Langzeitstabilität</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white border shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-1">Bleaching & Zahnreinigung</h3>
            <p className="text-slate-700 text-sm mb-4">Professionelle Zahnreinigung + In-Office-Bleaching</p>
            <p className="text-3xl font-bold text-slate-900">Paketpreis auf Anfrage</p>
            <ul className="mt-4 text-sm text-slate-700 space-y-2">
              <li>Schonende Methode</li>
              <li>Messbarer Aufhellungseffekt</li>
              <li>Perfekt für den Urlaub</li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-slate-600 mt-6">Alle Preise sind Richtwerte in Euro und basieren auf unseren Festpreisen in ägyptischen Pfund. Vor Ort erhalten Sie einen schriftlichen Kostenvoranschlag – ohne versteckte Gebühren.</p>

        <div className="mt-6">
          <a href="#kontakt" className="inline-flex items-center justify-center bg-sky-700 hover:bg-sky-800 text-white px-6 py-3 rounded-md text-sm font-medium transition-transform hover:scale-[1.02]">Individuelles Angebot anfordern</a>
        </div>
      </div>
    </section>
  )
}

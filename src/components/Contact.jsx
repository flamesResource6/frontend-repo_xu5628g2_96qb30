export default function Contact() {
  return (
    <section id="kontakt" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2 text-center">Kontakt & Termin</h2>
        <p className="text-slate-700 mb-6 text-center">Schreiben Sie uns per WhatsApp oder nutzen Sie das Formular. Wir antworten meist innerhalb weniger Stunden.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl border bg-sky-50">
            <h3 className="font-semibold text-slate-900 mb-2">Direkt per WhatsApp</h3>
            <p className="text-slate-700 text-sm mb-4">Klicken Sie auf den Button und senden Sie uns Ihre Nachricht – gerne auch mit Fotos.</p>
            <a href="https://wa.me/201234567890" className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-md text-sm font-medium">WhatsApp starten</a>
            <div className="mt-6 text-sm text-slate-700">
              <p>Telefon: <a className="text-sky-700" href="tel:+201234567890">+20 123 456 7890</a></p>
              <p>E-Mail: <a className="text-sky-700" href="mailto:info@dentalhome-hurghada.com">info@dentalhome-hurghada.com</a></p>
            </div>
          </div>

          <form className="p-6 rounded-xl border bg-white space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Vorname</label>
                <input type="text" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="Vorname" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nachname</label>
                <input type="text" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="Nachname" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">E-Mail</label>
                <input type="email" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="E-Mail" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp-Nummer</label>
                <input type="tel" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="z.B. +49 ..." />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Anreisedatum nach Hurghada</label>
                <input type="date" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Gewünschte Behandlung</label>
                <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600">
                  <option>Kronen</option>
                  <option>Veneers</option>
                  <option>Implantate</option>
                  <option>Bleaching</option>
                  <option>Komplettsanierung</option>
                  <option>Sonstiges</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nachricht</label>
              <textarea className="w-full border rounded-md px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="Ihre Nachricht"></textarea>
            </div>
            <p className="text-xs text-slate-600">Wir antworten in der Regel innerhalb weniger Stunden. Auf Wunsch können wir auch per Sprachnachricht (Deutsch/Englisch) antworten.</p>
            <button type="submit" className="w-full bg-sky-700 hover:bg-sky-800 text-white px-5 py-3 rounded-md text-sm font-medium">Termin sichern</button>
          </form>
        </div>
      </div>
    </section>
  )
}

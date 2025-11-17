import { useState } from 'react'

const faqs = [
  {
    q: 'Wie kann ich einen Termin buchen?',
    a: 'Am schnellsten über WhatsApp. Alternativ füllen Sie unser Terminformular aus. Wir bestätigen Ihren Wunschtermin und klären offene Fragen vorab.'
  },
  {
    q: 'Wie schnell können Kronen oder Veneers wirklich fertig sein?',
    a: 'Dank 3D-Scan, digitalem Design und eigenem CEREC-Labor fertigen wir in der Regel innerhalb von 24 Stunden. Umfangreiche Smile-Makeover planen wir so, dass alles in Ihrem Urlaubszeitraum abgeschlossen wird.'
  },
  {
    q: 'Ist eine Behandlung in Ägypten sicher?',
    a: 'Ja. Unsere Sterilisation und Ausstattung entsprechen europäischen Standards. Wir arbeiten mit hochwertigen Materialien aus Deutschland und der Schweiz und legen großen Wert auf Hygiene und Qualität.'
  },
  {
    q: 'Sprechen Sie Deutsch?',
    a: 'Ja. Unser Team betreut Sie auf Deutsch, Englisch und Arabisch – von der ersten Nachricht bis zur Nachkontrolle.'
  },
  {
    q: 'Wie läuft die Bezahlung ab?',
    a: 'Sie erhalten vorab einen klaren Kostenplan in EGP. Die Zahlung kann in bar (EGP/EUR), per Karte oder Überweisung erfolgen. Es gibt keine versteckten Gebühren.'
  },
  {
    q: 'Brauche ich Röntgenbilder, bevor ich komme?',
    a: 'Falls vorhanden, senden Sie uns diese gern vorab per WhatsApp oder E-Mail. Vor Ort erstellen wir bei Bedarf ein 3D-Röntgen (CBCT) für präzise Planung.'
  },
  {
    q: 'Wie lange hält eine Krone / ein Implantat?',
    a: 'Bei guter Pflege können Kronen viele Jahre halten. Implantate sind eine langfristige Lösung. Wir verwenden bewährte Systeme (z.B. Straumann) und geben Pflegehinweise mit.'
  },
  {
    q: 'Bieten Sie Garantie auf die Arbeit?',
    a: 'Ja. Wir stehen für unsere Qualität ein. Details zur Garantie erhalten Sie schriftlich mit Ihrem Behandlungsplan.'
  },
  {
    q: 'Was passiert, wenn nach dem Urlaub noch Fragen auftreten?',
    a: 'Wir sind weiterhin per WhatsApp und E-Mail für Sie erreichbar. Auf Wunsch führen wir Nachkontrollen bei Ihrem nächsten Aufenthalt durch.'
  }
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b">
      <button onClick={() => setOpen(!open)} className="w-full text-left py-4 flex justify-between items-center">
        <span className="font-medium text-slate-900">{q}</span>
        <span className="text-sky-700">{open ? '–' : '+'}</span>
      </button>
      {open && <p className="pb-4 text-slate-700 text-sm">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6 text-center">Häufige Fragen (FAQ)</h2>
        <div className="bg-white rounded-xl border shadow-sm divide-y">
          {faqs.map((f, i) => (
            <Item key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

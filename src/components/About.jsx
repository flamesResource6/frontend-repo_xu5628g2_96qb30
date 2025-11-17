export default function About() {
  return (
    <section id="ueber" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">Über Dental Home – Dr. Ahmed Zarzor</h2>
          <p className="text-slate-700 mb-4">
            Seit über 10 Jahren verbinden wir in Hurghada ästhetische, implantologische und digitale Zahnmedizin auf höchstem Niveau. Wir arbeiten mit CEREC, CBCT und digitaler Fotografie – für planbare, präzise Ergebnisse.
          </p>
          <p className="text-slate-700 mb-4">
            Unsere Philosophie: europäische Qualität mit ägyptischer Gastfreundschaft. Wir nehmen uns Zeit, erklären transparent und begleiten Sie auf dem gesamten Weg zu Ihrem neuen Lächeln.
          </p>
          <ul className="list-disc pl-5 text-slate-700 space-y-2">
            <li>Spezialisiert auf ästhetische Zahnmedizin & Vollsanierungen</li>
            <li>Erfahrung mit internationalen Patienten aus Deutschland, Schweiz, Österreich, UK u.v.m.</li>
            <li>Regelmäßige Fortbildungen in digitaler Zahnmedizin und CEREC-Technologie</li>
          </ul>
        </div>
        <div>
          <div className="aspect-[3/4] rounded-xl bg-slate-200 shadow-inner" />
        </div>
      </div>
    </section>
  )
}

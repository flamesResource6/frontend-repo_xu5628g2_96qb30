import { useEffect, useState } from 'react'
import { Menu, Phone, Calendar, MessageCircle } from 'lucide-react'

const navItems = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Preise', href: '#preise' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Vorher–Nachher', href: '#vorher-nachher' },
  { label: 'Bewertungen', href: '#bewertungen' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b transition-shadow ${scrolled ? 'shadow-md' : 'shadow'} `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="font-semibold text-slate-800 text-sm sm:text-base whitespace-nowrap">
            <span className="text-sky-700">Dental Home</span> – Dr. Ahmed Zarzor
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-700 hover:text-sky-700 transition-colors text-sm">
                {item.label}
              </a>
            ))}
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 rounded-md text-sm transition-colors">
              <Calendar className="w-4 h-4" /> Termin sichern
            </a>
          </nav>

          <button aria-label="Menü" className="md:hidden p-2 rounded hover:bg-slate-100" onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6 text-slate-700" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-slate-50 text-slate-700">
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="tel:+201234567890" className="flex-1 inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 px-3 py-2 rounded-md">
                <Phone className="w-4 h-4" /> Anrufen
              </a>
              <a href="https://wa.me/201234567890" className="flex-1 inline-flex items-center justify-center gap-2 bg-sky-700 text-white px-3 py-2 rounded-md">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

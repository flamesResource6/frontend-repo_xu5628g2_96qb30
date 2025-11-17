import { Phone, MessageCircle, Calendar } from 'lucide-react'

export default function FloatingActions() {
  return (
    <>
      <a href="https://wa.me/201234567890" className="fixed bottom-20 right-4 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg p-4 transition-transform hover:scale-105" aria-label="WhatsApp">
        <MessageCircle className="w-6 h-6" />
      </a>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md md:hidden">
        <div className="grid grid-cols-3">
          <a href="tel:+201234567890" className="flex items-center justify-center gap-2 py-3 text-slate-700">
            <Phone className="w-5 h-5" /> <span className="text-sm">Anrufen</span>
          </a>
          <a href="https://wa.me/201234567890" className="flex items-center justify-center gap-2 py-3 text-slate-700">
            <MessageCircle className="w-5 h-5" /> <span className="text-sm">WhatsApp</span>
          </a>
          <a href="#kontakt" className="flex items-center justify-center gap-2 py-3 text-white bg-sky-700">
            <Calendar className="w-5 h-5" /> <span className="text-sm">Termin</span>
          </a>
        </div>
      </div>
    </>
  )
}

import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Benefits from './components/Benefits'
import Highlight from './components/Highlight'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Process from './components/Process'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Location from './components/Location'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Contact from './components/Contact'
import FloatingActions from './components/FloatingActions'
import Reveal from './components/Reveal'

function Section({ children, id }) {
  return (
    <section id={id}>
      <Reveal>{children}</Reveal>
    </section>
  )
}

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <main>
        <Section id="hero"><Hero /></Section>
        <TrustBar />
        <Section id="warum"><Benefits /></Section>
        <Section id="highlight"><Highlight /></Section>
        <Section id="leistungen"><Services /></Section>
        <Section id="preise"><Pricing /></Section>
        <Section id="ablauf"><Process /></Section>
        <Section id="vorher-nachher"><Gallery /></Section>
        <Section id="bewertungen"><Testimonials /></Section>
        <Section id="ueber"><About /></Section>
        <Section id="lage"><Location /></Section>
        <Section id="faq"><FAQ /></Section>
        <Section id="cta"><FinalCTA /></Section>
        <Section id="kontakt"><Contact /></Section>
      </main>
      <FloatingActions />
      <footer className="py-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} Dental Home – Dr. Ahmed Zarzor, Hurghada</footer>
    </div>
  )
}

export default App

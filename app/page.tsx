import LenisProvider from './LenisProvider'
import Hero from './components/Hero'
import Services from "./components/Services"
import About from "./components/About"
import Process from "./components/Process"
import Technologies from "./components/Technologies"
import Contact from "./components/Contact"
import ScrollToTop from "./components/ScrollToTop"
import WhatsAppButton from "./components/WhatsAppButton"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"




export default function Home() {
  return (
    <LenisProvider>
      <Hero />
      {/* other sections */}
       <Services />
        <About />
          <Process />
          <Technologies />
            <Testimonials />
            <FAQ />
             <Contact />
              <ScrollToTop />
                <WhatsAppButton />
    </LenisProvider>
  )
}

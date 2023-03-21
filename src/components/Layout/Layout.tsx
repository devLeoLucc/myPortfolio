import { Header } from "../header/Header"
import { MainSection } from "../mainSection/MainSection"
import { About } from "../about/About"
import { Services } from "../services/Services"
import { Experience } from "../experience/Experience"
import { Portfolio } from "../portfolio/Portfolio"
import { Contact } from "../contact/Contact"
import { Footer } from "../footer/Footer"

export function Layout() {
  return (
    <>
      <Header />
      <MainSection />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}
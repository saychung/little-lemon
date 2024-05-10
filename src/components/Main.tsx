import Footer from "./Footer"
import Hero from "./Hero"
import Promotion from "./Promotion"
import ReserveTableSection from "./ReserveTableSection"
import Testimonials from "./Testimonials"

const Main = () => {
  return (
    <>
        <Hero page='home'/>
        <Promotion />
        <Testimonials />
        <ReserveTableSection />
        <Footer />
    </>
  )
}

export default Main
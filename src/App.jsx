
import styles from './style'

import  Navbar  from "./components/Navbar"
import  Hero  from "./components/Hero"
import Stats from "./components/Stats"
import Business from "./components/Business"
import Billing from "./components/Billing"
import CardDeal  from "./components/CardDeal"
import Testimonial from "./components/Testimonial"
import Clients from "./components/Clients"
import CTA from "./components/CTA"
import Footer from "./components/Footer"


const App = () =>  (
  <div className="w-full overflow-hidden bg-primary">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business />
        <Billing />
        <CardDeal />
        <Testimonial />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>  
    
)


export default App

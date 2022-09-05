import styles from "./style";



import { Navbar, CTA, Hero, Footer, Bio, Gallery, Exhibitions } from "./components";

const App = () => {
  return (
    <div className="bg-primary__gradient w-full overflow-hidden">
      
      {/*Navbar*/}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Hero />
        </div>
      </div>

      <div className={`bg-secondary__alpha ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Bio />
          <Gallery />
          <Exhibitions />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App
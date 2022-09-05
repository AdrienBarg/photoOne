import { grid1, grid2, grid3, grid4, grid5, grid6, grid7 } from "../assets"
import styles from "../style"


const Exhibitions = () => (
  <section className="my-[10%] ">

    <div className="relative">
      <h2 className={`${styles.heading2} text-dimWhite mb-14 ml-20 relative z-[10] drop-shadow-2xl `}>
        Next <span className="underline decoration-accent">Exhibitions </span>
      </h2>
      <div className="absolute w-[14%] h-[80%] bg-tertiary left-[5%] top-[-20%] z-[5] "></div>
    </div>
    <p className="text-dimWhite font-raleway w-[60%] mb-8 ml-[10em] text-[16px] ">
          Allegories of the Visible extends the conceptual, theoretical, and critical orientations of "Currency" through a constellation of ideas on the mediatory status of the image and its strategic possibilities for knowledge ...
    </p>
    <div className="flex justify-center">
      <div className="gridContainer ">
        <div className="row-start-1 col-start-1 row-end-3 col-end-2 border-8 border-tertiary overflow-hidden ">
          <img src={grid1} alt="" className="h-[100%] object-cover " />
        </div>
        <div className="row-start-1 col-start-2 row-end-2 col-end-3 border-8 border-tertiary overflow-hidden grey">
          <img src={grid2} alt="" className="object-cover" />
        </div>
        <div className="row-start-1 col-start-. row-end-2 col-end-4 border-8 border-tertiary overflow-hidden ">
          <img src={grid3} alt="" className="object-cover" />
        </div>
        <div className="row-start-2 col-start-2 row-end-3 col-end-4 border-8 border-tertiary overflow-hidden grey">
          <img src={grid4} alt="" className="object-cover opacity-80 " />
          <h2 className="absolute font-raleway  text-dimWhite lg:text-[46px] md:text-[36px] text-[26px]  px-4 py-3 bg-primaryLow leading-[100%] drop-shadow-p border-0 border-accent ">
            Paris, <br></br>
            28 August <br></br><span className="underline decoration-accent" >2076</span>
          </h2>
        </div>
        <div className="row-start-3 col-start-1 row-end-4 col-end-2 border-8 border-tertiary overflow-hidden grey">
          <img src={grid5} alt="" className="object-cover" />
        </div>
        <div className="row-start-3 col-start-2 row-end-4 col-end-3 border-8 border-tertiary overflow-hidden ">
          <img src={grid6} alt="" className="object-cover" />
        </div>
        <div className="row-start-3 col-start-3 row-end-4 col-end-4 border-8 border-tertiary overflow-hidden grey">
          <img src={grid7} alt="" className="object-cover" />
        </div>
      </div>
    </div>
  </section>
  )


export default Exhibitions
import React from 'react'
import styles from '../style'
import { pape, arrowUp } from '../assets'


const Bio = () => {
  return (
    <section id="about" className="pt-[5rem] ">
        <h1 className={`${styles.heading2} text-dimWhite mt-10 mb-5`}>
            About <br />
            <span className="border-b-[1px] border-accent ">John Doe</span>
        </h1>
        <div className="flex flex-row">
            <div className="flex flex-1 flex-col ml-5 ">
                <span className="bg-secondary px-16 py-4 rounded-full ml-10 hidden">________</span>
                <p className="text-dimWhite font-raleway w-[60%] text-[17px] mt-14">
                    Photographer and curator based in Pasar Rumput. 
                    Being sensitive to the small details of the everyday, my work revolves around floating moments and allegorical scenes. 
                    Nature, memory, and family are notions that interest me in a symbolic form and their narrative power
                </p> <br />
                <p className="text-dimWhite font-raleway w-[60%] text-[17px] ">
                    Moreover, my humanist approach and idealisation of women set me apart from the other photographers, as my privileges the soul and the personality...
                </p>
                {/*<span className="font-poppins font-semibold text-secondary bg-accent whitespace-nowrap px-6 py-2 w-[30%] mt-10 ml-10">CONTACT ME</span>*/}
                <span className="flex flex-row font-poppins font-semibold text-accent bg-primary whitespace-nowrap px-4 py-2 w-[30%] mt-10 ml-[5%] drop-shadow-xl cursor-pointer">
                    CONTACT NOW
                    <img src={arrowUp} alt="arrow" className='ml-[5%]' />
                </span>
            </div>
            <div className="text-white flex-1 relative w-[85%] ml-10 mt-10">
                   <img src={pape} alt="" className="grayscale w-[75%] h-[75%] relative z-[9] drop-shadow-2xl"/>
                   <img src={pape} alt="" className="absolute w-[75%] h-[75%] top-10 left-[-8%] object-cover drop-shadow-3xl z-[10] "/>
            </div>
        </div>
    </section>
  )
}

export default Bio
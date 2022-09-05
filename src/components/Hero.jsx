import styles from "../style"
import { papeMain, frame1, frame2 } from "../assets"


const Hero = () => (
    <section className="w-full flex md:flex-row flex-col px-10 pt-20 bl-10 ">
            <div className="flex flex-1">
                <div className="text-white flex-1 relative w-[85%] half-border-top half-border-left xl:ml-0 ml-[10vw] ">
                   
                    <img src={papeMain} alt="" className="grayscale xl:w-[85%] w-[30vw] relative z-[9] "/>
                    <img src={papeMain} alt="" className="absolute xl:w-[85%] w-[30vw] h-[88%] top-10 left-10 object-cover drop-shadow-3xl z-[10] "/>
                </div>
            </div>
            <div className="flex flex-1 flex-col">
                <div className="flex flex-row justify-evenly ">
                    <span className="bg-secondaryHidden px-16 py-4 rounded-full">________</span>
                    <span className="text-accent text-[18px] font-semibold xl:mr-0 mr-[10vw] ">#1 Photo Of The Year Winners</span>
                </div>
                <h1 className={`font-raleway text-white xl:text-[62px] lg:text-[52px]  leading-[80px] ml-[-15%] z-[11] w-[80%] drop-shadow-3xl mt-10 mb-10 `}>
                    Photography helps people to see
                </h1>
                <p className="text-dimWhite font-raleway xl:w-[80%] w-[65%] mt-[-2%] ml-[20%] lg:mb-0 mb-10 text-[17px] " >
                    From inspiring people's stories to impactful messages, i create head-turning photograph that does the right thing, in the right place, at the right time to unlock the possibility.
                </p>
                <div className="lg:flex flex-row hidden xl:mt-0 mb-[5]">
                    <div className="lg:mt-[5.5rem] mt-[10rem] ">
                        <img src={frame1} alt="" className="absolute secondary-gradient-bg p-1 w-[10%] rotate-[-10deg] ml-[6rem] mt-[0.5rem] drop-shadow-3xl "/>
                        <img src={frame2} alt="" className="absolute secondary-gradient-bg p-1 w-[10%] rotate-[14deg] ml-[14rem] drop-shadow-3xl "/>
                    </div>
                </div>
            </div>
    </section>
  )

export default Hero
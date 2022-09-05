import { useState } from "react";
import { close, logo, menu, facebook, twitter, instagram } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
    return (
        <nav id="home" className=" w-full flex py-6 items-center navbar ">
            {/*<img src={logo} alt="" className="w-[124px] h=[32px] " />*/}
            <h1 className={`${styles.heading1} w-[25%] `}>
                <span className="text-accent" >John</span>Doe
            </h1>
            <ul className="list-none sm:flex hidden justify-center items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "lg:mr-20 mr-10"} text-dimWhite hover:text-accent `} >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="bg-secondary px-8 py-4 md:flex hidden flex-col mt-[8%] lg:fixed right-[1.5%] border-[2px] border-primary drop-shadow-follow ">
                <img src={instagram} alt="" className="mb-5 mt-8 cursor-pointer"/>
                <img src={twitter} alt="" className="mb-5 cursor-pointer"/>
                <img src={facebook} alt="" className="mb-14 cursor-pointer"/>
                <div className="rotate-90 absolute bottom-5  w-[30%] mx-auto ">
                    <span className="font-poppins font-semibold text-secondary bg-accent whitespace-nowrap px-6 py-2 ">FOLLOW ME</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
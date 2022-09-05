import { navLinks } from '../constants'
import styles from '../style'

const Footer = () => (
  <section className={`${styles.paddingY}`}>
    <div className="w-[100%] h-1 bg-tertiary "></div>

    <ul className="list-none sm:flex hidden justify-center items-center flex-1 mt-20 ml-5">
      {navLinks.map((nav, index) => (
        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-20"} text-dimWhite hover:text-accent `} >
          <a href={`#${nav.id}`}>
            {nav.title}
          </a>
        </li>
      ))}
    </ul>
  </section>
  )


export default Footer
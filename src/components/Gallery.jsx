import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay  } from "swiper"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-regular-svg-icons";


import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from '../style'
import { gallery } from '../constants'



const Gallery = () => (
  <section id="gallery" className="md:my-10 my-20">

    <div className="relative">
      <h2 className={`${styles.heading2} text-dimWhite mb-20 ml-20 relative z-[10] drop-shadow-2xl `}>
        My <span className="border-b-[1px] border-accent">Gallery </span>
      </h2>
      <div className="absolute w-[14%] h-[80%] bg-tertiary left-[15%] top-[70%] z-[5] "></div>
    </div>
    <div className="flex flex-row justify-between mb-10">
      <div className="flex flex-[4_2_0%]">
        <p className="text-dimWhite font-raleway w-[60%] ml-[10em] text-[16px] ">
          I wanted to tell a story on the street. 
          And while often in magazines the act of walking is portrayed in a stereotyped and frankly boring way, this is where looking to the future is for me, this is where the future is for me ...
        </p>
      </div>
      <div className="mt-5 mr-8 flex flex-row">
        <div className=" px-4">
          <FontAwesomeIcon icon={faAngleLeft} className="prevSlide text-dimWhite hover:text-accent cursor-pointer pr-3" size="4x" />
        </div>
        <div className="px-0">
          <FontAwesomeIcon icon={faAngleRight} className="nextSlide text-dimWhite hover:text-accent cursor-pointer" size="4x" />
        </div>
      </div>
    </div>

    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 5000
      }}
      spaceBetween={40}
      slidesPerView={4}
      speed={2000}
      loop={true}
      touchRatio={1.5}
      navigation={{
        prevEl: '.prevSlide',
        nextEl: '.nextSlide'
      }
      }
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {gallery.map((pic, index) => (
        <SwiperSlide key={index}>
          <img src={pic.src} alt={pic.title} className="cursor-grab bg-tertiary p-2" />
        </SwiperSlide>
      ))}
    </Swiper>

  </section>
);

export default Gallery
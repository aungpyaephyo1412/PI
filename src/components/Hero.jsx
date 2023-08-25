// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../index.css"
import Girl from "../assets/girl.jpg"
import Girl1 from "../assets/girl2.jpg"
import Girl2 from "../assets/girl3.jpg"
import Girl3 from "../assets/girl4.jpg"
import Girl4 from "../assets/girl5.jpg"

// import required modules
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";
const Hero = () => {
  return(
      <section>
          <div className='w-full h-screen relative'>
              <Swiper
                      grabCursor={true}
                      loop={true}
                      autoplay={true}
                      slidesPerView={1}
                      pagination={{ el: '.swiper-pagination', clickable: true }}
                      navigation={{
                          nextEl: '.button-next-2',
                          prevEl: '.button-prev-2',
                          clickable: true,
                      }}
                      modules={[Autoplay,Pagination,Navigation]}
                      className="swiper_container"
              >
                  <SwiperSlide className='w-full h-full flex justify-center relative'>
                      <div className="absolute inset-0">
                          <img src={Girl} alt=""/>
                      </div>
                      <div className='w-full absolute right-0 left-0 bottom-12'>
                            <p className='text-xl md:text-3xl text-white mb-5'>The Best Look</p>
                          <h1 className='text-3xl md:text-7xl font-extrabold text-white mb-5'>Anytime Anywhere</h1>
                          <p className='text-lg md:text-xl font-bold text-white mb-5'>Start with 10000MMK</p>
                          <button className='glass px-6 py-2 rounded-full text-white'>
                              View
                          </button>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide className='w-full h-full flex justify-center relative'>
                      <div className="absolute inset-0">
                          <img src={Girl1} alt=""/>
                      </div>
                      <div className='w-full absolute right-0 left-0 bottom-12'>
                          <p className='text-xl md:text-3xl text-white mb-5'>The Best Look</p>
                          <h1 className='text-3xl md:text-7xl font-extrabold text-white mb-5'>Anytime Anywhere</h1>
                          <p className='text-lg md:text-xl font-bold text-white mb-5'>Start with 10000MMK</p>
                          <button className='glass px-6 py-2 rounded-full text-white'>
                              View
                          </button>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide className='w-full h-full flex justify-center relative'>
                      <div className="absolute inset-0">
                          <img src={Girl2} alt=""/>
                      </div>
                      <div className='w-full absolute right-0 left-0 bottom-12'>
                          <p className='text-xl md:text-3xl text-white mb-5'>The Best Look</p>
                          <h1 className='text-3xl md:text-7xl font-extrabold text-white mb-5'>Anytime Anywhere</h1>
                          <p className='text-lg md:text-xl font-bold text-white mb-5'>Start with 10000MMK</p>
                          <button className='glass px-6 py-2 rounded-full text-white'>
                              View
                          </button>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide className='w-full h-full flex justify-center relative'>
                      <div className="absolute inset-0">
                          <img src={Girl3} alt=""/>
                      </div>
                      <div className='w-full absolute right-0 left-0 bottom-12'>
                          <p className='text-xl md:text-3xl text-white mb-5'>The Best Look</p>
                          <h1 className='text-3xl md:text-7xl font-extrabold text-white mb-5'>Anytime Anywhere</h1>
                          <p className='text-lg md:text-xl font-bold text-white mb-5'>Start with 10000MMK</p>
                          <button className='glass px-6 py-2 rounded-full text-white'>
                              View
                          </button>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide className='w-full h-full flex justify-center relative'>
                      <div className="absolute inset-0">
                          <img src={Girl4} alt=""/>
                      </div>
                      <div className='w-full absolute right-0 left-0 bottom-12'>
                          <p className='text-xl md:text-3xl text-white mb-5'>The Best Look</p>
                          <h1 className='text-3xl md:text-7xl font-extrabold text-white mb-5'>Anytime Anywhere</h1>
                          <p className='text-lg md:text-xl font-bold text-white mb-5'>Start with 10000MMK</p>
                          <button className='glass px-6 py-2 rounded-full text-white'>
                              View
                          </button>
                      </div>
                  </SwiperSlide>
                  <div className="slider-controler">
                      <div className="swiper-pagination"></div>
                  </div>
              </Swiper>
              <div className='absolute inset-0 flex justify-center items-center px-5'>
                    <div className='w-full flex justify-between items-center'>
                        <button className='py-14 px-2 glass rounded-xl text-white button-prev-2 relative z-30'>
                            <BiLeftArrow/>
                        </button>
                        <button className='py-14 px-2 glass rounded-xl text-white button-next-2 relative z-30'>
                            <BiRightArrow/>
                        </button>
                    </div>
              </div>
          </div>
      </section>
  )
}
export default Hero
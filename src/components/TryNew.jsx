import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import Girl from "../assets/girl.jpg";
import Girl1 from "../assets/girl2.jpg";
import Girl2 from "../assets/girl3.jpg";
import Girl3 from "../assets/girl4.jpg";
import {BiRightArrow} from "react-icons/bi";
import 'swiper/css';
import 'swiper/css/navigation';
import "./swiper2.css"
const TryNew = () => {
  return(
      <section className='container ml-auto py-5  relative'>
          <div className='w-full h-[200px]'>
              <Swiper
                  grabCursor={true}
                  loop={true}
                  slidesPerView={'auto'}
                  spaceBetween={10}
                  pagination={{ el: '.swiper-pagination', clickable: true }}
                  navigation={{
                      nextEl: '.button-next-3',
                      clickable: true,
                  }}
                  modules={[Pagination,Navigation]}
                  className="swiper_container"
              >
                  <SwiperSlide className='w-full h-full flex justify-center relative'>
                      <div className="absolute inset-0  rounded-3xl overflow-hidden">
                          <img className='sw2-img' src={Girl} alt=""/>
                      </div>
                      <div className='w-auto absolute right-12 bottom-12 flex flex-col items-center'>
                          <p className='text-3xl font-bold text-white mb-1'>Try New Flavor</p>
                          <p className='text-sm text-white mb-3'>Citrus Monster</p>
                          <button className='glass px-6 py-2 rounded-full text-white'>
                              View
                          </button>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide className='w-full h-full flex justify-center relative'>
                      <div className="absolute inset-0  rounded-3xl overflow-hidden">
                          <img className='sw2-img pl-2' src={Girl1} alt=""/>
                      </div>
                      <div className='w-auto absolute right-12 bottom-12 flex flex-col items-center'>
                          <p className='text-3xl font-bold text-white mb-1'>Try New Flavor</p>
                          <p className='text-sm text-white mb-3'>Citrus Monster</p>
                          <button className='glass px-6 py-2 rounded-full text-white'>
                              View
                          </button>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide className='w-full h-full flex justify-center relative'>
                      <div className="absolute inset-0  rounded-3xl overflow-hidden">
                          <img className='sw2-img' src={Girl2} alt=""/>
                      </div>
                      <div className='w-auto absolute right-12 bottom-12 flex flex-col items-center'>
                          <p className='text-3xl font-bold text-white mb-1'>Try New Flavor</p>
                          <p className='text-sm text-white mb-3'>Citrus Monster</p>
                          <button className='glass px-6 py-2 rounded-full text-white'>
                              View
                          </button>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide className='w-full h-full flex justify-center relative'>
                      <div className="absolute inset-0  rounded-3xl overflow-hidden">
                          <img className='sw2-img' src={Girl3} alt=""/>
                      </div>
                      <div className='w-auto absolute right-12 bottom-12 flex flex-col items-center'>
                          <p className='text-3xl font-bold text-white mb-1'>Try New Flavor</p>
                          <p className='text-sm text-white mb-3'>Citrus Monster</p>
                          <button className='glass px-6 py-2 rounded-full text-white'>
                              View
                          </button>
                      </div>
                  </SwiperSlide>
              </Swiper>
                      <button className='py-14 px-2 glass rounded text-white button-next-3 absolute right-3 top-[25%] z-30'>
                          <BiRightArrow/>
                      </button>
          </div>
      </section>
  )
}
export default TryNew
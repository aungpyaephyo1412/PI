import IMg from '../assets/ddd.png'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import {BiRightArrow} from "react-icons/bi";
import vape1 from "../assets/DreamShaper_v7_vape_item_only_no_person_0.jpg";
import {BsFillStarFill} from "react-icons/bs";
import 'swiper/css';
import 'swiper/css/navigation';
import "./swiper3.css"
const ShowCase = () => {
  return(
      <section className='w-full h-[550px] container mx-auto p-5 showcase'>
            <div className="bg-url w-full h-full rounded-3xl">
                <div className="w-full flex h-full">
                    <div className="w-[35%] flex flex-col justify-center items-center h-full">
                        <div className="w-full flex justify-center items-center">
                            <img src={IMg} className='block h-[250px]' alt="img"/>
                            <div>
                                <h1 className='text-white text-3xl font-bold'>Devices</h1>
                                <p className='text-white text-xl font-normal'>
                                    Find the best for
                                    <br/>
                                    you here!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[65%] h-full pb-9 pt-11 relative">
                        <div className='w-full h-full'>
                            <Swiper
                                grabCursor={true}
                                slidesPerView={'auto'}
                                spaceBetween={10}
                                pagination={{ el: '.swiper-pagination', clickable: true }}
                                navigation={{
                                    nextEl: '.button-next-4',
                                    clickable: true,
                                }}
                                modules={[Pagination,Navigation]}
                                className="swiper_container"
                            >
                                <SwiperSlide className='w-full h-full flex justify-center rounded-2xl overflow-hidden bg-transparent'>
                                    <div className='w-full h-full flex flex-col justify-center items-center text-white'>
                                        <img src={vape1} height={"100px"} className='sw3-img w-full  mb-3' alt="vape1"/>
                                        <h1 className='text-xl md:text-2xl font-normal'>Refreshing Mint</h1>
                                        <p className='text-lg lg:text-xl font-semibold'>30000MMK</p>
                                        <p className='text-sm lg:text-lg line-through'>30000MMK</p>
                                        <div className='flex text-yellow-500 justify-center items-center gap-x-2'>
                                            <BsFillStarFill/>
                                            600 points
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='w-full h-full flex justify-center rounded-2xl overflow-hidden bg-transparent'>
                                    <div className='w-full h-full flex flex-col justify-center items-center text-white'>
                                        <img src={vape1} height={"100px"} className='sw3-img w-full  mb-3' alt="vape1"/>
                                        <h1 className='text-xl md:text-2xl font-normal'>Refreshing Mint</h1>
                                        <p className='text-lg lg:text-xl font-semibold'>30000MMK</p>
                                        <p className='text-sm lg:text-lg line-through'>30000MMK</p>
                                        <div className='flex text-yellow-500 justify-center items-center gap-x-2'>
                                            <BsFillStarFill/>
                                            600 points
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='w-full h-full flex justify-center rounded-2xl overflow-hidden bg-transparent'>
                                    <div className='w-full h-full flex flex-col justify-center items-center text-white'>
                                        <img src={vape1} height={"100px"} className='sw3-img w-full  mb-3' alt="vape1"/>
                                        <h1 className='text-xl md:text-2xl font-normal'>Refreshing Mint</h1>
                                        <p className='text-lg lg:text-xl font-semibold'>30000MMK</p>
                                        <p className='text-sm lg:text-lg line-through'>30000MMK</p>
                                        <div className='flex text-yellow-500 justify-center items-center gap-x-2'>
                                            <BsFillStarFill/>
                                            600 points
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='w-full h-full flex justify-center rounded-2xl overflow-hidden bg-transparent'>
                                    <div className='w-full h-full flex flex-col justify-center items-center text-white'>
                                        <img src={vape1} height={"100px"} className='sw3-img w-full  mb-3' alt="vape1"/>
                                        <h1 className='text-xl md:text-2xl font-normal'>Refreshing Mint</h1>
                                        <p className='text-lg lg:text-xl font-semibold'>30000MMK</p>
                                        <p className='text-sm lg:text-lg line-through'>30000MMK</p>
                                        <div className='flex text-yellow-500 justify-center items-center gap-x-2'>
                                            <BsFillStarFill/>
                                            600 points
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='w-full h-full flex justify-center rounded-2xl overflow-hidden bg-transparent'>
                                    <div className='w-full h-full flex flex-col justify-center items-center text-white'>
                                        <img src={vape1} height={"100px"} className='sw3-img w-full  mb-3' alt="vape1"/>
                                        <h1 className='text-xl md:text-2xl font-normal'>Refreshing Mint</h1>
                                        <p className='text-lg lg:text-xl font-semibold'>30000MMK</p>
                                        <p className='text-sm lg:text-lg line-through'>30000MMK</p>
                                        <div className='flex text-yellow-500 justify-center items-center gap-x-2'>
                                            <BsFillStarFill/>
                                            600 points
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='w-full h-full flex justify-center rounded-2xl overflow-hidden bg-transparent'>
                                    <div className='w-full h-full flex flex-col justify-center items-center text-white'>
                                        <img src={vape1} height={"100px"} className='sw3-img w-full  mb-3' alt="vape1"/>
                                        <h1 className='text-xl md:text-2xl font-normal'>Refreshing Mint</h1>
                                        <p className='text-lg lg:text-xl font-semibold'>30000MMK</p>
                                        <p className='text-sm lg:text-lg line-through'>30000MMK</p>
                                        <div className='flex text-yellow-500 justify-center items-center gap-x-2'>
                                            <BsFillStarFill/>
                                            600 points
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='w-full h-full flex justify-center rounded-2xl overflow-hidden bg-transparent'>
                                    <div className='w-full h-full flex flex-col justify-center items-center text-white'>
                                        <img src={vape1} height={"100px"} className='sw3-img w-full  mb-3' alt="vape1"/>
                                        <h1 className='text-xl md:text-2xl font-normal'>Refreshing Mint</h1>
                                        <p className='text-lg lg:text-xl font-semibold'>30000MMK</p>
                                        <p className='text-sm lg:text-lg line-through'>30000MMK</p>
                                        <div className='flex text-yellow-500 justify-center items-center gap-x-2'>
                                            <BsFillStarFill/>
                                            600 points
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='w-full h-full flex justify-center rounded-2xl overflow-hidden bg-transparent'>
                                    <div className='w-full h-full flex flex-col justify-center items-center text-white'>
                                        <img src={vape1} height={"100px"} className='sw3-img w-full  mb-3' alt="vape1"/>
                                        <h1 className='text-xl md:text-2xl font-normal'>Refreshing Mint</h1>
                                        <p className='text-lg lg:text-xl font-semibold'>30000MMK</p>
                                        <p className='text-sm lg:text-lg line-through'>30000MMK</p>
                                        <div className='flex text-yellow-500 justify-center items-center gap-x-2'>
                                            <BsFillStarFill/>
                                            600 points
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <button className='py-14 px-2 glass rounded text-white button-next-4 absolute right-3 top-[25%] z-30'>
                                <BiRightArrow/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
      </section>
  )
}
export default ShowCase
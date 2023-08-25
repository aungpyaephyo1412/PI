import IMg from '../assets/dd/dd55.png'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import {BiRightArrow} from "react-icons/bi";
import vape1 from "../assets/DreamShaper_v7_vape_item_only_no_person_0.jpg";
import vape2 from "../assets/DreamShaper_v7_vape_item_only_no_person_4 (1).jpg";
import vape3 from "../assets/DreamShaper_v7_vape_item_only_no_person_4.jpg";
import vape4 from "../assets/DreamShaper_v7_vape_item_only_no_person_5.jpg";
import vape5 from "../assets/DreamShaper_v7_vape_item_only_no_person_5 (1).jpg";
import vape6 from "../assets/DreamShaper_v7_vape_item_only_no_person_6 (1).jpg";
import vape7 from "../assets/DreamShaper_v7_vape_item_only_no_person_7 (2).jpg";
import vape8 from "../assets/DreamShaper_v7_vape_item_only_no_person_7.jpg";
import {BsFillStarFill} from "react-icons/bs";
import 'swiper/css';
import 'swiper/css/navigation';
import "./swiper3.css"
const ShowCaseThree = () => {
    return(
        <section className='w-full h-auto md:h-[550px] container mx-auto py-9 px-3 showcase'>
            <div className="bg-url3 w-full h-full rounded-3xl">
                <div className="w-full flex flex-wrap h-full">
                    <div className="w-full md:w-[35%] flex flex-col justify-center items-center h-full">
                        <div className="w-full flex gap-x-3 justify-center items-center">
                            <img src={IMg} className='block h-[250px]' alt="img"/>
                            <div>
                                <h1 className='text-white text-3xl font-bold'>Disposable</h1>
                                <p className='text-white text-xl font-normal'>
                                    Easy, clean &
                                    <br/>
                                    superb flavor
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[65%] h-full pl-5 md:pl-0 pb-9 pt-11 relative">
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
                                        <h1 className='text-lg lg:text-2xl font-normal'>Refreshing Mint</h1>
                                        <p className='text-sm lg:text-xl font-semibold'>30000MMK</p>
                                        <p className='text-xs lg:text-lg line-through'>30000MMK</p>
                                        <div className='flex text-yellow-500 justify-center text-sm items-center gap-x-2'>
                                            <BsFillStarFill/>
                                            600 points
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='w-full h-full flex justify-center rounded-2xl overflow-hidden bg-transparent'>
                                    <div className='w-full h-full flex flex-col justify-center items-center text-white'>
                                        <img src={vape2} height={"100px"} className='sw3-img w-full  mb-3' alt="vape1"/>
                                        <h1 className='text-lg lg:text-2xl font-normal'>Refreshing Mint</h1>
                                        <p className='text-sm lg:text-xl font-semibold'>30000MMK</p>
                                        <p className='text-xs lg:text-lg line-through'>30000MMK</p>
                                        <div className='flex text-yellow-500 justify-center text-sm items-center gap-x-2'>
                                            <BsFillStarFill/>
                                            600 points
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='w-full h-full flex justify-center rounded-2xl overflow-hidden bg-transparent'>
                                    <div className='w-full h-full flex flex-col justify-center items-center text-white'>
                                        <img src={vape3} height={"100px"} className='sw3-img w-full  mb-3' alt="vape1"/>
                                        <h1 className='text-lg lg:text-2xl font-normal'>Refreshing Mint</h1>
                                        <p className='text-sm lg:text-xl font-semibold'>30000MMK</p>
                                        <p className='text-xs lg:text-lg line-through'>30000MMK</p>
                                        <div className='flex text-yellow-500 justify-center text-sm items-center gap-x-2'>
                                            <BsFillStarFill/>
                                            600 points
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='w-full h-full flex justify-center rounded-2xl overflow-hidden bg-transparent'>
                                    <div className='w-full h-full flex flex-col justify-center items-center text-white'>
                                        <img src={vape4} height={"100px"} className='sw3-img w-full  mb-3' alt="vape1"/>
                                        <h1 className='text-lg lg:text-2xl font-normal'>Refreshing Mint</h1>
                                        <p className='text-sm lg:text-xl font-semibold'>30000MMK</p>
                                        <p className='text-xs lg:text-lg line-through'>30000MMK</p>
                                        <div className='flex text-yellow-500 justify-center text-sm items-center gap-x-2'>
                                            <BsFillStarFill/>
                                            600 points
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='w-full h-full flex justify-center rounded-2xl overflow-hidden bg-transparent'>
                                    <div className='w-full h-full flex flex-col justify-center items-center text-white'>
                                        <img src={vape5} height={"100px"} className='sw3-img w-full  mb-3' alt="vape1"/>
                                        <h1 className='text-lg lg:text-2xl font-normal'>Refreshing Mint</h1>
                                        <p className='text-sm lg:text-xl font-semibold'>30000MMK</p>
                                        <p className='text-xs lg:text-lg line-through'>30000MMK</p>
                                        <div className='flex text-yellow-500 justify-center text-sm items-center gap-x-2'>
                                            <BsFillStarFill/>
                                            600 points
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='w-full h-full flex justify-center rounded-2xl overflow-hidden bg-transparent'>
                                    <div className='w-full h-full flex flex-col justify-center items-center text-white'>
                                        <img src={vape6} height={"100px"} className='sw3-img w-full  mb-3' alt="vape1"/>
                                        <h1 className='text-lg lg:text-2xl font-normal'>Refreshing Mint</h1>
                                        <p className='text-sm lg:text-xl font-semibold'>30000MMK</p>
                                        <p className='text-xs lg:text-lg line-through'>30000MMK</p>
                                        <div className='flex text-yellow-500 justify-center text-sm items-center gap-x-2'>
                                            <BsFillStarFill/>
                                            600 points
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='w-full h-full flex justify-center rounded-2xl overflow-hidden bg-transparent'>
                                    <div className='w-full h-full flex flex-col justify-center items-center text-white'>
                                        <img src={vape7} height={"100px"} className='sw3-img w-full  mb-3' alt="vape1"/>
                                        <h1 className='text-lg lg:text-2xl font-normal'>Refreshing Mint</h1>
                                        <p className='text-sm lg:text-xl font-semibold'>30000MMK</p>
                                        <p className='text-xs lg:text-lg line-through'>30000MMK</p>
                                        <div className='flex text-yellow-500 justify-center text-sm items-center gap-x-2'>
                                            <BsFillStarFill/>
                                            600 points
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='w-full h-full flex justify-center rounded-2xl overflow-hidden bg-transparent'>
                                    <div className='w-full h-full flex flex-col justify-center items-center text-white'>
                                        <img src={vape8} height={"100px"} className='sw3-img w-full  mb-3' alt="vape1"/>
                                        <h1 className='text-lg lg:text-2xl font-normal'>Refreshing Mint</h1>
                                        <p className='text-sm lg:text-xl font-semibold'>30000MMK</p>
                                        <p className='text-xs lg:text-lg line-through'>30000MMK</p>
                                        <div className='flex text-yellow-500 justify-center text-sm items-center gap-x-2'>
                                            <BsFillStarFill/>
                                            600 points
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <button className='py-2 md:py-14 px-2 glass rounded text-white button-next-4 absolute right-3 top-[33%] md:top-[25%] z-30'>
                                <BiRightArrow/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowCaseThree
import vape1 from "../assets/DreamShaper_v7_vape_item_only_no_person_5.jpg"
import vape2 from "../assets/DreamShaper_v7_vape_item_only_no_person_5 (1).jpg"
import vape3 from "../assets/DreamShaper_v7_vape_item_only_no_person_6.jpg"
import vape4 from "../assets/DreamShaper_v7_vape_item_only_no_person_6 (1).jpg"
import {BsArrowRightShort} from "react-icons/bs";
const Released = () => {
  return(
      <section className='w-full p-5'>
            <div className='w-full text-center mb-7'>
                <h1 className='text-4xl font-extrabold'><span className='text-yellow-500'>New</span> Released</h1>
                <p className='text-lg font-normal'>Try our latest Flavors here</p>
            </div>
          <div className="container mx-auto flex flex-col justify-center items-center">
              <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5 mb-7">
                  <div className='h-[250px] relative'>
                      <img src={vape1} className='block w-full h-full object-cover object-top rounded-3xl' alt=""/>
                      <div className='absolute bottom-2 left-0 px-5 pb-3 text-white text-[15px]'>
                          <h1>Citrus Mon</h1>
                          <p>2000 Pul</p>
                          <p>Disposable</p>
                          <p>3 Percent</p>
                          <p>30000 MMK</p>
                      </div>
                  </div>
                  <div className='h-[250px] relative'>
                      <img src={vape2} className='block w-full h-full object-cover object-top rounded-3xl' alt=""/>
                      <div className='absolute bottom-2 left-0 px-5 pb-3 text-white text-[15px]'>
                          <h1>Citrus Mon</h1>
                          <p>2000 Pul</p>
                          <p>Disposable</p>
                          <p>3 Percent</p>
                          <p>30000 MMK</p>
                      </div>
                  </div>
                  <div className='h-[250px] relative'>
                      <img src={vape3} className='block w-full h-full object-cover object-top rounded-3xl' alt=""/>
                      <div className='absolute bottom-2 left-0 px-5 pb-3 text-white text-[15px]'>
                          <h1>Citrus Mon</h1>
                          <p>2000 Pul</p>
                          <p>Disposable</p>
                          <p>3 Percent</p>
                          <p>30000 MMK</p>
                      </div>
                  </div>
                  <div className='h-[250px] relative'>
                      <img src={vape4} className='block w-full h-full object-cover object-top rounded-3xl' alt=""/>
                      <div className='absolute bottom-2 left-0 px-5 pb-3 text-white text-[15px]'>
                          <h1>Citrus Mon</h1>
                          <p>2000 Pul</p>
                          <p>Disposable</p>
                          <p>3 Percent</p>
                          <p>30000 MMK</p>
                      </div>
                  </div>
              </div>
              <button className='flex justify-center items-center px-16 py-2 glass rounded-3xl text-lg text-white'>
                  view more
                  <BsArrowRightShort/>
              </button>
          </div>
      </section>
  )
}
export default Released
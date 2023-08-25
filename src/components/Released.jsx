import vape1 from "../assets/DreamShaper_v7_vape_item_only_no_person_5.jpg"
import vape2 from "../assets/DreamShaper_v7_vape_item_only_no_person_5 (1).jpg"
import vape3 from "../assets/DreamShaper_v7_vape_item_only_no_person_6.jpg"
import vape4 from "../assets/DreamShaper_v7_vape_item_only_no_person_6 (1).jpg"
const Released = () => {
  return(
      <section className='w-full min-h-screen p-5'>
            <div className='w-full text-center'>
                <h1 className='text-4xl font-extrabold'><span className='text-yellow-500'>New</span> Released</h1>
                <p className='text-lg font-normal'>Try our latest Flavors here</p>
            </div>
          <div className="container mx-auto">
              <div className="w-full grid grid-cols-4">
                  <div className='h-[200px] relative'>
                      <img src={vape1} className='block w-full h-full object-cover object-top rounded-3xl' alt=""/>
                      <div className='absolute bottom-2 left-0 px-5 pb-3 text-white text-lg'>
                          <h1>Citrus Mon</h1>
                          <p>2000 Pul</p>
                          <p>Disposable</p>
                          <p>3 Percent</p>
                          <p>30000 MMK</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
export default Released
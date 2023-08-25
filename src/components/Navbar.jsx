import {BsSearch} from "react-icons/bs";
import {CiShoppingCart} from "react-icons/ci";
import {AiOutlineMenu} from "react-icons/ai";
import {useEffect} from "react";

const Navbar = () => {
    useEffect(() => {
        const nav = document.querySelector(".nav")
        window.addEventListener("scroll",()=>{
            if(window.scrollY>=100){
                nav.classList.add("glass")
            }else {
                nav.classList.remove("glass")
            }
        })
        return window.removeEventListener("scroll",()=>{
            console.log("hello")
        })
    }, []);
  return(
      <header className='fixed top-0 right-0 left-0 z-[10000] nav'>
          <div className='container mx-auto'>
                <div className="w-full flex justify-between items-center px-9 py-4">
                    <div className='text-xl font-extrabold text-white'>
                        PI
                    </div>
                    <div>
                        <div className="flex space-x-4 text-white">
                            <button>
                                <BsSearch className='text-lg font-normal'/>
                            </button>
                            <button>
                                <CiShoppingCart className='text-xl font-normal'/>
                            </button>
                            <button>
                                <AiOutlineMenu className='text-lg font-normal'/>
                            </button>
                        </div>
                    </div>
                </div>
          </div>
      </header>
  )
}
export default Navbar
import {MdOutlinePrivacyTip} from "react-icons/md";
import {FaArrowRotateLeft, FaPhone} from "react-icons/fa6";
import KBZ from '../assets/icons/blue-L.jpeg'
import Wave from '../assets/icons/520px-WaveMoney.png'
import Facebook from '../assets/icons/icons8-facebook-48.png'
import Instagram from '../assets/icons/icons8-instagram-48.png'
import Twitter from '../assets/icons/icons8-twitter-48.png'
import Viber from '../assets/icons/icons8-viber-48.png'
import Telegram from '../assets/icons/icons8-telegram-48.png'
import {HiOutlineLocationMarker} from "react-icons/hi";
import QR from '../assets/icons/qr-code.png'
const Footer = () => {
    return(
        <footer>
            <div className="container mx-auto p-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start">
                <div className="flex flex-col justify-center items-start">
                        <h1 className='text-2xl font-semibold mb-7'>
                            Customer Services
                        </h1>
                        <a href="#" className='flex justify-center items-center gap-x-1 text-[17px] mb-2'>
                            <MdOutlinePrivacyTip className='text-xl font-bold'/>
                            Terms&Privacy Policy
                        </a>
                    <a href="#" className='flex justify-center items-center gap-x-1 text-[17px]'>
                        <FaArrowRotateLeft className='text-xl font-bold'/>
                        Return Policy
                    </a>
                    <h1 className='text-2xl font-semibold mt-7'>
                        Payments
                    </h1>
                    <div className='flex justify-center items-center gap-x-4'>
                        <a href="#">
                            <img src={KBZ} className='w-[50px] object-cover' alt=""/>
                        </a>
                        <a href="#">
                            <img src={Wave} className='h-[90px] object-cover' alt=""/>
                        </a>
                    </div>

                </div>
                <div className="flex flex-col justify-center items-start">

                    <h1 className='text-2xl font-semibold mb-7'>
                        Languages
                    </h1>
                    <button className='flex justify-center items-center gap-x-1 text-[17px] mb-2'>
                        <input type='radio'  className='cursor-pointer'/>
                        Myanmar (Unicode)
                    </button>
                    <button className='flex justify-center items-center gap-x-1 text-[17px] mb-2'>
                        <input type='radio' checked className='cursor-pointer'/>
                        Myanmar (Zawgyi)
                    </button>
                    <button className='flex justify-center items-center gap-x-1 text-[17px]'>
                        <input type='radio' className='cursor-pointer'/>
                        English
                    </button>
                    <h1 className='text-2xl font-semibold my-7'>
                        Follow us on
                    </h1>
                    <div className='flex justify-center items-center gap-x-4'>
                        <a href="#">
                            <img src={Facebook} className='w-[30px] object-cover' alt=""/>
                        </a>
                        <a href="#">
                            <img src={Instagram} className='w-[30px] object-cover' alt=""/>
                        </a>
                        <a href="#">
                            <img src={Viber} className='w-[30px] object-cover' alt=""/>
                        </a>
                        <a href="#">
                            <img src={Twitter} className='w-[30px] object-cover' alt=""/>
                        </a>
                        <a href="#">
                            <img src={Telegram} className='w-[30px] object-cover' alt=""/>
                        </a>
                    </div>

                </div>
                <div className="flex flex-col justify-center items-start">

                    <h1 className='text-2xl font-semibold mb-7'>
                        Contact us
                    </h1>
                    <a href="#" className='flex justify-start items-start gap-x-1 text-[17px] mb-2'>
                        <HiOutlineLocationMarker className='text-6xl mb-3'/>
                        <span className='text-sm'>
                            Lay Daunt Kan Main Road, Cashmere Stop, Near Zawanna, Thingangyun Township, Yangon.
                        </span>
                    </a>
                    <a href="#" className='flex justify-center items-center gap-x-1 text-[17px]'>
                        <FaPhone/>
                        09458489548
                    </a>
                </div>
                <div className="flex flex-col justify-center items-start">

                    <h1 className='text-2xl font-semibold mb-7'>
                        Download
                    </h1>
                    <a href="#" className='flex justify-center items-center gap-x-1 text-[17px]'>
                        <img src={QR} className='h-[100px]' alt=""/>
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer
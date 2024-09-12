import { PiTelegramLogo } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
const Footer = ()=>{
    return(
        <>
            <div className="flex flex-col justify-between w-full h-auto py-10 font-sans2">
                <div className="flex sm:flex-col sm:items-center px-20 sm:px-10 bg-[#09090B] justify-between items-center w-full">
                    <div className="flex flex-col font text-[#fff] sm:text-center sm:w-fit text-xl font-normal">
                        <p>
                            Join our social media
                        </p>
                        <span className="flex sm:flex-col">
                            community to stay &nbsp;<p className="text-[#E99A4E]">updated</p>
                        </span>
                    </div>
                    <div className="flex flex-col text-[#fff] sm:w-full">
                        <div className="flex flex-col sm:mt-3 sm:hidden">
                            <p className="text-right sm:text-center">
                                Stay updated with the latest 
                            </p><br />
                            <p  className="text-right sm:text-center sm:mt-[-3]">from Opulon</p>
                        </div>
                        <div className="hidden sm:flex flex-col sm:mt-3">
                            <p className="text-right sm:text-center">
                                Stay updated with the latest from Opulon
                            </p>
                        </div>
                        <div className="flex sm:flex-col sm:justify-center my-5">
                            <input
                                type="text" 
                                placeholder="enter email address" 
                                className="w-[345px] sm:w-full h-[55px] text-[#555555] border-2 border-[#555555] bg-[#09090B] rounded-md p-2 focus:outline-none"
                             />
                            <button 
                                type="submit" className="w-[113px] sm:w-full h-[55px] bg-[#670D65] rounded-full ml-2 sm:mt-1">
                                Subscribe  
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex sm:flex-col items-center justify-between px-20 font-normal sm:text-center">
                    <p className="text-[#555555]">&copy; 2024 Opulon. All Right Reserved</p>
                    <div className="flex sm:mt-2">
                        <div className="flex items-center justify-center border-2 border-[#555555] rounded-md w-[52px] h-[52px]">
                            <p className="text-[#fff]"><PiTelegramLogo /></p>
                        </div>
                        <div className="flex items-center justify-center border-2 border-[#555555] mx-2 rounded-md w-[52px] h-[52px]">
                            <p className="text-[#fff]"><BsTwitterX /></p>
                        </div>
                        <div className="flex items-center justify-center border-2 border-[#555555] rounded-md w-[52px] h-[52px]">
                            <p className="text-[#fff]"><CiLinkedin /></p>
                        </div>
                        <div className="flex items-center justify-center border-2 border-[#555555] ml-2 rounded-md w-[52px] h-[52px]">
                            <p className="text-[#fff]"><FaDiscord /></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;
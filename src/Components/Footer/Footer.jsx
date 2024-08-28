import { PiTelegramLogo } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
const Footer = ()=>{
    return(
        <>
            <div className="flex flex-col justify-between w-full h-auto py-10 font-sans2">
                <div className="flex px-20 bg-[#09090B] justify-between items-center w-full">
                    <div className="flex flex-col font text-[#fff] text-xl font-normal">
                        <p>
                            Join our social media community to stay updated
                        </p>
                        <span className="flex">
                            community to stay &nbsp;<p className="text-[#E99A4E]">updated</p>
                        </span>
                    </div>
                    <div className="flex flex-col text-[#fff]">
                        <div className="flex flex-col">
                            <p className="text-right">
                                Stay updated with the latest 
                            </p><br />
                            <p  className="text-right">from Opulon</p>
                        </div>
                        <div className="flex my-5">
                            <input 
                                type="text" 
                                placeholder="enter email address" 
                                className="w-[345px] h-[55px] text-[#555555] border-2 border-[#555555] bg-[#09090B] rounded-md p-2 focus:outline-none"
                             />
                            <button 
                                type="submit" className="w-[113px] h-[55px] bg-[#670D65] rounded-full ml-2">
                                Subscribe  
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between px-20 font-normal">
                    <p className="text-[#555555]">&copy; 2024 Opulon. All Right Reserved</p>
                    <div className="flex">
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
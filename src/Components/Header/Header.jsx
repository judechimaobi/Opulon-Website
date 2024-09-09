/* eslint-disable no-unused-vars */
import { useState } from "react";
import * as images from "../../images"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
const Header = ()=>{
    const [ nav, setNav ] = useState(false);
    const handleNav = ()=>{
        setNav(!nav)
    }
    return(
        <>
            <div className="flex justify-between sm:justify-between items-center w-full bg-[#09090B] py-5 px-20 sm:px-10">
                <img src={images.opulon} alt="logo" />
                <div className="flex w-auto items-center  text-sm text-[#fff] sm:hidden md:hidden">
                    <p>White paper</p>
                    <p className="flex justify-center font-sans2   ml-10 rounded-full border-2 border-[#702A90] p-5">Join the Adventure</p>
                </div>
                <div className="hidden sm:flex md:flex text-[#fff] text-2xl cursor-pointer">
                    {
                        nav ? <p onClick={handleNav}><FaTimes /></p> :  <p onClick={handleNav}><GiHamburgerMenu /></p>
                    }
                </div>
                {
                nav && (
                <div className="fixed  top-20 left-0 right-0">
                    {/* <div className="flex items-center border-2 border-red-500">
                        <img src={images.opulon} alt="logo" />
                        <div className="hidden sm:flex text-[#fff] text-2xl cursor-pointer">
                            {
                                nav ? <p onClick={handleNav}><FaTimes /></p> :  <p onClick={handleNav}><GiHamburgerMenu /></p>
                            }
                        </div>
                    </div> */}
                    <div className="flex flex-col items-center w-auto text-sm text-[#fff] bg-[#09090B]">
                        <p className="text-2xl">White paper</p>
                        <p className="flex justify-center font-sans2 mt-10 rounded-full border-2 border-[#702A90] p-5">Join the Adventure</p>
                    </div>
                </div>
                
                )
            }

            </div>
            
        </>
    )
}
export default Header;
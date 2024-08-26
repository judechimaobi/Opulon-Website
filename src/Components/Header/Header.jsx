import * as images from "../../images"
const Header = ()=>{
    return(
        <>
            <div className="flex justify-between items-center w-full bg-[#09090B] p-5">
                <img src={images.opulon} alt="logo" />
                <div className="flex w-auto items-center  text-sm text-[#fff]">
                    <p>White paper</p>
                    <p className="flex justify-center  w-[200px] ml-10 rounded-full border-2 border-[#702A90] p-5">Join the Adventure</p>
                </div>
            </div>
        </>
    )
}
export default Header;
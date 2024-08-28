import { IoPlayCircleOutline } from "react-icons/io5";
import * as images from "../../images"
const Home = ()=>{
    return(
        <>
            <div className="flex flex-col px-20">
                {/* banner start */}
                <div className="flex items-center">
                    <div className="flex flex-col">
                        <p className="font-sans1 text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#702A90] w-[650px] font-normal text-5xl">
                            Welcome to Opulon:
                            An Immersive Virtual
                            World Built on Solana
                        </p>
                        <p className="mt-3 mb-8 font-sans2 text-[#FB4C00] text-lg w-[550px]">
                            Trade, Play, and Connect in a Seamless Crypto Ecosystem
                        </p>
                        <div className="flex font-sans2 text-[#fff] w-[500px] items-center">
                            <p className="flex justify-center  font-sans2 bg-[#670D65] rounded-full p-5">
                                Join the Adventure
                            </p>
                            <p className="flex ml-3"><IoPlayCircleOutline />&nbsp;see Demo</p>
                        </div>
                    </div>
                    <div className="bg-[url('/src/assets/output.png')] w-[500px] h-[703px] bg-center bg-cover">
                        
                    </div>
                </div>
                {/* banner ends */}
                {/* what is opulon start */}
                <div className="flex justify-between my-10">
                    <div className="flex w-1/2">
                        <img src={images.Frame55} />
                        <div className="flex items-center flex-col ml-5">
                            <img src={images.Frame56} />
                            <img className="mt-5" src={images.Frame57} />
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <p className="font-sans1 text-transparent bg-clip-text bg-gradient-to-r from-[#E99A4E] to-[#FFFFFF] w-[650px] font-normal text-2xl">
                            What is Opulon?
                        </p>
                        <p className="text-base font-sans2 text-[#fff] w-[600px] mt-2 mb-9">
                            Opulon is a virtual crypto world built on the Solana blockchain, designed to 
                            bring blockchain activities like trading, gaming, and social interaction into 
                            a unified and immersive environment.
                        </p>
                        <div className="flex flex-col">
                            <p className="mb-4 font-sans1 text-transparent bg-clip-text bg-gradient-to-r from-[#E99A4E] to-[#FFFFFF] w-[650px] font-normal text-2xl">
                                Key Benefits
                            </p>
                            <div className="flex font-sans2 text-[#fff]">
                                <p className="flex justify-center text-center font-sans2 rounded-md border-2 border-[#702A90] p-5">
                                    Seamless integration of blockchain activities
                                </p>
                                <p className="flex justify-center mx-5 text-center font-sans2 rounded-md border-2 border-[#702A90] p-5">
                                    Immersive, interactive virtual world
                                </p>
                                <p className="flex justify-center text-center font-sans2 rounded-md border-2 border-[#702A90] p-5">
                                    Secure and fast transactions with Solana
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* what is opulon ends */}
            </div>
        </>
    )
}
export default Home;
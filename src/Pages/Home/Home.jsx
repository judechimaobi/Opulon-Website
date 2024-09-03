/* eslint-disable react/no-unescaped-entities */
import { IoPlayCircleOutline } from "react-icons/io5";
import * as images from "../../images";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const team = [
    {
        img: images.ude,
        name: "Jude Chimaobi",
        position: "Project Founder"
    },  
    {
        img: images.chi,
        name: "Jude Chimaobi",
        position: "Project Founder"
    }, 
    {
        img: images.ude,
        name: "Jude Chimaobi",
        position: "Project Founder"
    }, 
    {
        img: images.ude,
        name: "Jude Chimaobi",
        position: "Project Founder"
    }, 
    {
        img: images.chi,
        name: "Jude Chimaobi",
        position: "Project Founder"
    }, 
    {
        img: images.ude,
        name: "Jude Chimaobi",
        position: "Project Founder"
    },   
    
]
const features = [
    {
        img: images.arcticons,
        title: "Virtual Environment",
        description: "Explore a fully interactive 3D world where you can trade, game, and connect with others in real-time."
    },
    {
        img: images.hugeicons,
        title: "Blockchain Activities",
        description: "Engage in trading, staking, and NFTs with ease. All your blockchain activities, unified in one space."
    },
    {
        img: images.simpleicons,
        title: "Play-to-Earn",
        description: "Earn real value through games and quests in Opulon. Your virtual achievements have tangible rewards."
    },
    {
        img: images.hugeicons,
        title: "User-Friendly Interface",
        description: "Opulon is designed with a focus on user experience, making it easy for users of all levels to navigate and interact with the platform."
    },
    {
        img: images.mdi_security,
        title: "Security",
        description: "Built on Solana, Opulon ensures your transactions are fast, secure, and cost-effective."
    },
]
const Home = ()=>{
    return(
        <>
            <div className="flex flex-col">
                {/* banner start */}
                <div className="flex items-center justify-between px-20">
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
                <div className="flex justify-between my-16 px-20">
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
                {/* why solana start */}
                <div className="flex items-center justify-center bg-[url('/src/assets/Vector1.png')] h-[584px] bg-center bg-contain bg-no-repeat">
                    <div className="flex justify-between items-center w-3/4">
                        <div className="flex flex-col">
                            <p className="text-xl font-sans1 text-[#fff]">Why Solana blockchain?</p>
                            <p className="text-lg text-[#FB4C00] my-5">Optimal Performance</p>
                            <p className="text-sm text-[#fff] w-[392px]">
                                Solana's lightning-fast transaction times (400ms) and high throughput (65,000 TPS) 
                                enable a seamless user experience, making it ideal for a demanding application like 
                                Opulon.
                            </p>
                        </div>
                        <img src={images.Group12}  />
                    </div>
                </div>
                {/* why solana ends */}
                {/* features start */}
                <div className="flex justify-center flex-col px-20">
                    <p className="flex justify-center w-[124px] text-center text-[#fff] font-sans2 rounded-md border-2 border-[#702A90] p-5">
                        opulon
                    </p>
                    <p className="font-sans1 my-5 text-transparent bg-clip-text bg-gradient-to-r from-[#E99A4E] to-[#FFFFFF] w-[650px] font-normal text-2xl">
                        Key Features of opulon
                    </p>
                    <div className="flex flex-wrap h-auto  border-2 border-red-500 flex-wrap mt-5">
                        {
                            features.map((data, i)=>(
                                <>
                                    <div className={ (i === 1 || i === 4) ? "mx-20 mb-5 flex flex-col text-[#fff] font-sans1 w-[300px]" : " mb-5 flex flex-col text-[#fff] font-sans1 w-[300px]"}>
                                        <img src={data.img} className="w-[24px] h-[24px]" />
                                        <p className="text-base my-7">{data.title}</p>
                                        <p className="text-sm">
                                            {data.description}
                                        </p>
                                    </div>
                                </>
                                
                            ))
                        }
                    </div>
                </div>
                {/* features ends */}
                {/* create start */}
                <div className="flex w-full h-[400px] bg-center bg-cover bg-no-repeat bg-[url('/src/assets/create.jpeg')] my-10">
                    <div className="flex justify-center items-center w-full h-full bg-gradient-to-r from-[#E99A4E] to-[#E99A4E] opacity-80">
                        <div className="flex flex-col w-[310px]">
                            <p className="text-xl font-sans1 text-[#fff]">Create, Customize and Own</p>
                            <p className="text-sm text-[#fff]">You can create, own and customize your avatars, homes, and other virtual assets.</p>
                        </div>
                        <img src={images.Frame46} />
                        <img src={images.Frame47} className="mx-6" />
                        <img src={images.Frame48} />
                    </div>
                </div>
                {/* create end */}
                {/* how it works start */}
                <div className="bg-[url('/src/assets/works.png')] w-full h-[915px] bg-no-repeat bg-center bg-contain"></div>
                {/* how it works end */}
                {/* case start */}
                <div className="flex flex-col justify-center items-center bg-[url('/src/assets/case.jpeg')] w-full h-[500px] bg-center bg-no-repeat bg-cover">
                    <p className="w-[200px] h-[40px] font-sans1 text-transparent bg-clip-text bg-gradient-to-r from-[#E99A4E] to-[#FFFFFF] font-normal text-2xl">
                        Use Cases
                    </p>
                   <div className="flex justify-between">
                        <div className="flex justify-between items-end  bg-gradient-to-r from-[#E99A4E] to-[#000] w-[500px] h-[150px] rounded-md">
                            <div className="flex flex-col w-[243px] p-4">
                                <p className="font-sans1 text-sm">Community Building</p>
                                <p className="font-sans2 text-[#242424] text-xs">Host meetings, events, and more in a virtual space where every user is real.</p>
                            </div>
                            <img src={images.community} className="h-full" />
                        </div>
                        <div className="flex justify-between ml-3 items-end  bg-gradient-to-r from-[#FFFFFF] to-[#999999] w-[400px] h-[150px] rounded-md">
                            <div className="flex flex-col w-[243px] p-4">
                                <p className="font-sans1 text-sm">Play-to-Earn Games</p>
                                <p className="font-sans2 text-[#242424] text-xs">
                                    Participate in competitive quests where you can earn SOL and other rewards.
                                </p>
                            </div>
                            <img src={images.play} className="h-full" />
                        </div>
                    </div>
                    <div className="flex justify-between mt-3">    
                        <div className="flex justify-between  items-end  bg-gradient-to-r from-[#FFFFFF] to-[#999999] w-[400px] h-[150px] rounded-md">
                            <div className="flex flex-col w-[243px] p-4">
                                <p className="font-sans1 text-sm">Crypto Real Estate</p>
                                <p className="font-sans2 text-[#242424] text-xs">
                                    Buy and sell virtual properties within Opulon—buildings, meeting rooms, and more.
                                </p>
                            </div>
                            <img src={images.crypto} className="h-full" />
                        </div>
                        <div className="flex justify-between items-end ml-3  bg-gradient-to-r from-[#0073FF] to-transparent w-[500px] h-[150px] rounded-md">
                            <div className="flex flex-col w-[243px] p-4">
                                <p className="font-sans1 text-sm">NFT Marketplace</p>
                                <p className="font-sans2 text-[#242424] text-xs">
                                    Trade unique avatars, accessories, and other digital assets within our NFT marketplace.
                                </p>
                            </div>
                            <img src={images.nft} className="h-full" />
                        </div>
                        
                    </div> 
                </div>
                {/* case end */}
                {/* team start */}
                <div className="flex w-full h-auto bg-[url('/src/assets/team.jpeg')] bg-center bg-cover bg-no-repeat">
                    <div className="flex flex-col  py-10 items-center w-full h-full bg-gradient-to-r from-[#000] to-[#000] opacity-70">
                        <p className="w-[233px] h-[40px] font-sans1 text-transparent bg-clip-text bg-gradient-to-r from-[#E99A4E] to-[#FFFFFF] font-normal text-2xl">
                            Meet the Team
                        </p>
                        <p className="text-[#FFFFFF] font-sans2 ">
                            Our team brings together experts in blockchain, virtual reality, 
                        </p>
                        <p className="text-[#FFFFFF] font-sans2 ">
                            game design, and community building."A
                        </p>
                        <div className="grid grid-cols-3 gap-4 mt-16">
                            {
                                team.map(data=>(
                                    <>
                                        <div className="flex flex-col">
                                            <img src={data.img} />
                                            <div className="flex justify-between items-center my-3">
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-sans2 text-[#fff]">{data.name}</p>
                                                    <p className="text-xs text-[#FB4C00] font-sans2">{data.position}</p>
                                                </div>
                                                <div className="flex">
                                                    <p className="text-[#fff] text-2xl"><FaXTwitter /></p>
                                                    <p className="text-[#fff] text-2xl ml-3"><FaLinkedin /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* team end */}

            </div>
        </>
    )
}
export default Home;
/* eslint-disable react/no-unescaped-entities */
import { IoPlayCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as images from "../../images";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const team = [
    {
        img: images.ude,
        name: "Jude Chimaobi",
        position: "Project Founder",
        linkedin: "https://linkedin.com/in/bellohadi",
        twitter: "https://twitter.com/alliendeveloper"
    },  
    {
        img: images.chi,
        name: "Chineye",
        position: "Product/project manager",
        linkedin: "https://www.linkedin.com/in/chinenye-ibegbunam",
        twitter: "https://x.com/chinenyeibeh_?t=pNhC5gS40kPVVIl9GXvptA&s=09"
    }, 
    {
        img: images.bello,
        name: "Bello",
        position: "Web Dev",
        linkedin: "https://linkedin.com/in/bellohadi",
        twitter: "https://twitter.com/alliendeveloper"
    }, 
    {
        img: images.Joshua,
        name: "Joshua",
        position: "Solana Dev",
        linkedin: "https://linkedin.com/in/bellohadi",
        twitter: "https://twitter.com/alliendeveloper"
    }, 
    {
        img: images.dan,
        name: "Dan",
        position: "Social Media Manager",
        linkedin: "https://linkedin.com/in/bellohadi",
        twitter: "https://twitter.com/alliendeveloper"
    }, 
    {
        img: images.chuks,
        name: "Chuks",
        position: "UI/UX Designer",
        linkedin: "https://www.linkedin.com/in/eze-chukwuemeka-ebubechukwu/",
        twitter: "https://x.com/iam_chuksE"
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
const How = [
    {
        id: "01",
        work: "Onboarding",
        description: "Connect your Solana wallet to start your journey in Opulon. Your wallet address becomes your identity in this new world."
    },
    {
        id: "02",
        work: "Explore & Interact",
        description: "Navigate through various zones dedicated to different activities—trade NFTs, participate in gaming quests, or socialize with others."
    },
    {
        id: "03",
        work: "Transaction",
        description: "Execute transactions seamlessly with minimal fees and enjoy high-speed performance."
    },
]
const Faq = [
    {
        title: "What is Opulon?",
        description: "Opulon is an immersive virtual world built on the Solana blockchain. It's a platform where users can engage in various blockchain activities, from trading and staking to gaming and social interaction."
    },
    {
        title: "How do I access Opulon?",
        description: "You can access Opulon by connecting your Solana wallet to the platform."
    },
    {
        title: "Is there a cost to use Opulon?",
        description: "While there may be transaction fees associated with certain activities, Opulon itself is free to use."
    },
    {
        title: "Can I earn real money in Opulon?",
        description: "Yes, Opulon offers various opportunities for users to earn points that can be converted to real cryptocurrency, through quests and community activities."
    },
    {
        title: "How does Opulon handle security and scalability?",
        description: "Opulon leverages the scalability & security of the Solana blockchain to ensure a smooth user experience and safety of user data and transactions, even as the platform grows."
    },
    {
        title: "How does Opulon reward users' participation on the platform?",
        description: "Opulon doesn't have a live token at the moment for incentivizing users. Participation is rewarded with OP points which can later be converted to real cryptocurrency based on the terms of completed quests."
    },

]
const Home = ()=>{
    return(
        <>
            <div className="flex flex-col">
                {/* banner start */}
                <div className="flex items-center justify-between px-20 sm:px-3 sm:w-fit sm:w-full">
                    <div className="flex flex-col sm:w-full w-1/2">
                        <p className="font-sans1 text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#702A90] w-[650px] md:w-fit sm:w-[300px] font-normal text-5xl md:text-3xl sm:text-lg">
                            Welcome to Opulon:
                            An Immersive Virtual
                            World Built on Solana
                        </p>
                        <p className="mt-3 mb-8 font-sans2 text-[#E99A4E] text-lg w-[550px] sm:w-fit md:w-fit">
                            Trade, Play, and Connect in a Seamless Crypto Ecosystem
                        </p>
                        <div className="flex md:flex-col font-sans2 text-[#fff] sm:text-sm w-[500px] sm:w-fit md:w-full items-center ">
                            <motion.p whileHover={{ y: -10 }} whileTap={{ scale: 1.1 }} className="cursor-pointer">
                                <Link to="/" className="flex justify-center h-full font-sans2 bg-gradient-to-r from-[#EA00E3] to-[#E99A4E] rounded-full p-5 sm:p-3" >
                                    Join the Adventure
                                </Link>
                            </motion.p>
                            
                            <p className="flex sm:items-center md:mt-3 ml-3"><IoPlayCircleOutline />&nbsp;see Demo</p>
                        </div>
                    </div>
                    <div className="w-1/2 bg-[url('/src/assets/output.png')] w-[500px] h-[703px] md:h-[500px] bg-center bg-cover sm:hidden md:block">
                        
                    </div>
                </div>
                {/* banner ends */}
                {/* what is opulon start */}
                <div className="flex justify-between sm:flex-col my-16 px-20 sm:px-5">
                    <div className="flex w-1/2 sm:w-full">
                        <img src={images.Frame55} />
                        <div className="flex items-center flex-col ml-5">
                            <img src={images.Frame56} />
                            <img className="mt-5" src={images.Frame57} />
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 sm:w-full sm:mt-5 md:pl-4">
                        <p className="font-sans1 text-transparent bg-clip-text bg-gradient-to-r from-[#E99A4E] to-[#FFFFFF] w-[650px] font-normal text-2xl">
                            What is Opulon?
                        </p>
                        <p className="text-base font-sans2 text-[#fff] w-[600px] sm:w-full md:w-full mt-2 mb-9">
                            Opulon is a virtual crypto world built on the Solana blockchain, designed to 
                            bring blockchain activities like trading, gaming, and social interaction into 
                            a unified and immersive environment.
                        </p>
                        <div className="flex flex-col sm:w-full md:w-full">
                            <p className="mb-4 font-sans1 text-transparent bg-clip-text bg-gradient-to-r from-[#E99A4E] to-[#FFFFFF] w-[650px] font-normal text-2xl">
                                Key Benefits
                            </p>
                            <div className="flex sm:flex-col md:flex-wrap font-sans2 text-[#fff]">
                                <motion.p w  className="flex sm:w-fit justify-center text-center font-sans2 rounded-md border-2 border-[#702A90] p-5">
                                    Seamless integration of blockchain activities
                                </motion.p>
                                <motion.p w   className="flex sm:w-fit justify-center mx-5 sm:mx-0 sm:my-3 md:my-3 text-center font-sans2 rounded-md border-2 border-[#702A90] p-5">
                                    Immersive, interactive virtual world
                                </motion.p>
                                <motion.p w   className="flex sm:w-fit justify-center text-center font-sans2 rounded-md border-2 border-[#702A90] p-5">
                                    Secure and fast transactions with Solana
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* what is opulon ends */}
                {/* why solana start */}
                <div className="flex items-center justify-center bg-[url('/src/assets/Vector1.png')] sm:bg-[url('/src/assets/Vector2.png')]  h-[584px] sm:h-full sm:w-full bg-center bg-contain sm:bg-cover bg-no-repeat py-10">
                    <div className="flex sm:flex-col justify-between items-center w-3/4 md:w-fit">
                        <div className="flex flex-col sm:w-full">
                            <p className="text-xl font-sans1 text-[#fff]">Why Solana blockchain?</p>
                            <p className="text-lg text-[#E99A4E] mt-4 mb-2">Optimal Performance</p>
                            <p className="text-sm text-[#fff] w-[392px] sm:w-full sm:mb-5">
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
                <div className="flex justify-center flex-col px-20 sm:px-5 sm:mt-5">
                    <p className="flex justify-center w-[124px] text-center text-[#fff] font-sans2 rounded-md border-2 border-[#702A90] p-2">
                        opulon
                    </p>
                    <p className="font-sans1 my-5 text-transparent bg-clip-text bg-gradient-to-r from-[#E99A4E] to-[#FFFFFF] w-[650px] sm:w-fit font-normal text-2xl">
                        Key Features of opulon
                    </p>
                    <div className="flex flex-wrap h-auto w-full flex-wrap mt-5">
                        {
                            features.map((data, i)=>(
                                <>
                                    <div className={ (i === 1 || i === 4) ? "mx-20 sm:mx-0 md:mx-0 mb-5 flex flex-col  font-sans1 w-[300px]" : " mb-5 flex flex-col text-[#fff] font-sans1 w-[300px]"}>
                                        <img src={data.img} className="w-[24px] h-[24px]" />
                                        <p className="text-base mt-5 mb-2 text-[#E99A4E] ">{data.title}</p>
                                        <p className="text-sm w-full text-[#fff]">
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
                <div className="flex  w-full h-[400px] sm:h-auto bg-center bg-cover bg-no-repeat bg-[url('/src/assets/create.jpeg')] my-10">
                    <div className="flex sm:flex-col justify-center items-center w-full h-full bg-gradient-to-r from-[#E99A4E] to-[#E99A4E] sm:py-10 opacity-80">
                        <div className="flex flex-col w-[310px] sm:w-full sm:px-3">
                            <p className="text-xl font-sans1 text-[#fff]">Create, Customize and Own</p>
                            <p className="text-sm sm:text-xl text-[#fff]">You can create, own and customize your avatars, homes, and other virtual assets.</p>
                        </div>
                        <img src={images.Frame46} className="sm:hidden " />
                        <img src={images.Frame461} className="sm:block md:hidden hidden pt-5" />
                        <img src={images.Frame47} className="mx-6 sm:hidden" />
                        <img src={images.Frame471} className="sm:block my-6 md:hidden hidden" />
                        <img src={images.Frame48} className="sm:hidden"/>
                        <img src={images.Frame481} className="sm:block md:hidden hidden" />
                    </div>
                </div>
                {/* create end */}
                {/* how it works start */}
                <div className="bg-[url('/src/assets/works.png')]  w-full h-[915px] bg-no-repeat bg-center bg-contain sm:hidden"></div>
                <div className="sm:flex justify-center flex-col px-20 sm:px-5 sm:mt-5 my-10 hidden">
                    <p className="font-sans1 my-5 text-transparent bg-clip-text bg-gradient-to-r from-[#E99A4E] to-[#FFFFFF] w-[650px] sm:w-fit font-normal text-2xl">
                        How It Works
                    </p>
                    {
                        How.map(data=>(
                            <>
                                <div className="flex flex-col my-5">
                                    <div className="flex font-sans1">
                                        <p className="text-[#515151] text-lg">{data.id}</p>
                                        <p className="text-[#E99A4E] text-lg ml-2">{data.work}</p>
                                    </div>
                                    <p className="font-sans2 text-sm text-[#fff]">
                                        {data.description}
                                    </p>
                                </div>
                            </>
                        ))
                    }
                </div>
                {/* how it works end */}
                {/* case start */}
                <div className="flex flex-col justify-center sm:px-5 items-center bg-[url('/src/assets/case.jpeg')] w-full md:w-fit h-[500px] sm:h-auto bg-center bg-no-repeat bg-cover py-10">
                    <p className="w-[200px] h-[40px] font-sans1 text-transparent bg-clip-text bg-gradient-to-r from-[#E99A4E] to-[#FFFFFF] font-normal text-2xl">
                        Use Cases
                    </p>
                   <div className="flex sm:flex-col justify-between">
                        <div className="flex justify-between items-end bg-gradient-to-r from-[#E99A4E] to-[#000] w-[500px] sm:w-[361px] md:w-fit  h-[150px]  rounded-md">
                            <div className="flex flex-col w-1/2 p-4">
                                <p className="font-sans1 text-sm">Community Building</p>
                                <p className="font-sans2 text-[#242424] text-xs">Host meetings, events, and more in a virtual space where every user is real.</p>
                            </div>
                            <img src={images.community} className="h-full border-5 border-green-500 w-1/2" />
                        </div>
                        <div className="flex justify-between ml-3 sm:ml-0 sm:mt-3 items-end  bg-gradient-to-r from-[#FFFFFF] to-[#999999] w-[400px] sm:w-[361px] md:w-fit h-[150px]  rounded-md">
                            <div className="flex flex-col w-1/2 p-4">
                                <p className="font-sans1 text-sm">Play-to-Earn Games</p>
                                <p className="font-sans2 text-[#242424] text-xs">
                                    Participate in competitive quests where you can earn SOL and other rewards.
                                </p>
                            </div>
                            <img src={images.play} className="h-full w-1/2" />
                        </div>
                    </div>
                    <div className="flex sm:flex-col justify-between mt-3">    
                        <div className="flex justify-between  items-end  bg-gradient-to-r from-[#FFFFFF] to-[#999999] w-[400px] sm:w-[361px] md:w-fit  h-[150px]  rounded-md">
                            <div className="flex flex-col w-1/2 p-4">
                                <p className="font-sans1 text-sm">Crypto Real Estate</p>
                                <p className="font-sans2 text-[#242424] text-xs">
                                    Buy and sell virtual properties within Opulon—buildings, meeting rooms, and more.
                                </p>
                            </div>
                            <img src={images.crypto} className="h-full w-1/2" />
                        </div>
                        <div className="flex justify-between items-end ml-3 sm:ml-0 sm:mt-3  bg-gradient-to-r from-[#0073FF] to-transparent w-[500px] sm:w-[361px] h-[150px] sm:h-auto md:w-fit rounded-md">
                            <div className="flex flex-col w-1/2 sm:w-[177px] p-4 ">
                                <p className="font-sans1 text-sm">NFT Marketplace</p>
                                <p className="font-sans2 text-[#242424]  text-xs">
                                    Trade unique avatars, accessories, and other digital assets within our NFT marketplace.
                                </p>
                            </div>
                            <img src={images.nft} className="h-full w-1/2" />
                        </div>
                        
                    </div> 
                </div>
                {/* case end */}
                {/* team start */}
                <div className="flex w-full h-auto bg-[url('/src/assets/team.jpeg')] bg-center bg-cover bg-no-repeat relative">
                    <div className="flex flex-col  py-10 items-center w-full h-full bg-gradient-to-r from-[#000] to-[#000] opacity-97">
                        <p className="w-[233px] h-[40px] font-sans1 text-transparent bg-clip-text bg-gradient-to-r from-[#E99A4E] to-[#FFFFFF] font-normal text-2xl">
                            Meet the Team
                        </p>
                        <p className="text-[#FFFFFF] sm:text-center font-sans2 ">
                            Our team brings together experts in blockchain, virtual reality, 
                        </p>
                        <p className="text-[#FFFFFF] sm:text-center font-sans2 ">
                            game design, and community building."A
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-16 bg-[#000] -index">
                            {
                                team.map(data=>(
                                    <>
                                        <motion.div whileHover={{ y: -20 }} className="flex flex-col cursor-pointer">
                                            <img src={data.img} className="w-[310px] h-[320px] rounded-lg" />
                                            <div className="flex justify-between items-center my-3">
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-sans2 text-[#fff]">{data.name}</p>
                                                    <p className="text-xs text-[#FB4C00] font-sans2">{data.position}</p>
                                                </div>
                                                <div className="flex">
                                                    <a href={data.twitter} className="text-[#fff] text-2xl no-underline"><FaXTwitter /></a>
                                                    <a href={data.linkedin} className="text-[#fff] text-2xl ml-3 no-underline"><FaLinkedin /></a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* team end */}
                {/* faq start */}
                <div className="flex flex-col justify-center w-full h-full items-center px-20 sm:px-5 sm:mt-5 my-10">
                    <p className="font-sans1 my-5 text-transparent bg-clip-text bg-gradient-to-r from-[#E99A4E] to-[#FFFFFF] w-[650px] sm:w-fit font-normal text-2xl">
                        Frequently Asked Questions
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-1 my-5">
                        {
                            Faq.map(data=>(
                                <>
                                    
                                        <div className="flex flex-col font-sans1 mb-5">
                                            <p className="text-[#E99A4E] text-lg">{data.title}</p>
                                            <p className="font-sans2 text-sm text-[#fff]">
                                                {data.description}
                                            </p>
                                        </div>
                                    
                                </>
                            ))
                        }
                    </div>
                </div>
                {/* faq ends */}
            </div>
        </>
    )
}
export default Home;
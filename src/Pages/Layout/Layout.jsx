/* eslint-disable react/prop-types */
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Layout  = ({ children })=>{
    return (
        <>
        <div className="m-0 p-0 w-full h-full bg-[#09090B]">
            <Header />
                {children}
            <Footer />
        </div>
            
        </>
    );
}
export default Layout;
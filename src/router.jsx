import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy( ()=> import("./Pages/Home/Home.jsx") );
const Layout = lazy(()=>import("./Pages/Layout/Layout.jsx"));

const Router = ()=>{
    return(
        <>
            <Routes>
                <Route 
                    exact 
                    path="/" 
                    element={
                        <Suspense>
                            <Layout>
                                <Home />
                            </Layout>
                        </Suspense>
                } /> 
            </Routes>
        </>
    );
}
export default Router
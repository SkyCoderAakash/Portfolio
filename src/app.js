import React from "react";
import ReactDOM from "react-dom/client";
import HeroSection from "./components/HeroSection";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Header from "./components/Header";

let AppLayout = ()=>{

    return (
        <div className="app">
            <Header/>
            <HeroSection />
            <Body />
            <Contact/>
            <Footer />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <AppLayout/> 
    },
    {
        path : '/about',
        element : <HeroSection/> 
    },
])
let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
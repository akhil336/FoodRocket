import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

/**
 * lets build FoodRocket inspired by https://box8.in/
 * 
 * Header
 *  -[Logo] [Delivery location selector] (In the left)
 *  -[Cart][Sign-in] (In the right)
 * Slider containing Images of Discounts, Ads of Deals
 * Order Now
 *  -[Container]([Food category Components])
 * Footer
 *  -[FoodRocket](About us, Help n Support, Careers, Contact Us, Policies)
 *  -[Follow Us](Link to social media)
 *  -[Copywrite]
 */



const AppLayout=()=>{
    return (<div className="AppContainer">
        <Header/>
        <Body/>
        <Footer/>
    </div>)
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
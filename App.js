import React from "react";
import ReactDOM from "react-dom/client";

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

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="nav-items">
                <div className="logoContainer">
                    <img className="CompanyLogo" alt="Logo" src={require('./images/CompanyLogoTransparent.png')}/>
                </div>
                <div>
                    <>Location</>
                </div>

            </div>
            <div className="nav-items">
                <div>Cart</div>
                <div>Sign-in</div>
            </div>
        </div>
    );
}

const BodyComponent = () => {
    return (
        <div className="bodyContainer">
            <div className="sliderContainer">
                <>Slider Component</>
            </div>
            <div className="OrderNow">Order Now</div>
            <div className="foodCategoryContainer">
                <>Food Category Components</>
            </div>
            
        </div>
    );
}
const FooterComponent = () => {
    return (
        <div className="footerContainer">
            <div className="upperFooter">
                <div>
                    <>Food Rocket list component</>
                </div>
                <div>
                    <>Follow Us list component</>
                </div>
            </div>
            <div className="lowerFooter">
            <center>Copyright 2023 - 2024. Rocket Foods Pvt. Ltd. All rights reserved. v1.1.1</center>
            </div>
        </div>
    );
}
const AppLayout=()=>{
    return (<div className="AppContainer">
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
    </div>)
    };


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
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

const foodCategoryList=[
    {
        id:1,
        image:"https://imgmediagumlet.lbb.in/media/2020/05/5ebb96964eeff5e29ab651b5_1589352086008.jpg",
        categoryName:"All-in-1 Meals"
    },
    {
        id:2,
        image:"https://lh3.googleusercontent.com/4rYxv727Li0_vhwD8QygNoSX1QH8tyXJ3JFBotvYkFthd_PObq4bEvqTeIOvMJTimK7xs9jANPXM4xPF6bLJaywJSD5oYbbaWyTNDOFAvw=w512-rw",
        categoryName:"Mini Meals"
    },
    {
        id:3,
        image:"https://www.msrmarket.in/cdn/shop/products/Egg-Curry.jpg",
        categoryName:"Desi Box"
    },
    {
        id:4,
        image:"https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800",
        categoryName:"Dum Biriyani"
    },
    {
        id:5,
        image:"https://lh3.googleusercontent.com/4rYxv727Li0_vhwD8QygNoSX1QH8tyXJ3JFBotvYkFthd_PObq4bEvqTeIOvMJTimK7xs9jANPXM4xPF6bLJaywJSD5oYbbaWyTNDOFAvw=w512-rw",
        categoryName:"Mini Meals"
    },
    {
        id:6,
        image:"https://www.msrmarket.in/cdn/shop/products/Egg-Curry.jpg",
        categoryName:"Desi Box"
    },{
        id:7,
        image:"https://lh3.googleusercontent.com/4rYxv727Li0_vhwD8QygNoSX1QH8tyXJ3JFBotvYkFthd_PObq4bEvqTeIOvMJTimK7xs9jANPXM4xPF6bLJaywJSD5oYbbaWyTNDOFAvw=w512-rw",
        categoryName:"Mini Meals"
    },
    {
        id:8,
        image:"https://www.msrmarket.in/cdn/shop/products/Egg-Curry.jpg",
        categoryName:"Desi Box"
    }
]

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
                <div className="searchBar">
                    <input type="text" name="search" placeholder="Search"></input>
                    <button id="search">Search</button>
                </div>
            </div>
            <div className="nav-items">
                <div>Cart</div>
                <div>Sign-in</div>
            </div>
        </div>
    );
}

const CategoryCardComponent = (props) => {
   
    const {foodCategory}=props;
    const {id,image,categoryName}=foodCategory;
    return (
        <div className="categoryCard" >
            <img src={image} alt="Image" />
            <div className="categoryName">{categoryName}</div>
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
            {
                foodCategoryList.map((item)=>(
                     <CategoryCardComponent key={item.id} foodCategory={item}/>
                    )
                )
            }
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
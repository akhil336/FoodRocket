import CategoryCard from "./CategoryCard";
import RestaurantCard from "./RestaurantCard";
import Slider from "./Slider";
import {foodCategoryList, restaurantsList} from "../utils/dummyData";
import { useState } from "react";

const Body = () => {
    
    return (
        <div className="bodyContainer">
            {/* <div className="sliderContainer">
            {
                setInterval(setSliderImage,10000)
            }
            <Slider imageURL={sliderImageURL}/>
            </div> */}
            <div className="textBodyHeading"><div>I'm in the mood for…</div></div>
            <div className="foodCategoryContainer">
            {
                foodCategoryList.map((item)=>(
                        <CategoryCard key={item.id} foodCategory={item}/>
                    )
                )
            }
            </div>
            <div className="textBodyHeading"><div>Restaurants near me</div></div>
            <div className="restaurantsContainer">
            {
                restaurantsList.map((item)=>(
                        <RestaurantCard key={item.info.id} restaurant={item.info}/>
                    )
                )
            }
            </div>
        </div>
    );
}
export default Body;
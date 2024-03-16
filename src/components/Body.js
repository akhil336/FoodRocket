import CategoryCard from "./CategoryCard";
import RestaurantCard from "./RestaurantCard";
import Slider from "./Slider";
import {foodCategoryList, restaurantsList, restaurantsList2} from "../utils/dummyData";
import { useEffect, useState } from "react";



const Body = () => {
    const currentLocation="";
    
    const [restaurants,setRestaurants]=useState(restaurantsList);
    
    useEffect( ()=>{
        async function fetchApi(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0719019&lng=77.62640549999999");
        const json = await data.json;
        console.log(json);

    }
fetchApi();
    },[]);
    
    function filterTopRatedRestaurants(){
        setRestaurants(restaurantsList.filter((item)=>{
        return item.info.avgRating >= 4.5;
        }));sza
    }
    
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
            <button name="filter" className="filterTopRated" onClick={filterTopRatedRestaurants}>Filter Top Rated</button>
            <div className="restaurantsContainer">
            
            {
                restaurants.map((item)=>(
                        <RestaurantCard key={item.info.id} restaurant={item.info}/>
                    )
                )
            }
            </div>
        </div>
    );
}
export default Body;
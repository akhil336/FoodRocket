import CategoryCard from "./CategoryCard";
import RestaurantCard from "./RestaurantCard";
import Slider from "./Slider";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const currentLocation="";
    const [foodCategoryList,setFoodCategoryList]=useState([]);
    const [restaurants,setRestaurants]=useState([]);
    const categoryCardDimension={'width':'100px','height':'120px'};
    const restaurantCardDimension={'width':'400px','height':'200px'};
    const emptyList=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];

    useEffect( ()=>{
        async function fetchApi(){
        const apiResponse = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0719019&lng=77.62640549999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData=await apiResponse.json();
        setFoodCategoryList(await jsonData?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        setRestaurants(await jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            console.log(restaurants);

    }
    fetchApi();
    },[]);
    
    function filterTopRatedRestaurants(){
        setRestaurants(restaurantsList.filter((item)=>{
        return item.info.avgRating >= 4.5;
        }));
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
                foodCategoryList.length===0?
                emptyList.map((item)=>(
                    <Shimmer key={item} dimensions={categoryCardDimension}/>
                ))
                :
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
                restaurants.length===0?
                emptyList.map((item)=>(
                    <Shimmer key={item} dimensions={restaurantCardDimension}/>
                ))
                :
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
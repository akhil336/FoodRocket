import CategoryCard from "./CategoryCard";
import RestaurantCard from "./RestaurantCard";
import Slider from "./Slider";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const currentLocation="";
    const [foodCategoryList,setFoodCategoryList]=useState([]);
    const [restaurants,setRestaurants]=useState([]);
    const categoryCardDimension={'width':'120px','height':'120px'};
    const restaurantCardDimension={'width':'400px','height':'200px'};
    const emptyList=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];

    useEffect( ()=>{
        async function fetchApi(){
        // const apiResponse = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0239923&lng=77.643294&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        // const jsonData=await apiResponse.json();
        // setFoodCategoryList(await jsonData?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        // setRestaurants(await jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        const categoryApi = await fetch("https://localhost:7204/api/foodcategories");
        const categoryData = await categoryApi.json();
        setFoodCategoryList(await categoryData);

        const restaurantsApi = await fetch("https://localhost:7204/api/restaurants");
        const restaurantsData = await restaurantsApi.json();
        setRestaurants(await restaurantsData);
    }
    fetchApi();
    },[]);
    
    function filterTopRatedRestaurants(){
        // let cList="";
        // foodCategoryList.map((item)=>{
        //     cList=cList+"('"+item.id+"','"+item.imageId+"','"+item.action?.text+"'),";
        // })
        // console.log(cList.toString());
        // let rList="";
        // restaurants.map((item)=>{
            //SQL Querying data migration
            //rList=rList+"('"+item.info.id+"','"+item.info.cloudinaryImageId+"','"+item.info.name+"',"+item.info.avgRating+",'"+item.info.areaName+"',"+Math.round(Math.random())+"),";
        //     rList=rList+'("'+item.info.id+'","'+item.info.cloudinaryImageId+'","'+item.info.name+'",'+item.info.avgRating+',"'+item.info.areaName+'",'+Math.round(Math.random())+'),';
        // })
        // console.log(rList);
        setRestaurants(restaurants.filter((item)=>{
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
                        // <RestaurantCard key={item.info.id} restaurant={item.info}/>
                        <RestaurantCard key={item?.id} restaurant={item}/>
                    )
                )
            }
            </div>
        </div>
    );
}
export default Body;
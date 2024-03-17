const RestaurantCard=(props)=>{

    const {cloudinaryImageId,name,id,avgRating,areaName}=props.restaurant;
    const imageDataBlobStoreSwiggy="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    return (
   
    <div className="restaurantCard">
        <img src={imageDataBlobStoreSwiggy+cloudinaryImageId} alt={name} />
        <div className="restaurantInfo">
            <div className="restaurantName"><strong>{name}</strong></div>
            <div className="restaurantRating">{avgRating} stars</div>
            <div className="restaurantArea">{areaName}</div>
        </div>
    </div>
    )
}

export default RestaurantCard;
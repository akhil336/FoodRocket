const RestaurantCard=(props)=>{

    const {imageId,name,id,avgRating,areaName}=props.restaurant;
    const imageDataBlobStoreSwiggy="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    return (
   
    <div className="restaurantCard">
        <img src={imageDataBlobStoreSwiggy+imageId} alt={name} />
        <div className="restaurantInfo">
            <div className="restaurantName">{name}</div>
            <div className="restaurantRating">{avgRating}/5 stars</div>
            <div className="restaurantArea">{areaName}</div>
        </div>
    </div>
    )
}

export default RestaurantCard;
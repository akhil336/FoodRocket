const CategoryCard = (props) => {
    //console.log(props.foodCategory.action)
    const { imageId, id, action } = props.foodCategory;
    const categoryName = action?.text;
   
    const image = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + imageId;
    
    return (
        <div className="categoryCard" >
            <img src={image} alt="Image" />
            {/* <div className="categoryName">{categoryName}</div> */}
        </div>
    );
}

export default CategoryCard;
const CategoryCard = (props) => {

    const {image,id,categoryName}=props.foodCategory;

    return (
        <div className="categoryCard" >
            <img src={image} alt="Image" />
            <div className="categoryName">{categoryName}</div>
        </div>
    );
}

export default CategoryCard;
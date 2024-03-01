const CategoryCard = (props) => {
   
    const {foodCategory}=props;
    const {id,image,categoryName}=foodCategory;
    return (
        <div className="categoryCard" >
            <img src={image} alt="Image" />
            <div className="categoryName">{categoryName}</div>
        </div>
    );
}

export default CategoryCard;
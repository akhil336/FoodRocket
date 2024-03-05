const Slider = (props) =>{
    const imageURL=props.imageURL;
    console.log(imageURL)
    return(
    <div className="carousalCard">
        <img src={imageURL} alt="discount"/>
    </div>
    )

    // for (let i = 0; i < carousalSliderImages.length; i++) {
    //     const imageURL = carousalSliderImages[i];
    //     const divElement = document.createElement("div");
    //     const imgElement = document.createElement("img");
    //     imgElement.src = imageURL;
    //     divElement.classList.add("item");
    //     divElement.appendChild(imgElement);
    //     carouselContainer.appendChild(divElement);
    //   }
//     const [sliderImageURL,setSliderImageURL] = useState(carousalSliderImages[0]);
// const setSliderImage = () => {
//     setSliderImageURL(carousalSliderImages[currentSliderImageIndex]);
//     currentSliderImageIndex = (currentSliderImageIndex+1)  % carousalSliderImages.length;
//    }
}
export default Slider;
// import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/imageslider/ImageSlider";
// import RandomColor from "./components/random-color/RandomColor";
// import StarRating from "./components/rating star/StarRating";

function App() {
  return (
    <div className="App">
      {/* accordian component */}
      {/* <Accordian /> */}
      {/* Random Color generator */}
      {/* <RandomColor /> */}
      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10} /> */}
      {/* Image Slider component with url as prop*/}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"3"}
        limit={"8"}
      />
    </div>
  );
}

export default App;

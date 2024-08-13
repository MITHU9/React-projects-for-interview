import "./App.css";
import Index from "./components/accordian";
import ImageSlider from "./components/image-slider/ImageSlider";
import RandomColor from "./components/random-color/RandomColor";
import Rating from "./components/star-rating/Rating";

function App() {
  return (
    <div className="app">
      <Index />
      <RandomColor />
      <Rating noOfStars={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </div>
  );
}

export default App;

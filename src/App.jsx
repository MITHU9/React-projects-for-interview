import "./App.css";
import Index from "./components/accordian";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import QRCodeGenerator from "./components/qr-code-generator/QRCodeGenerator";
import RandomColor from "./components/random-color/RandomColor";
import Rating from "./components/star-rating/Rating";

function App() {
  return (
    <div className="app">
      <Index />
      <RandomColor />
      <Rating noOfStars={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
      <LoadMoreData />
      <QRCodeGenerator />
    </div>
  );
}

export default App;

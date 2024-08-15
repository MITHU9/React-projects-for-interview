import "./App.css";
import Index from "./components/accordian";
import GithubProfileData from "./components/github-profile/GithubProfileData";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import QRCodeGenerator from "./components/qr-code-generator/QRCodeGenerator";
import RandomColor from "./components/random-color/RandomColor";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import SearchAutoComplete from "./components/search-auto-complete/SearchAutoComplete";
import Rating from "./components/star-rating/Rating";
import SwitchTheme from "./components/switch-theme/SwitchTheme";

function App() {
  return (
    <div className="app">
      {/* <Index />
      <RandomColor />
      <Rating noOfStars={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
      <LoadMoreData />
      <QRCodeGenerator />
      <SwitchTheme />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      <GithubProfileData /> */}
      <SearchAutoComplete />
    </div>
  );
}

export default App;

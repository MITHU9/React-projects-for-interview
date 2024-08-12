import "./App.css";
import Index from "./components/accordian";
import RandomColor from "./components/random-color/RandomColor";
import Rating from "./components/star-rating/Rating";

function App() {
  return (
    <div className="app">
      <Index />
      <RandomColor />
      <Rating noOfStars={10} />
    </div>
  );
}

export default App;

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

const Rating = ({ noOfStars = 5 }) => {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);

  const handleClick = (index) => {
    setSelectedStar(index);
  };
  const handleMouseEnter = (index) => {
    setHoveredStar(index);
  };
  const handleMouseLeave = () => {
    setHoveredStar(selectedStar);
  };
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={
              index <= (hoveredStar || selectedStar) ? "active" : "disabled"
            }
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={30}
          />
        );
      })}
    </div>
  );
};

export default Rating;

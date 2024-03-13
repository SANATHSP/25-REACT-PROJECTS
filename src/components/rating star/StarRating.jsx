import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
//install react-icons

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setsover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    console.log(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {};

  const handleMouseLeave = () => {};
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            onClick={() => {
              handleClick(index);
            }}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;

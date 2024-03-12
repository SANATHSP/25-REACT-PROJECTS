import React, { useState } from "react";

const RandomColor = () => {
  const [colorType, setColorType] = useState("hex");
  const [currentColor, setCurrentColor] = useState("#000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleRandomHexColor = () => {
    // create an array hex
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    // loop to genate random numbers
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    console.log(hexColor);
  };
  const handleRandomRgbColor = () => {};

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: currentColor,
      }}
    >
      <button onClick={() => setColorType("hex")}>Generate HEX Color</button>
      <button onClick={() => setColorType("rgb")}>Generate RGB Color</button>
      <button
        onClick={
          colorType === "hex" ? handleRandomHexColor : handleRandomRgbColor
        }
      >
        Generate Random Color
      </button>
    </div>
  );
};

export default RandomColor;

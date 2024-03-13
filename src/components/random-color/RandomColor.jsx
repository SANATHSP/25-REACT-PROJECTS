import React, { useEffect, useState } from "react";

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

    setCurrentColor(hexColor);
  };
  const handleRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setCurrentColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (colorType === "rgb") {
      handleRandomRgbColor();
    } else {
      handleRandomHexColor();
    }
  }, [colorType]);

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{colorType === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{currentColor}</h1>
      </div>
    </div>
  );
};

export default RandomColor;

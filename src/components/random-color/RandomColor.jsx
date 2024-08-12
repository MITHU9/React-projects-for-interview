/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    const hexDigits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hexDigits[randomColorUtility(hexDigits.length)];
    }

    setColor(hexColor);
    //console.log(hexColor);
  };
  const handleCreateRandomRgbColor = () => {
    const red = randomColorUtility(256);
    const green = randomColorUtility(256);
    const blue = randomColorUtility(256);
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    setColor(rgbColor);
    //console.log(rgbColor);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomHexColor();
    }
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          fontSize: "20px",
          marginTop: "50px",
        }}
      >
        <h2>Current Color: {color}</h2>
        <h1>Type: {typeOfColor === "hex" ? "HEX Color" : "RGB Color"}</h1>
      </div>
    </div>
  );
};

export default RandomColor;

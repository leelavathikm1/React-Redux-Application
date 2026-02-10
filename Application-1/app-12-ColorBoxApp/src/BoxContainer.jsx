import { useState } from "react";
import Box from "./Box";

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

function BoxContainer({ num = 16 }) {
  // initialize colors only once
  const [colors, setColors] = useState(() =>
    Array.from({ length: num }, () => getRandomColor()),
  );

  const changeColor = (index) => {
    setColors((prevColors) =>
      prevColors.map((color, i) => {
        if (i !== index) return color;

        let newColor;
        do {
          newColor = getRandomColor();
        } while (newColor === color);

        return newColor;
      }),
    );
  };

  return (
    <div style={containerStyle}>
      {colors.map((color, index) => (
        <Box key={index} color={color} onClick={() => changeColor(index)} />
      ))}
    </div>
  );
}

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 120px)",
  gap: "10px",
};

export default BoxContainer;

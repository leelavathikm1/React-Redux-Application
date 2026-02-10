import React from "react";

const Box = ({ color, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: "120px",
        height: "120px",
        backgroundColor: color,
        cursor: "pointer",
      }}
    />
  );
};

export default Box;

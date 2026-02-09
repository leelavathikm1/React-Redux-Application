import React, { useState } from "react";
import { Coin } from "./Coin";

export const FlipCoin = ({
  coins = [
    {
      side: "head",
      imgSrc:
        "https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg",
    },
    {
      side: "tail",
      imgSrc:
        "https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg",
    },
  ],
}) => {
  const [currentFace, setCurrentFace] = useState(null);
  const [totalFlips, setTotalFlips] = useState(0);
  const [heads, setHeads] = useState(0);

  const choice = (arr) => {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
  };

  const flipCoin = () => {
    const newFace = choice(coins);
    setCurrentFace(newFace);
    console.log(newFace);
    setTotalFlips((prev) => prev + 1);
    // if (newFace.side === "head") {
    //   setHeads((prev) => prev + 1);
    // }
    setHeads((prev) => (newFace.side === "head" ? prev + 1 : prev));
  };

  return (
    <div>
      <h2>Let's Flip A Coin</h2>
      {currentFace && <Coin info={currentFace} key={totalFlips} />}

      <button onClick={flipCoin}>Flip Me</button>

      <p>
        Out of{totalFlips}flips,there have been {heads}heads and{""}{" "}
        {totalFlips - heads}tails
      </p>
    </div>
  );
};

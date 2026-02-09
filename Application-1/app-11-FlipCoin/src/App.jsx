import { useState } from "react";
import "./App.css";
import { FlipCoin } from "./FlipCoin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <FlipCoin />
      </div>
    </>
  );
}

export default App;

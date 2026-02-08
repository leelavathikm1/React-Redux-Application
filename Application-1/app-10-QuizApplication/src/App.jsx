import { useState } from "react";
import "./App.css";
import { Answer } from "./Answer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Answer />
      </div>
    </>
  );
}

export default App;

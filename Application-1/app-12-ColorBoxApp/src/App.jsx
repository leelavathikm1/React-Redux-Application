import { useState } from "react";
import "./App.css";
import BoxContainer from "./BoxContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BoxContainer />
    </>
  );
}

export default App;

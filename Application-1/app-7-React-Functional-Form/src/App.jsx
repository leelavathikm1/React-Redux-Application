import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserFormOne from "./UserFormOne";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h2>User Registration</h2>
        <UserFormOne />
      </div>
    </>
  );
}

export default App;

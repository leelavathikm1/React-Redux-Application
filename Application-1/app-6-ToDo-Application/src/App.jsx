import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserForm from "./Components/UserForm";

// function App() {
//   const [count, setCount] = useState(0)

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    country: "",
    skills: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((ref) => ({
        ...ref,
        skills: checked
          ? [...ref.skills, value]
          : ref.skills.filter((s) => s !== value),
      }));
      return;
    }

    setFormData((ref) => ({ ...ref, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited", formData);
    handleReset();
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      gender: "",
      country: "",
      skills: "",
      message: "",
    });
  };

  return (
    <>
      <div className="container">
        <h2>User Registration</h2>

        <UserForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
        />
      </div>
    </>
  );
}

export default App;

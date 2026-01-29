// import { useState } from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
// import { getAllUsersAsyncAction } from "./Store/UserSlice";

function App() {
  const allUsers = useSelector((state) => {
    console.log(state);
    return state.usersDetails;
  });
  // const dispatch = useDispatch;
  // const { users } = useSelector((store) => store.usersDetails);
  // const [user, setUser] = useState({
  //   id: "",
  //   fname: "",
  //   lname: "",
  //   email: "",
  //   state: "",
  //   zip: "",
  // });
  // console.log(users);
  // useEffect(() => {
  //   dispatch(getAllUsersAsyncAction());
  // }, []);
  return (
    <>
      <h2>Redux Crud Users Component</h2>
    </>
  );
}

export default App;

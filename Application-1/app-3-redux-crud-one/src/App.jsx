import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { getAllUserAsyncAction } from "./Store/UserSlice";

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.usersDetails);

  console.log(users);
  useEffect(() => {
    dispatch(getAllUserAsyncAction());
  }, []);
  return (
    <>
      <h2>React Redux CRUD </h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

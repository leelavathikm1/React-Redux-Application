import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "../Store/UserSlice";

export default function Users() {
  const dispatch = useDispatch();

  const { list, status, error } = useSelector((state) => state.users);
  console.log(list);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "Loading") return <h3>Loading..</h3>;
  if (status === "Failed") return <h3>{error}</h3>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {list.map((user) => (
          <li key={user.id}>
            {user.fname}
            {user.lname}({user.email})
            <button onClick={() => dispatch(deleteUser(user.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

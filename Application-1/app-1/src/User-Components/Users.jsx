import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./UserSlice";

export default function Users() {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  if (status === "loading") return <h2>Loading ....</h2>;
  if (status === "failed") return <h2>Error:{error}</h2>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {list.map((user) => (
          <li key={user.id}>
            {user.name}-{user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

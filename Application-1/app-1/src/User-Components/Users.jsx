import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletUser, fetchUsers } from "./UserSlice";

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

  const handleDelete = async (user) => {
    // console.log(user);

    await dispatch(deletUser(user));
    dispatch(fetchUsers());
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {list.map((user) => (
          <li
            key={user.id}
            onClick={() => {
              handleDelete(user);
            }}
          >
            {user.fname}-{user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

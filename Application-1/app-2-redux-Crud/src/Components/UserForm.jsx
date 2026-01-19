import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../Store/UserSlice";

export default function UserForm({ selectedUser, clear }) {
  const [user, setUser] = useState(
    selectedUser || { fname: "", lname: "", email: "" },
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      dispatch(updateUser(user));
    } else {
      dispatch(addUser(user));
    }

    clear();
    setUser({ fname: "", lname: "", email: "" });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Enter First Name"
        value={UserForm.fname}
        onChange={(e) => setUser({ ...UserForm, fname: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter Lasst Name"
        value={UserForm.lname}
        onChange={(e) => setUser({ ...UserForm, lname: e.target.value })}
      />
      <input
        type="email"
        placeholder="Enter Email"
        value={UserForm.email}
        onChange={(e) => setUser({ ...UserForm, email: e.target.value })}
      />

      <button type="button">Add</button>
    </form>
  );
}

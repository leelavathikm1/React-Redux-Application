export default function UserForm() {

const


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

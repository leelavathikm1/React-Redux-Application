import React from "react";

export default function UserForm({
  formData,
  handleChange,
  handleSubmit,
  handleReset,
}) {
  return (
    <form>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />{" "}
      <br />
      <label htmlFor="">Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>{" "}
      <br />
      <label htmlFor="">Gender</label>
      <input
        type="radio"
        name="gender"
        value="male"
        onChange={handleChange}
        checked={formData.gender === "male"}
      />
      Male <br />
      <input
        type="radio"
        name="gender"
        value="female"
        onChange={handleChange}
        checked={formData.gender === "female"}
      />
      Female <br />
      <label htmlFor="">Skills</label>
      <div className="inline">
        <input
          type="checkbox"
          value={formData.english}
          checked={formData.skills.includes("english")}
          onChange={handleChange}
        />
        <br />
        <input
          type="checkbox"
          value={formData.maths}
          checked={formData.skills.includes("maths")}
          onChange={handleChange}
        />
      </div>
      <br />
      <label htmlFor="">Country</label>
      <select name="country" value={formData.country} onChange={handleChange}>
        <option value="">Select</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
      </select>{" "}
      <br />
      <div className="buttons">
        <button type="button" onSubmit={handleSubmit}>
          Submit
        </button>
        <button type="buton" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}

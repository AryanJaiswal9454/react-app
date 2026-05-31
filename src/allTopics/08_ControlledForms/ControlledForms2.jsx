import { useState } from "react";

const ControlledForms2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    existingUsers.push(formData);

    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("User Created");

    // clearing input fields
    setFormData({username : "" , email : "", password : ""})
  };

  return (
    <>
      <h1>Learn Controlled Forms</h1>
      <p>handle multiple inputs using single state</p>
      <hr />

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password </label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};
export default ControlledForms2;
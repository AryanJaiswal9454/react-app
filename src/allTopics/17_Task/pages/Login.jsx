import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/UserContextProvider";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setUser } = useContext(userContext);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const data = {
      name: formData.name,
      email: formData.email,
    };

    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/home");
  };

  return (
    <div>
      <h3>Login</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="*********"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
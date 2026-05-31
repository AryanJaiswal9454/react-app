import { useContext } from "react";
import { userContext } from "../context/UserContextProvider";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user,setUser } = useContext(userContext);
  console.log(user);

const navigate=useNavigate()

const logout=()=>{
    if (confirm("Are you sure you want to logout?")) {
  localStorage.removeItem("user");
  setUser(null);
  navigate("/")
    }
}

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <h4>Context-Task</h4>

      <nav style={{ display: "flex", gap: "30px" }}>
        {user && (
          <>
            <span>{user.email}</span>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
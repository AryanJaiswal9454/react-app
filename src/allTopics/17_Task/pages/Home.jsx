import React from "react";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { userContext } from "../context/UserContextProvider";


const Home = () => {
  const {user}=useContext(userContext)
  return (
    <div>
      <Navbar />

      <h2 style={{ padding: "20px", textAlign: "center" }}>Home Page</h2>
      <p style={{padding:"10px" , textAlign:"center", color:"gray"}}>Welcome {user.name}</p>
    </div>
  );
};

export default Home;
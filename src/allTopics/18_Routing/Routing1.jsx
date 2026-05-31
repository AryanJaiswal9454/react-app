import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from "./Signup";
import Home from "./Home";
import Nav from "./Nav";
const Routing1 =()=>{
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Signup" element={<Signup/>}/>
        </Routes>
    </BrowserRouter>
    )
};
export default Routing1
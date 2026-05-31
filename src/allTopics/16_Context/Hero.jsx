import React,{useContext} from "react";
import {MyContext} from "./ContextExample";
const Hero =() => {

let data =useContext(MyContext);
console.log(data);


    return (
        <>
        <h1>Hero component</h1>
        </>
    );
};
export default Hero;
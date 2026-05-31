/**
 * ! contxt are used to avoid prop drilling and to share data between components without passing props down manually at every level.
 * ! it uses 3 main components
 * ? 1. createContext: it creates a context object that holds the data and provides a way to access it.
 * ? 2.provider: 
 */


import { createContext } from "react";

//! step 1 := create a context
 export const MyContext=createContext(); // returns context object

// ! step 2: provide a context
const ContextProvider = (props) =>{
    console.log(props);
    
    let str="hii! Iam coming from contect"
    return(
        <>
        <MyContext.Provider value={str}>
        {props.children}
        </MyContext.Provider>
        </>
    )
};
export default ContextProvider;
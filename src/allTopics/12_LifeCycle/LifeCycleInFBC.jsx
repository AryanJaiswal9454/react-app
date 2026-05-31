// import { useEffect, useState } from "react";

// const LifeCycleInFBC = () => {
//   const [count, setCount] = useState(0);
//   const [initailRender, setInitialRender] = useState(true);   using state 

//   useEffect(() => {
//     console.log("Component Mounted");
//   }, []);

//   useEffect(() => {
//     if (initailRender) {
//       setInitialRender(false);
//       return;
//     }
//     console.log("Component Updated");
//   }, [count]);

//   return (
//     <>
//       <h1>Learn LifeCycle in Function Based</h1>
//       <h2>Counter : {count}</h2>
//       <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
//     </>
//   );
// };

// export default LifeCycleInFBC;


import React,{useState,useEffect, useRef} from 'react'

const LifeCycleInFBC = () => {
    const [count,setCount]=useState(0);
    const initialRender=useRef(true); // {current :true}    using ref not state more performance optimised
    const handelCount = () => setCount((prev)=> prev+1);
    useEffect(()=> {
        console.log("component mounted");
        const id = setInterval(() => {
            console.log("api called");
            
            
        },2000);
        return () => {
            clearInterval(id)
            console.log("component unmounted");
            
        };
    },[]);

    useEffect(()=> {
        if (initialRender.current){
            initialRender.current =false;return
        };
        console.log("component Updated");
    },[count]);
  return (
    <div><h1>LifeCycleInFBC</h1>
     <h2>Counter : {count}</h2>

    <button onClick={handelCount}>update</button>
    </div>
  );
};

export default LifeCycleInFBC
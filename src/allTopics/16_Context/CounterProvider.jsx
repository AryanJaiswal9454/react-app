import { Children, createContext, useState } from "react";

export const CounterContext=createContext();

const CounterProvider=({children}) => {
    const [count,setcount]=useState(0);
    const increment=() => setcount((prev) => prev+1);
    const decrement=() => setcount((prev)=> prev>0 ?prev-1 : 0);
    const reset=()=>setcount(0);

    return (
        <CounterContext.Provider value={{count,increment,decrement,reset}}>
            {children}
        </CounterContext.Provider>
    )
}
export default CounterProvider
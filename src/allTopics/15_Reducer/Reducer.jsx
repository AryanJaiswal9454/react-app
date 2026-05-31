import React, { useReducer } from 'react'
import {reducerFunc,initialState} from "./counterState"

const Reducer = () => {
    const [count,dispatch]=useReducer(reducerFunc,initialState);

  return (
    <div>
        <h1>Reducer</h1>
        <h2>{count}</h2>
        <button onClick={()=>dispatch("incre")}>incerment</button>
        <button onClick={()=>dispatch("decre")}>decerment</button>
        <button onClick={()=>dispatch("res")}>reset</button>

    </div>
  )
}

export default Reducer
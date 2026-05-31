import React, { useContext } from 'react'
import { CounterContext } from './CounterProvider'

const Counter = () => {
    let {count,increment,decrement,reset} = useContext(CounterContext)

  return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>


    </div>
  )
}

export default Counter
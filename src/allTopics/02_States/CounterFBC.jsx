import { useState } from "react";

const CounterFBC = () => {
  const [state, setState] = useState({ count: 0 });
  console.log(state);

  const increment = () => setState({ count: state.count + 1 });

  return (
    <>
      <h1>Counter FBC Component {state.count} </h1>
      <button onClick={increment}>increment</button>
    </>
  );
};

export default CounterFBC;

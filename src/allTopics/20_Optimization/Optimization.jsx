

import { useState, useMemo, useCallback } from "react";
import Child from "./Child";

const Optimation = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const handleAdd = () => setAdd((prev) => prev + 1);
  const handleMinus = () => setMinus((prev) => prev - 1);

  //   const multiply = () => {
  //     console.log("multiply");
  //     return add * 5;
  //   };

  //! it returns a memoized value
  const multiply = useMemo(() => {
    console.log("multiply");
    return add * 5;
  }, [add]);

  //! it returns a memoized function
  const data = useCallback(() => {
    console.log("i am data func");
  }, []);

  return (
    <div>
      <h1>Learn Optimation Techniques</h1>

      <section>
        <h3>Addition {add}</h3>
        <button onClick={handleAdd}>increment</button>
      </section>

      <hr />

      <section>
        <h3>Substraction {minus}</h3>
        <button onClick={handleMinus}>decrement</button>
      </section>

      <hr />

      <section>
        <h3>Multiplication is {multiply}</h3>
      </section>

      <hr />

      <Child data={data} />
    </div>
  );
};

export default Optimation;
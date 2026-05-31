import { useState } from "react";
import Child from "./Child";

const DrillingParent = () => {
  console.log("DrillingParent");

  const [data, setData] = useState("");

  let str = "Hello World";
  let arr = [10, 20];
  let obj = { username: "John Doe" };
  let greet = () => setData("Welcome");

  return (
    <>
      <h1>Learn Props Drilling {data}</h1>
      <Child str={str} arr={arr} obj={obj} greet={greet} />
    </>
  );
};

export default DrillingParent;

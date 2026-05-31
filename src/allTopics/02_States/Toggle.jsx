import { useState } from "react";

const ToggleComponent = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hello World");

  const updateToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <h1>{data}</h1>
      <button onClick={() => setData("Byee World")}>change</button>

      <hr />

      <button onClick={updateToggle}>Toogle me</button>
      {toggle && <h1>toogle Example</h1>}
    </>
  );
};

export default ToggleComponent;

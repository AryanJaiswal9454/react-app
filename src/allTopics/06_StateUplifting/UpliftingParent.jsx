import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const UpliftingParent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Learn State Uplifting</h1>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </>
  );
};

export default UpliftingParent;

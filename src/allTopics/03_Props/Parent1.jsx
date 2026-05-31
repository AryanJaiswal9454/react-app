import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

const Parent1 = () => {
  let data1 = "Hiii";
  let data2 = [10, 20, 30];
  let data3 = { name: "John" };
  return (
    <>
      <h1>Parent Component</h1>

      {/* Sending multiple props */}
      <Child1 prop1={data1} prop2={data2} prop3={data3} />

      {/* Sending single prop with multiple values */}
      <Child2 data={{ data1, data2, data3 }} />

      <Child3 prop1={data1} prop2={data2} prop3={data3} />
    </>
  );
};

export default Parent1;

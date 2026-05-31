import NestedChild from "./NestedChild";

const Child = (props) => {
  console.log("Child");

  return (
    <>
      <h1>Child Component</h1>
      <NestedChild props={props} />
    </>
  );
};

export default Child;

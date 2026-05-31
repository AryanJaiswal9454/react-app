const NestedChild = ({ props }) => {
  console.log("NestedChild");

  let { str, arr, obj, greet } = props;

  return (
    <>
      <h1>NestedChild Component</h1>
      <h2>{str}</h2>
      <h2>{arr}</h2>
      <h2>{obj.username}</h2>
      <button onClick={greet}>Click</button>
    </>
  );
};

export default NestedChild;

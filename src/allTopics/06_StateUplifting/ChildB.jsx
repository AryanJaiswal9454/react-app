const ChildB = ({ setCount }) => {
  return (
    <>
      <h1>Child B Component</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        increment
      </button>
    </>
  );
};

export default ChildB;

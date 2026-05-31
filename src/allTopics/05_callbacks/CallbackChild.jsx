const CallbackChild = (props) => {
  console.log(props); // {getData : f}
  let { getData } = props;
  let data = "Hello World";

  return (
    <>
      <h1>Callback Child Component</h1>
      <button onClick={() => getData(data)}>
        click
      </button>
    </>
  );
};

export default CallbackChild;

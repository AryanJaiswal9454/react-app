const Child1 = (props) => {
  console.log(props);
  // {prop1 : "", prop2 : [] , prop3:{}}

  return (
    <>
      <h1>Child1 Component</h1>
      <p>{props.prop1}</p>
      <p>{props.prop2}</p>
      <p>{props.prop3.name}</p>
    </>
  );
};

export default Child1;

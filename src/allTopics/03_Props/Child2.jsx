const Child2 = (props) => {
  console.log(props); // {data: {…}}

  let { data1:str, data2:arr, data3:{name} } = props.data;
  console.log(str, arr, name);
  

  return (
    <>
      <h1>Child2 Component</h1>
    </>
  );
};

export default Child2;

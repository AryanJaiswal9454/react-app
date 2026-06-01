import React from "react";

const Child = (props) => {
  console.log("I am Child Comp", props.data);

  return (
    <div>
      <h1>Child Comp</h1>
    </div>
  );
};

export default React.memo(Child);
//! it is used to memoize a Component untill props are unchanged
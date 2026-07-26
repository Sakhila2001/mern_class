import React from "react";

const Child1 = (props) => {
  console.log(props);

  console.log(props.product);

  console.log(props.price);

  return (
    <>
      <h1>This is BENQ MONITOR SERIES 2</h1>

      <div>{props.product}</div>

      <div>{props.price}</div>
    </>
  );
};

export default Child1;

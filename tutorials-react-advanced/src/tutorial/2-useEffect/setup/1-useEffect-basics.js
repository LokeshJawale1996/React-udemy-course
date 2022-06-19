import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
//1.we have to import it to use
//2.if we call it at once then we need to pass second parameter as empty array
//3.if we have to call it at every render don't pass second parameter otherwise pass not empty array as second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  // useEffect(() => {
  //   console.log("inside useEffect function");
  //   document.title = `message is ${value}`;
  // }, []);
  useEffect(() => {
    console.log("Call useEffect function");

    if (value > 1) {
      document.title = `message is ${value}`;
    }
  });
  console.log("hello loki");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        change value
      </button>
    </>
  );
};

export default UseEffectBasics;

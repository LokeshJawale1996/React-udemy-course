import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "lokesh",
    age: 25,
    message: "hello guys",
  });
  // const [name,setName] = useState('rocky');
  // const [age,setAge]=useState(25);
  // const [message,setMessage]=useState('hello guys')
  const changeMessage = () => {
    setPerson({ ...person, message: "Hi buddy" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button type="button" className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;

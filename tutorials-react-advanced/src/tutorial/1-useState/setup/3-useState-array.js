import React, { useState, useEffect } from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  // useEffect(() => {
  //   console.log(data);
  // });

  const removeItem = (id) => {
    let newPeople = people.filter((people) => people.id !== id);
    return setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button className="btn" type="button" onClick={() => setPeople([])}>
        Reset all
      </button>
    </>
  );
};

export default UseStateArray;

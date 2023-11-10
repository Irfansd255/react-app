import React from "react";

const Person = (props) => {
  console.log(props);

  const { uname, age, married } = props.person;

  return (
    <div>
      <h1>Name:{uname}</h1>
      <h1>Age:{age}</h1>
      <h1>Married: {married.toString()}</h1>
    </div>
  );
};

export default Person;

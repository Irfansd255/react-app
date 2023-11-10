import React, { useState } from "react";

const StatePage = () => {

const [state, setState]=useState("Irfan")

console.log(state)

  return (
    <div className="container p-4">
      <h1>{state}</h1>
    </div>
  );
};

export default StatePage;

import React, { useContext } from "react";
import { AppContext } from "../contextApi/AppContext";

const CompC = (props) => {
  const { name, setCounter, counter } = useContext(AppContext);

  return (
    <div>
      <hr />
      <h1>Comp C</h1>
      <button onClick={()=>setCounter(counter + 1)}>Increment</button>
      <h1>{props.c}</h1>
      <h1>{name}</h1>
      <hr />
    </div>
  );
};

export default CompC;

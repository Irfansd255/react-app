import React, { useState } from "react";
import Data from "../components/Data";
import Image from '../images/calculator.png'


const StatePage = () => {

  
  // const [state, setState] = useState(0);

  // const changeState = () => {
  //   setState(state + 1);
  // };

  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="container p-4">
      {isShow ? (
        <>
          <h1>Heading 111</h1>
          <h1>Heading 222</h1>
        </>
      ) : (
        <p>
          kjnckjnjckjdncjnjcdsjk lknskcndscndksnckjdsn kjnkjcndkjnckjdsn
          kjncjksnskj kjncnsjk
        </p>
      )}


      <button
        className={isShow ? "btn btn-success me-4" : "btn btn-danger me-4"}
        onClick={handleShow}
      >
        {isShow ? "Hide" : "Show"}
      </button>

      {/* <h1>{state}</h1>

      <button className="btn btn-danger me-4" onClick={changeState}>
        Increment
      </button>
      <button className="btn btn-danger" onClick={() => setState(state - 1)}>
        Decrement
      </button> */}

    </div>
  );
};

export default StatePage;

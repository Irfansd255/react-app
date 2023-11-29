import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const refHeading = useRef();

  const refInput = useRef();

  useEffect(() => {
    // console.log(refHeading.current.innerHTML);
  });



  const chaangeHandle = () => {
    refHeading.current.innerHTML = "HI.......";
    refHeading.current.style.color = "red";
  };

  const submitRef = (e) => {
    e.preventDefault();
    console.log(refInput.current.value)
    
  };
  return (
    <div className="container p-4 bg-light">
      <h1 ref={refHeading}>Hello...</h1>
      <button className="btn btn-secondary mt-4" onClick={chaangeHandle}>
        Change
      </button>

      <form className="mt-4" onSubmit={submitRef}>
        <input type="text" className="form-control" ref={refInput} />
        <button className="btn btn-secondary mt-4" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseRef;

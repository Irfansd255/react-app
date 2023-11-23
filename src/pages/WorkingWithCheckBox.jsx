import React, { useState } from "react";

const WorkingWithCheckBox = () => {

const handleChange = (e) =>{
console.log(e.target.value)
console.log(e.target.checked)
}

  return (
    <div className="container form-wrapper bg-secondary">
      <div className="inner-form-wrapper">
        <h3>Form CheckBox</h3>
        <hr />
        <form>
          <label htmlFor="" className="form-label me-2">
            English
          </label>
          <input type="checkbox" value="English" className="form-check-input " onChange={handleChange} />
          <br />
          <label htmlFor=""  className="form-label me-2">
            Hindi
          </label>
          <input type="checkbox" value="Hindi" className="form-check-input" onChange={handleChange} />
          <br />
          <label htmlFor="" className="form-label me-2">
            Marathi
          </label>
          <input type="checkbox" value="Marathi" className="form-check-input" onChange={handleChange} />
          <br />
          <br />
          <button type="submit" className="btn btn-secondary ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default WorkingWithCheckBox;

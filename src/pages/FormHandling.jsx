import React, { useState } from "react";

const FormHandling = () => {
  const [uName, setUname] = useState("");
  const [uEmail, setuEmail] = useState("");


//   const handleChange = (event) => {
//     setUname(event.target.value);
//     // console.log(event.target.value);
//   };

  const submitHande = (e) => {
    e.preventDefault();
    console.log("Name",uName);
    console.log("Email",uEmail)
  };

  return (
    <div className="container form-wrapper bg-secondary">
      <div className="inner-form-wrapper">
        <h3>Form {uName}</h3>
        <hr />
        <form onSubmit={submitHande}>
          <label htmlFor="" className="form-label">
            User Name
          </label>
          <input
            type="text"
            value={uName}
            className="form-control"
            onChange={(e)=>setUname(e.target.value)}
          />

          <label htmlFor="" className="form-label mt-4">
            User Email
          </label>
          <input type="text" value={uEmail} className="form-control " onChange={(e)=>setuEmail(e.target.value)} />

          <button
            type="submit"
            className="btn btn-secondary mt-4"
            // onClick={submitHande}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormHandling;

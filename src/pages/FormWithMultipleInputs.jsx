import React, { useState } from "react";

const FormWithMultipleInputs = () => {

    const [selectData, setSelectData] = useState("")



const handleSelect = (e) =>{
    setSelectData(e.target.value)

    console.log(e.target.value)
}



  const [userData, setUserData] = useState({
    Uname: "",
    Uemail: "",
    Upassword: ""
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    const name = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    console.log(selectData)
  };

  return (
    <div className="container form-wrapper bg-secondary">
      <div className="inner-form-wrapper">
        <h3>Form </h3>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="" className="form-label">
            User Name
          </label>
          <input
            type="text"
            value={userData.Uname}
            className="form-control"
            name="Uname"
            onChange={handleChange}
          />

          <label htmlFor="" className="form-label mt-4">
            User Email
          </label>
          <input
            type="text"
            className="form-control "
            value={userData.Uemail}
            name="Uemail"
            onChange={handleChange}
          />
          <label htmlFor="" className="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            className="form-control "
            value={userData.Upassword}
            name="Upassword"
            onChange={handleChange}
          />

          <select className="form-select mt-4" value={selectData} onChange={handleSelect}>
            <option value="">Select City...</option>
            <option value="Nanded">Nanded</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
          </select>

          <button type="submit" className="btn btn-secondary mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormWithMultipleInputs;

import React, { useState } from "react";

const LocalStorage = () => {
  const setLocalData = () => {
    localStorage.setItem("name", "SAYYED");
    localStorage.setItem("email", "irfan@gmail.com");
  };

  const removeData = () => {
    // localStorage.removeItem('name')
    // localStorage.removeItem('email')

    localStorage.clear();
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  const uname = localStorage.getItem("name");
  const uemail = localStorage.getItem("email");

  return (
    <div className="container p-4 mt-4 bg-light">
      <h3>Local Storage</h3>
      <hr />

      <button className="btn btn-success mt-4" onClick={setLocalData}>
        Set Item
      </button>
      <button className="btn btn-danger mt-4 ms-4" onClick={removeData}>
        Remove Item
      </button>

      <hr />
      <h1>Name: {uname}</h1>
      <h1>Email: {uemail}</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Enter username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LocalStorage;

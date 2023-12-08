import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditData = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  console.log(id);

  const baseURL = "https://6548ff4ddd8ebcd4ab2404f4.mockapi.io/crudapi";

  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: ""
  });
  const { name, mobile, email, address } = data;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get(`${baseURL}/${id}`);
      console.log(result.data);

      const { name, mobile, email, address } = result.data;

      setData({ name, mobile, email, address });
    } catch (err) {
      console.log(err);
    }
  };

  const handlehange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    // axios
    //   .post(baseURL, {
    //     name,
    //     mobile,
    //     email,
    //     address
    //   })
    //   .then((res) => {
    //     toast.success("Successfully Added");

    //     setData({
    //       name: "",
    //       mobile: "",
    //       email: "",
    //       address: ""
    //     });

    //     setTimeout(() => {
    //       navigate("/");
    //     }, 2000);

    //     console.log(res);
    //   });

    try {
      const res = await axios.put(`${baseURL}/${id}`, {
        name,
        mobile,
        email,
        address
      });

      toast.success("Data suuccessfully updated");

      setTimeout(() => {
        navigate("/");
      }, 1000);

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="border">
      <ToastContainer />
      <div className="bg-info py-2 px-4 d-flex justify-content-between">
        <h3 className="text-light">Edit User Details</h3>
      </div>

      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <label htmlFor="" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Enter username"
            name="name"
            required
            value={name}
            onChange={handlehange}
          />
          <label htmlFor="" className="form-label">
            Mobile Number
          </label>
          <input
            type="number"
            required
            className="form-control mb-4"
            placeholder="Enter mobile number"
            name="mobile"
            value={mobile}
            onChange={handlehange}
          />
          <label htmlFor="" className="form-label">
            User Email
          </label>
          <input
            type="email"
            required
            className="form-control mb-4"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handlehange}
          />
          <label htmlFor="" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Enter address"
            name="address"
            required
            value={address}
            onChange={handlehange}
          />
          <button type="submit" className="btn btn-secondary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditData;

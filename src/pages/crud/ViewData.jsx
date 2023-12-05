import React from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const ViewData = () => {

  const navigate = useNavigate()
  return (
    <div className="border">
      <div className="bg-info py-2 px-4 d-flex justify-content-between">
        <h3 className="text-light">User Details</h3>
        <button className="btn btn-success" onClick={()=>navigate('/AddData')}>Add User +</button>
      </div>

      <div className="">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Mobile No.</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>irfan</td>
              <td>7387194350</td>
              <td>@irfan@gmail.com</td>
              <td>Nanded</td>
              <th>
                <button className="btn btn-warning me-3">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </th>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ViewData;

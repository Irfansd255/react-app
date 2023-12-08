import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const ViewData = () => {
  const navigate = useNavigate();

  const baseURL = "https://6548ff4ddd8ebcd4ab2404f4.mockapi.io/crudapi";

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoader(true);
      const result = await axios.get(baseURL);
      console.log(result.data);
      setData(result.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };

  console.log(data);

  const deleteData = async (id) => {
    await axios.delete(
      `https://6548ff4ddd8ebcd4ab2404f4.mockapi.io/crudapi/${id}`
    );

    getData();

    console.log(id);
  };

  return (
    <div className="border">
      <div className="bg-info py-2 px-4 d-flex justify-content-between">
        <h3 className="text-light">User Details</h3>
        <button
          className="btn btn-success"
          onClick={() => navigate("/AddData")}
        >
          Add User +
        </button>
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
            {loader && (
              <Spinner animation="border" variant="danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            {data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <th>
                    <Link
                      className="btn btn-warning me-3"
                      to={`/EditData/${item.id}`}
                    >
                      Edit
                    </Link>

                    <button
                      className="btn btn-danger"
                      onClick={() => deleteData(item.id)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ViewData;

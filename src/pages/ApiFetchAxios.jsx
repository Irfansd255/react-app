import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiFetchAxios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  //   const getData = () => {
  //     axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
  //       console.log(result.data);
  //       setData(result.data);
  //     });
  //   };

  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res.data);
    setData(res.data);
  };

  console.log(data);
  return (
    <div className="container p-4 m-4">
      <h1>Get Data Axios</h1>
      <hr />
      <div className="">
        {data.map((item) => {
          return (
            <ul>
              <li>
                <span className="text-danger">ID : {item.id}</span>
              </li>
              <li>
                <span className="text-danger">Title : {item.title}</span>
              </li>
              <li>
                <span className="text-danger">Body : {item.body}</span>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ApiFetchAxios;

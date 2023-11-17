import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const PracticeState = () => {
  const data = [
    {
      id: 1,
      name: "Irfan",
      address: "Nanded"
    },

    {
      id: 2,
      name: "Zubair",
      address: "parbhani"
    },
    {
      id: 3,
      name: "sameer",
      address: "Pune"
    },
    {
      id: 4,
      name: "zain",
      address: "Bhokar"
    }
  ];

  const [state, setState] = useState(data);

  console.log(state);

  return (
    <div className="container bg-light p-4" style={{ height: "100vh" }}>
      <div className="row">
        {state.map((data, index) => {
          return (
            <div className="col-md-3" key={data.id}>
              <Card>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <h4>User ID : {data.id}</h4>
                  <h4>Name : {data.name}</h4>
                  <h4>Adress :{data.address} </h4>

                  <Button variant="primary">Update</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>


    </div>
  );
};

export default PracticeState;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const StateObj = () => {
  //   const data = {
  //     name: "Irfan",
  //     age: "27",
  //     address: "Nanded"
  //   };

  //   const [uData, setUdate] = useState(data);

  //   console.log(uData);

  const data = ["Irfan", "27", "Nanded","reactjs", "Male", "MCA"];

  const [Udata, setData] = useState(data);

  console.log(Udata);

  const updateHandler = () => {};

  return (
    <div className="container p-4 bg-light" style={{ height: "100vh" }}>
      <div className="row">
        <div className="col-md-3">
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <div className="row" >
                
                {
                    Udata.map((data, index)=>
                    {
                        return (
                            <div key={index}>
                                {data}
                            </div>
                        )
                    }
                    )
                }
              </div>

              <Button variant="primary" onClick={updateHandler}>
                Update
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StateObj;

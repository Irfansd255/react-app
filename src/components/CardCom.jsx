import React from "react";
import Card from "react-bootstrap/Card";
import ButtonComp from "./ButtonComp";

const CardCom = ({ myname, age, btnName, inputType }) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <h4>Name:{myname}</h4>
          <h4>Age:{age}</h4>
          <button className="btn btn-primary w-100 mt-3">{btnName}</button>
          <input type={inputType} className="form-control mt-3"/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCom;

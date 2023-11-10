import React from "react";
import Card from "react-bootstrap/Card";
import ButtonComp from "./ButtonComp";
import calc from "../images/calculator.png"

const CardCom = ({ myname, age, btnName, inputType, btnColor }) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <img src={calc} alt="" style={{height:"100", width:"100%"}} />
          <h4>Name:{myname}</h4>
          <h4>Age:{age}</h4>
          <button className= {`btn ${btnColor} w-100 mt-3`}>{btnName}</button>
          <input type={inputType} className="form-control mt-3"/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCom;

import React from "react";
import ButtonIN from "./ButtonIN";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../redux/slices/counterSlice";

const Card = () => {
  const dispatch = useDispatch();

  const show = useSelector((state) => {
    return state.data.myname;
  });

  return (
    <div>
      <h1>Name: {show} </h1>
      <button onClick={() => dispatch(changeName())}>Update Name</button>
      <hr />
      <ButtonIN />
    </div>
  );
};

export default Card;

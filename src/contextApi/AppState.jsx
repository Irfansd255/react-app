import React, { useState } from "react";
import { AppContext } from "./AppContext";

const AppState = (props) => {
  const name = "i am sayyed irfan";

  const [counter, setCounter] = useState(0)

  

  return (
    <div>
      <AppContext.Provider value={{ name, counter, setCounter }}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
};

export default AppState;

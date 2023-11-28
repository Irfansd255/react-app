import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PageNotFound = () => {

   const navigate = useNavigate()

  return (
    <div className="page-not-faund-wrapper text-center">
      <div>
        <h1>Page Not Found 404</h1>
        {/* <Link to="/home">go to home</Link> */}
        <button className="btn btn-info" onClick={()=>navigate('/home')}>Go to Home</button>
      </div>
    </div>
  );
};

export default PageNotFound;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const notifyError = () => toast.error("Invalid credential");
  const notifySuccess = () => toast.success("Successfully login");

  const navigate = useNavigate();

  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("Irfan");

  // useEffect(() => {
  //   console.log("Mount...", count);
  //   console.log('mount', name)

  // }, []);

  const [uname, setUname] = useState('');
  const [email, setemail] = useState('');
  const [nameErr, setnameErr] = useState(false);
  const [emailErr, setemailErr] = useState(false);


  const RegExEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const userHandler = (e) => {
    let name = e.target.value;

    if (name.length < 5) {
      setnameErr(true);
    } else {
      setnameErr(false);
    }
  };

  const emailHandler = (e) => {
    const email = e.target.value;
    if (!email.match(RegExEmail)) {
      setemailErr(true);
    } else {
      setemailErr(false);
    }
  };


const dataName = localStorage.getItem('name')
const dataEmail = localStorage.getItem('email')

const handledata = (e)=>{
e.preventDefault()

if(uname === dataName || email === dataEmail){
  console.log('success')
  notifySuccess();

  navigate('/home')
}
else{
  // alert('somthing went wrong...')
  notifyError();
  
}

}

  return (
    <div>
      <ToastContainer />
      <h1 className="text-center">Login page</h1>

      <div className="container w-50">
        {/* <form>
          <label htmlFor="" className="form-label">
            User Name
          </label>
          <input type="text" className="form-control mb-4" required onChange={userHandler} />
          {
            nameErr && <span className="text-danger">User name must be greater than 5 char</span>
          }
          
          <br />

          <label htmlFor="" className="form-label">
            User Email
          </label>
          <input type="email" className="form-control" required onChange={emailHandler} />
         {emailErr && <span className="text-danger">Invalid email</span>}<br />
          <button type="submit" className="btn btn-primary mt-4">
            Login
          </button>
        </form> */}

        <form onSubmit={handledata}>
          <label htmlFor="" className="form-label">
            User Name
          </label>
          <input type="text" className="form-control mb-4" value={uname} onChange={(e)=>setUname(e.target.value)} />

          <label htmlFor="" className="form-label">
            User Email
          </label>
          <input type="text" className="form-control" value={email} onChange={(e)=>setemail(e.target.value)} />
          <br />
          <button type="submit" className="btn btn-primary mt-4 me-5">
            Login
          </button>
          <Link to="/signup" className="btn btn-secondary mt-4">
            Register
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

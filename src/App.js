import "./assets/style/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AboutUs from "./pages/AboutUs";
import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";
import ApiFetch from "./pages/ApiFetch";
import Pducts from "./pages/Pducts";
import ApiPost from "./pages/ApiPost";
import ApiFetchAxios from "./pages/ApiFetchAxios";

function App() {

  const location = useLocation();

  const currentRoute = location.pathname



  return (
    <div className="App">
      {
        currentRoute !== "/" && currentRoute !== '/signup' ? <Header /> : <></> 
      }
      

      

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path ="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path= '/ApiFetch' element={<ApiFetch/>}/>
        <Route path= '/Pducts' element={<Pducts/>}/>
        <Route path= '/ApiPost' element={<ApiPost/>}/>
        <Route path= '/ApiFetchAxios' element={<ApiFetchAxios/>}/>


        

        
      </Routes>
    </div>
  );
}

export default App;

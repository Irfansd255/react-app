import { Route, Routes } from "react-router-dom";
import ViewData from "./pages/crud/ViewData";
import AddData from "./pages/crud/AddData";
import EditData from "./pages/crud/EditData";


function App() {
  return (
    <div className="App ">
      <div className="container p-5">
        <Routes>
          <Route path="/" element={<ViewData/>}/>
          <Route path="/AddData" element={<AddData/>}/>
          <Route path="/EditData" element={<EditData/>}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;

//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmpListing from "./components/EmpListing";
import EmpCreate from "./components/EmpCreate";
import EmpDetails from "./components/EmpDetails";
import EmpEdit from "./components/EmpEdit";

function App() {
  return (
    <div className="App">
      <h1>Hello Crud Opration</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />} />
          <Route path="/employee/create" element={<EmpCreate />} />
          <Route path="/employee/detail/:empid" element={<EmpDetails />} />
          <Route path="/employee/edit/:empid" element={<EmpEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

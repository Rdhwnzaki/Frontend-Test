import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import UpdateProduct from "./pages/UpdateProduct";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} replace="true" />
        <Route path="/home" element={<Home />} />
        <Route path="/update-product/:id_product" element={<UpdateProduct />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

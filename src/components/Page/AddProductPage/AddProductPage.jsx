import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../Atom/Button/ButtonComponent";
import InputComponent from "../../Atom/Input/InputComponent";
import NavbarComponent from "../../Atom/Navbar/NavbarComponent";
import { addProduct } from "../../../redux/action/product";

function AddProductPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name_product, setNameProduct] = useState("");
  const [stock_product, setStockProduct] = useState("");
  const [sold_product, setSoldProduct] = useState("");
  const [date_product, setDateProduct] = useState("");
  const [type_product, setTypeProduct] = useState("");
  const handleData = async (e) => {
    e.preventDefault();
    let data = {
      name_product,
      stock_product,
      sold_product,
      date_product,
      type_product,
    };
    try {
      dispatch(addProduct(data));
      Swal.fire("Success", "Tambah data produk success", "success");
      navigate("/home");
    } catch (err) {
      console.log(err);
      Swal.fire("Warning", "Tambah data produk failed", "error");
    }
  };
  return (
    <>
      <NavbarComponent
        color="success"
        text="Halaman Admin"
        className="text-white"
      />
      <div className="container my-5">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Nama Barang
            </label>
            <InputComponent
              name="name_product"
              onChange={(e) => setNameProduct(e.target.value)}
              value={name_product}
              style={{ width: "1290px" }}
              placeholder="Masukan Nama Produk"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Stok Barang
            </label>
            <InputComponent
              type="number"
              name="stock_product"
              onChange={(e) => setStockProduct(e.target.value)}
              value={stock_product}
              style={{ width: "1290px" }}
              placeholder="Masukan Stock Produk"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Jumlah Terjual
            </label>
            <InputComponent
              type="number"
              name="sold_product"
              onChange={(e) => setSoldProduct(e.target.value)}
              value={sold_product}
              style={{ width: "1290px" }}
              placeholder="Masukan Jumlah Terjual"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Tanggal Transaksi
            </label>
            <InputComponent
              type="date"
              name="date_product"
              onChange={(e) => setDateProduct(e.target.value)}
              value={date_product}
              style={{ width: "1290px" }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Jenis Barang
            </label>
            <InputComponent
              name="type_product"
              onChange={(e) => setTypeProduct(e.target.value)}
              value={type_product}
              style={{ width: "1290px" }}
              placeholder="Masukan Tipe Produk"
            />
          </div>
          <ButtonComponent
            type="submit"
            color="success"
            onClick={handleData}
            text="Submit"
          />
        </form>
      </div>
    </>
  );
}

export default AddProductPage;

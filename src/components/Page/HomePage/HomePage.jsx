/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment/moment";
import { Table } from "reactstrap";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/action/product";
import ButtonComponent from "../../Atom/Button/ButtonComponent";
import InputComponent from "../../Atom/Input/InputComponent";
import NavbarComponent from "../../Atom/Navbar/NavbarComponent";

function HomePage() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("name_product");
  const [sort, setSort] = useState("asc");
  const [inputData, setInputData] = useState({
    search: "",
  });
  useEffect(() => {
    console.log("checked", sortBy);
    getDataProduct();
  }, [sortBy, sort, inputData.search]);
  useEffect(() => {
    getDataProduct();
  }, []);
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    console.log(products);
  };
  const getDataProduct = async () => {
    axios
      .get(
        `${process.env.REACT_APP_URL_BASE}/products/get-product?sortby=${sortBy}&sort=${sort}&search=${inputData.search}`
      )
      .then((res) => {
        console.log(res.data.data);
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getDataProduct();
  }, []);
  const handleDeleteProduct = async (id_product) => {
    try {
      dispatch(deleteProduct(id_product));
      Swal.fire("Success", "Delete product success", "success");
      window.location.reload(false);
    } catch (err) {
      console.log(err);
      Swal.fire("Warning", "Delete data produk failed", "error");
    }
  };
  return (
    <>
      <NavbarComponent
        color="success"
        text="Halaman Admin"
        className="text-white"
      />
      <div className="container">
        <h6 className="mt-5">Data Products</h6>
        <div className="mb-4">
          <div
            className={`btn ${
              sortBy === "name_product" ? "btn-success" : "btn-outline-success"
            } ms-1`}
            onClick={() => setSortBy("name_product")}
            style={{ width: "100px", borderRadius: "10px" }}
          >
            <h6 className=" mt-1">Nama Barang</h6>
          </div>
          <div
            className={`btn ${
              sortBy === "sold_product" ? "btn-success" : "btn-outline-success"
            } ms-3`}
            onClick={() => setSortBy("sold_product")}
            style={{ width: "100px", borderRadius: "10px" }}
          >
            <h6 className=" mt-1">Barang Terjual</h6>
          </div>
          <div
            className={`btn ${
              sortBy === "date_product" ? "btn-success" : "btn-outline-success"
            } ms-3`}
            onClick={() => setSortBy("date_product")}
            style={{ width: "100px", borderRadius: "10px" }}
          >
            <h6 className=" mt-1">Tanggal Transaksi</h6>
          </div>
          <div
            className={`btn ${
              sort === "asc" ? "btn-success" : "btn-outline-success"
            } ms-5`}
            onClick={() => setSort("asc")}
            style={{ width: "100px", borderRadius: "10px" }}
          >
            <h6 className=" mt-1">ASC</h6>
          </div>
          <div
            className={`btn ${
              sort === "desc" ? "btn-success" : "btn-outline-success"
            } ms-3`}
            onClick={() => setSort("desc")}
            style={{ width: "100px", borderRadius: "10px" }}
          >
            <h6 className=" mt-1">DESC</h6>
          </div>
        </div>
        <div>
          <InputComponent
            type="text"
            className="form-control  rounded-3 ms-5 mb-5"
            value={inputData.search}
            name="search"
            onChange={handleChange}
            placeholder="Search"
            style={{ width: "530px" }}
          />
        </div>
        <ButtonComponent
          color="success"
          text="Tambah Data Barang"
          onClick={() => navigate(`/add-product`)}
        />
        <Table striped>
          <thead>
            <tr>
              <th scope="col">Nama Barang</th>
              <th scope="col">Stok</th>
              <th scope="col">Jumlah Terjual</th>
              <th scope="col">Tanggal Transaksi</th>
              <th scope="col">Jenis Barang</th>
              <th scope="col">Action</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id_product}>
                <td>{item.name_product}</td>
                <td>{item.stock_product}</td>
                <td>{item.sold_product}</td>
                <td>{moment.utc(item.date_product).format("DD/MM/YYYY")}</td>
                <td>{item.type_product}</td>
                <td>
                  <ButtonComponent
                    color="warning"
                    text="Update"
                    className="text-white"
                    onClick={() =>
                      navigate(`/update-product/${item.id_product}`)
                    }
                  />
                </td>
                <td>
                  <ButtonComponent
                    color="danger"
                    text="Delete"
                    className="text-white"
                    onClick={() => handleDeleteProduct(item.id_product)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default HomePage;

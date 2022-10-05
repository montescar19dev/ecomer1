import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, filterProducts, filterCategory } from "../store/slices/products.slices";
import "../assests/styles/home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Accordion } from 'react-bootstrap';
import { addToCart } from '../store/slices/cart.slices';

const baseUrl = "https://ecommerce-api-react.herokuapp.com/api/v1";

const Home = () => {
  const [search, setSearch] = useState("");

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getFilterProducts = () => {
    dispatch(filterProducts(search));
  };

  useEffect(() => {
    axios
      .get(baseUrl + "/products/categories")
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  const categoryFilter = (id) => {
    dispatch(filterCategory(id));
  };

  const goDetail = (id) => {
    navigate(`/product/${id}`);
  };

  const addCart = (id)=>{
    const productToAdd={
        id:id,
        quantity:1
    }
    dispatch(addToCart(productToAdd));
}

  return (
    <div className="products-container ">
      <div className="input-group mb-3">
        <input
          type="text"
          id="search-bar"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="form-control"
          placeholder="Search"
        />
        <button
          id="search-bar"
          onClick={getFilterProducts}
          className=" btn btn-outline-info"
        >
          Search
        </button>
      </div>
      <div className="categories-container">
        
        <Accordion defaultActiveKey="1" style={{width: "fit-content"}}>
          <Accordion.Item eventKey="0">
            <Accordion.Header> <i className="fa-solid fa-filter"></i></Accordion.Header>
            <Accordion.Body>
                {categories.map((category) => (
                <div
                key={category.id}
                onClick={() => categoryFilter(category.id)}
                
                >
                {category.name}
                </div>
            ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="cards-container">
        {products.map((product) => (
          <li key={product.id} className="product-wrapper">
            <div className="product-container">
              <div
                className="product-image"
                onClick={() => goDetail(product.id)}
              >
                <img src={product.productImgs[0]} alt="" />
              </div>

              <div className="product-info">
                <h3>{product.title}</h3>
                <div>
                  Price:
                  <p>
                    <b>$ {product.price}</b>
                  </p>
                </div>
                <button className="btn btn-primary" onClick={() => addCart(product.id)}>Buy</button>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Home;

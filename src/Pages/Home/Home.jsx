// import React from "react";
import { useEffect, useState } from "react";
import HeroComponent from "../../Components/HeroComponent/Hero.Component";
import ProductComponent from "../../Components/Products/Product.Component";
import axios from "axios";
import "./home.css";
const Home = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setproducts(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <HeroComponent />
      <div className="product_wrapper">
        <div className="product_catogory">
          <span>Best Seller</span>
          <span>New Arrivals</span>
          <span>Most Popular</span>
        </div>
        <div className="myProducts">
          {products.map((prod) => (
            <ProductComponent key={prod.id} details={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

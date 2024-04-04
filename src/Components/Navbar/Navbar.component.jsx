// import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
// import { FiUser } from "react-icons/fi";
// import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbarcomponent = () => {
  return (
    <div>
      <nav className="navWrapper d-flex align-items-center justify-content-between">
        <section className="section_right d-flex align-items-center">
          <div className="main_logo">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="nav_links">
            <ul className="nav_items d-flex gap-4 m-0">
              <li className="nav_item1">
                <Link to="/" className="navlink">
                  Home
                </Link>
              </li>
              <li className="nav_item2">
                <Link to="/shop" className="navlink">
                  Shop
                </Link>
              </li>
              <li className="nav_item3">
                <Link to="/contact" className="navlink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="section_left d-flex gap-4">
          <CiSearch />
          <CiUser />
          <CiShoppingCart />
        </section>
      </nav>
    </div>
  );
};

export default Navbarcomponent;

// import React from "react";
import "./footer.css";
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <section className="main_upper">
        <div className="upper_child_1 child">
          <span>Clothes</span>
          <ul>
            <li>Shirts</li>
            <li>T-shirts</li>
            <li>Kurthas</li>
            <li>Hoddies</li>
          </ul>
        </div>
        <div className="upper_child_2 child">
          <span>Legal</span>
          <ul>
            <li>
              <a href="/legacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/refund">Refund Policy</a>
            </li>
            <li>
              <a href="/cookie_policy">Cookie Policy</a>
            </li>
            <li>
              <a href="/terms">Terms & conditions</a>
            </li>
          </ul>
        </div>
        <div className="upper_child_3 child">
          <span>Conatct details</span>
          <ul>
            <li>
              Mobile Number:<span>123456789</span>
            </li>
            <li>
              Email Id:<span>rahulmunj5@gmail.com</span>
            </li>
            <li>
              Follow Us On:
              <div className="social">
                <span>
                  <AiFillInstagram />
                </span>
                <span>
                  <AiFillFacebook />
                </span>
                <span>
                  <AiFillYoutube />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="main_lower">
        <span>@copyright {date}-rahulmunj5@gmail.com All Rights Reserved</span>
      </section>
    </footer>
  );
};

export default Footer;

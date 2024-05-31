import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav>
        <h2>
          <span>T</span>oğrul <span>İ</span>smayıllı
        </h2>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>

          <li>
            <Link to={"/services"}>Services</Link>
          </li>

          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
  return (
    <header className="nav container-wrapper">
      <div className="nav-brand">
        <h3 className="text-ligh-blue">Landkit</h3>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/apicall">API Call</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>Documentation</li>
        </ul>
      </div>
      <div className="nav-action-btn">
        <Button
          type="sm"
          text="Buy Now"
          bgColor="bg-ligh-blue"
          textColor="text-light-grey"
        />
      </div>
    </header>
  );
};

export default Header;

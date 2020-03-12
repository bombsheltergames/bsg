// Framework Imports
import React from "react";
import { Link } from "react-router-dom";
// Style Imports
import "./header.css";
// Component Imports
import Logo from "Components/Logo";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-logoWrap">
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </header>
  );
};

export default Header;

// Framework Imports
import React from "react";
// Style Imports
import "./header.css";
// Component Imports
import Logo from "Components/Logo";

const Header = props => {
  return (
    <header className="Header">
      <div className="Header-logoWrap">
        <Logo />
      </div>
    </header>
  );
};

export default Header;

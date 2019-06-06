// Framework Imports
import React from "react";
// Style Imports
import "styles/layout/header.css";
// Component Imports
import Logo from "components/logo";

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

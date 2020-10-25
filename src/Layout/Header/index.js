// Framework Imports
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Style Imports
import "./header.css";
// Component Imports
import Logo from "Components/Logo";

const Header = props => {
  const { spinLogo } = props;
  return (
    <header className="Header">
      <div className="Header-logoWrap">
        <Link to="/">
          <Logo spinLogo={spinLogo} />
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  spinLogo: PropTypes.bool,
};

Header.defaultProps = {
  spinLogo: false,
};

export default Header;

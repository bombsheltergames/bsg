// Framework Imports
import React from "react";
import PropTypes from "prop-types";
// Style Imports
import "./hero.css";
// Component Imports
import Image from "Components/Image";

const Hero = props => {
  const { fullscreen, imageSrc, placeholder, children } = props;
  return (
    <nav className={`Hero ${fullscreen ? "Hero--fullscreen" : "Hero--banner"}`}>
      <Image src={imageSrc} placeholder={placeholder} />
      {children && <div className="Hero-content">{children}</div>}
    </nav>
  );
};

Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  fullscreen: PropTypes.bool,
  children: PropTypes.node,
};

Hero.defaultProps = {
  placeholder: null,
  fullscreen: false,
  children: undefined,
};

export default Hero;

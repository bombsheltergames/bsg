// Framework Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
// Style Imports
import "./hero.css";
// Component Imports
import Image from "Components/Image";

class Hero extends Component {
  render() {
    return (
      <nav
        className={`Hero ${
          this.props.fullscreen ? "Hero--fullscreen" : "Hero--banner"
        }`}
      >
        <Image src={this.props.imageSrc} placeholder={this.props.placeholder} />
        {this.props.children && (
          <div className="Hero-content">{this.props.children}</div>
        )}
      </nav>
    );
  }
}

Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  fullscreen: PropTypes.bool,
};

Hero.defaultProps = {
  fullscreen: false,
};

export default Hero;

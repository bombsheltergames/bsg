// Framework Imports
import React from "react";
import PropTypes from "prop-types";
// Style Imports
import "./mainSection.css";
// Image Imports
import headerImg from "data/images/dividers/header.png";
import footerImg from "data/images/dividers/footer.png";

const MainSection = props => {
  const cssClasses = `MainSection${props.alt ? " MainSection--alt" : ""}${
    props.fadeIn ? " MainSection--fadeIn" : ""
  }${props.fadeBg ? " MainSection--fadeBg" : ""}`;
  return (
    <section className={cssClasses} id={props.id}>
      {props.topDivider && (
        <img className="MainSection-headerImg" alt="" src={headerImg} />
      )}
      {props.children}
      {props.bottomDivider && (
        <img className="MainSection-footerImg" alt="" src={footerImg} />
      )}
    </section>
  );
};

MainSection.defaultProps = {
  alt: false,
  hasDividers: false,
};

MainSection.propTypes = {
  alt: PropTypes.bool,
  hasDividers: PropTypes.bool,
};

export default MainSection;

// Framework Imports
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// Style Imports
import "./mainSection.css";
// Image Imports
import headerImg from "data/images/dividers/header.png";
import footerImg from "data/images/dividers/footer.png";

const MainSection = props => {
  const {
    alt,
    fadeIn,
    fadeBg,
    topDivider,
    bottomDivider,
    expanded,
    id,
    children,
  } = props;
  const cssClasses = clsx([
    "MainSection",
    alt && "MainSection--alt",
    fadeIn && "MainSection--fadeIn",
    fadeBg && "MainSection--fadeBg",
    expanded && "MainSection--expanded",
  ]);
  return (
    <section className={cssClasses} id={id}>
      {topDivider && (
        <img className="MainSection-headerImg" alt="" src={headerImg} />
      )}
      {children}
      {bottomDivider && (
        <img className="MainSection-footerImg" alt="" src={footerImg} />
      )}
    </section>
  );
};

MainSection.defaultProps = {
  alt: false,
  fadeIn: false,
  fadeBg: false,
  id: null,
  topDivider: false,
  bottomDivider: false,
};

MainSection.propTypes = {
  alt: PropTypes.bool,
  fadeIn: PropTypes.bool,
  fadeBg: PropTypes.bool,
  id: PropTypes.string,
  topDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MainSection;

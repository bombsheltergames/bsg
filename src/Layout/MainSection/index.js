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
    bottomDivider,
    children,
    expanded,
    fadeIn,
    fadeBg,
    id,
    noPadding,
    topDivider,
  } = props;

  const cssClasses = clsx([
    "MainSection",
    alt && "MainSection--alt",
    fadeIn && "MainSection--fadeIn",
    fadeBg && "MainSection--fadeBg",
    expanded && "MainSection--expanded",
    noPadding && "MainSection--noPadding",
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

MainSection.propTypes = {
  alt: PropTypes.bool,
  bottomDivider: PropTypes.bool,
  children: PropTypes.node.isRequired,
  fadeIn: PropTypes.bool,
  fadeBg: PropTypes.bool,
  id: PropTypes.string,
  noPadding: PropTypes.bool,
  topDivider: PropTypes.bool,
};

MainSection.defaultProps = {
  alt: false,
  bottomDivider: false,
  fadeIn: false,
  fadeBg: false,
  id: null,
  noPadding: false,
  topDivider: false,
};

export default MainSection;

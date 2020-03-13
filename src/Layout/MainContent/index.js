// Framework Imports
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// Style Imports
import "./mainContent.css";

const MainContent = props => {
  const { noMargin, retroFont, children } = props;
  const cssClasses = clsx([
    "MainContent",
    noMargin && "MainContent--noMargin",
    retroFont && "u-retroFont",
  ]);
  return <div className={cssClasses}>{children}</div>;
};

MainContent.propTypes = {
  noMargin: PropTypes.bool,
  retroFont: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

MainContent.defaultProps = {
  noMargin: false,
  retroFont: false,
};

export default MainContent;

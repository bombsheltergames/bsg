// Framework Imports
import React from "react";
import clsx from "clsx";
// Style Imports
import "./mainContent.css";

const MainContent = props => {
  const { retroFont, children } = props;
  const cssClasses = clsx(["MainContent", retroFont && "u-retroFont"]);
  return <div className={cssClasses}>{children}</div>;
};

export default MainContent;

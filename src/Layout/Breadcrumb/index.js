//Framework Imports
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Style Imports
import "./breadcrumb.css";
// Component Imports
import MainContent from "Layout/MainContent";

const Breadcrumb = props => {
  const { pageTitle } = props;
  return (
    <nav className="Breadcrumb">
      <MainContent noMargin>
        <Link to="/">{`< Home`}</Link> | {pageTitle}
      </MainContent>
    </nav>
  );
};

Breadcrumb.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Breadcrumb;

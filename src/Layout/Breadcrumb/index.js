//Framework Imports
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Style Imports
import "./breadcrumb.css";
// Component Imports
import MainContent from "Layout/MainContent";

const Breadcrumb = props => {
  const { pages } = props;

  return (
    <nav className="Breadcrumb">
      <MainContent noMargin>
        <Link to="/">{`< Home`}</Link>
        {pages.map(page => {
          if (pages.indexOf(page) === pages.length - 1) {
            return (
              <Fragment key={page.title}>
                {` | `}
                {page.title}
              </Fragment>
            );
          }
          return (
            <Fragment key={page.href}>
              {` | `}
              <Link to={page.href}>{page.title}</Link>
            </Fragment>
          );
        })}
      </MainContent>
    </nav>
  );
};

Breadcrumb.propTypes = {
  pages: PropTypes.array.isRequired,
};
/* Example of pages format:
pages = [
  {
    title: "Blog",
    href: "/blog"
  },
  {
    title: "Blog Post Title!",
    href: "/post/20-001"
  }
]
*/
export default Breadcrumb;

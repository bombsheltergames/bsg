// Framework Imports
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import Tabletop from "tabletop";
// Style Imports
import "./blog.css";
// Component Imports
import MainSection from "Components/MainSection";
import MainContent from "Components/MainContent";
import BlogEntry from "./BlogEntry";

const preview = window.location.search.includes("preview");

const publicSpreadsheetUrl =
  "https://docs.google.com/spreadsheets/d/1x1PaRIhNhrZl5IpRgv5SzbT3kNLERBu_i-uVjdVhwJo/edit#gid=0";

export const initBlog = callback => {
  return Tabletop.init({
    key: publicSpreadsheetUrl,
    simpleSheet: true,
  }).then((data, tabletop) => {
    const filteredData = data
      .filter(post =>
        preview ? post.status !== "HIDDEN" : post.status === "ACTIVE"
      )
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    callback(filteredData);
  });
};

const Blog = props => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    posts,
    entriesToShow,
    showViewAll,
    showPagination,
    clipPosts,
  } = props;
  let { page } = useParams();
  page = Number(page);

  useEffect(() => {
    if (page) {
      setCurrentPage(page);
    }
  }, [page]);

  if (posts.length < 1) {
    return <></>;
  }

  const start = (currentPage - 1) * entriesToShow;
  const end = currentPage * entriesToShow;
  const firstPage = currentPage === 1;
  const lastPage = currentPage * entriesToShow > posts.length;
  const displayViewAllLink = posts.length > entriesToShow && showViewAll;
  const displayPagination = posts.length > entriesToShow && showPagination;

  const prevLinkClasses = clsx([
    "Blog-pagination-link",
    firstPage && "is-disabled",
  ]);
  const nextLinkClasses = clsx([
    "Blog-pagination-link",
    lastPage && "is-disabled",
  ]);
  const cancelLink = (cancel, e) => {
    if (cancel) {
      e.preventDefault();
    }
  };
  return (
    <MainSection>
      <MainContent>
        <div className="Blog">
          <div className="Blog-entries">
            {posts.slice(start, end).map((post, i) => (
              <BlogEntry post={post} key={i} clipPosts={clipPosts} />
            ))}
          </div>
          {displayPagination && (
            <div className="Blog-pagination">
              <Link
                to={`/blog/${Number(currentPage) - 1}${
                  preview ? "?preview" : ""
                }`}
                className={prevLinkClasses}
                onClick={cancelLink.bind(this, firstPage)}
              >
                {`< Prev`}
              </Link>
              <span>
                Viewing {start + 1}-{end} of {posts.length}
              </span>
              <Link
                to={`/blog/${Number(currentPage) + 1}${
                  preview ? "?preview" : ""
                }`}
                className={nextLinkClasses}
                onClick={cancelLink.bind(this, lastPage)}
              >
                {`Next >`}
              </Link>
            </div>
          )}
          {displayViewAllLink && (
            <div className="Blog-viewAll">
              <Link to="/blog/1">View All Blog Posts</Link>
            </div>
          )}
        </div>
      </MainContent>
    </MainSection>
  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  entriesToShow: PropTypes.number,
  showViewAll: PropTypes.bool,
  showPagination: PropTypes.bool,
  clipPosts: PropTypes.bool,
};

Blog.defaultProps = {
  entriesToShow: 10,
  showViewAll: false,
  showPagination: false,
  clipPosts: false,
};

export default Blog;

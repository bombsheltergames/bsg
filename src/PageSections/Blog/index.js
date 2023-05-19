// Framework Imports
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import Tabletop from "tabletop";
// Style Imports
import "./blog.css";
// Component Imports
import BlogEntry from "./BlogEntry";
import MainSection from "Layout/MainSection";
import MainContent from "Layout/MainContent";

const preview = window.location.search.includes("preview");

const publicSpreadsheetUrl =
  "https://docs.google.com/spreadsheets/d/1x1PaRIhNhrZl5IpRgv5SzbT3kNLERBu_i-uVjdVhwJo/edit#gid=0";

export const initBlog = (callback, postId) => {
  return Tabletop.init({
    key: publicSpreadsheetUrl,
    simpleSheet: true,
  }).then((data, tabletop) => {
    let filteredData = data
      .filter(post =>
        preview ? post.status !== "HIDDEN" : post.status === "ACTIVE"
      )
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    callback(filteredData);
  });
};

const Blog = props => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activePosts, setActivePosts] = useState([]);
  const {
    posts,
    entriesToShow,
    showViewAll,
    showPagination,
    clipPosts,
    useSections,
  } = props;
  let { page, postId } = useParams();

  page = Number(page);

  useEffect(() => {
    if (page) {
      setCurrentPage(page);
    }
  }, [page]);

  useEffect(() => {
    if (postId) {
      const updatedPosts = [...posts].filter(post => {
        return post.id === postId;
      });
      setActivePosts(updatedPosts);
    } else {
      setActivePosts(posts);
    }
  }, [posts, postId]);

  if (activePosts.length < 1) {
    return <></>;
  }

  const start = (currentPage - 1) * entriesToShow;
  const end = currentPage * entriesToShow;
  const firstPage = currentPage === 1;
  const lastPage = currentPage * entriesToShow > activePosts.length;
  const displayViewAllLink = activePosts.length > entriesToShow && showViewAll;
  const displayPagination =
    activePosts.length > entriesToShow && showPagination;

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
    <div className="Blog">
      <div className="Blog-entries">
        {activePosts.slice(start, end).map((post, i) => {
          if (useSections) {
            const useDividers = i % 2 === 1;
            return (
              <MainSection
                topDivider={useDividers}
                alt={useDividers}
                bottomDivider={useDividers}
                key={post.id}
              >
                <MainContent>
                  <BlogEntry
                    post={post}
                    link={!postId}
                    clipPosts={clipPosts}
                    key={i}
                  />
                </MainContent>
              </MainSection>
            );
          }
          return (
            <BlogEntry
              post={post}
              link={!postId}
              clipPosts={clipPosts}
              key={i}
            />
          );
        })}
      </div>
      {displayPagination && (
        <div className="Blog-pagination">
          <Link
            to={`/blog/${Number(currentPage) - 1}${preview ? "?preview" : ""}`}
            className={prevLinkClasses}
            onClick={cancelLink.bind(this, firstPage)}
          >
            {`< Prev`}
          </Link>
          <span>
            Viewing {start + 1}-{end} of {activePosts.length}
          </span>
          <Link
            to={`/blog/${Number(currentPage) + 1}${preview ? "?preview" : ""}`}
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

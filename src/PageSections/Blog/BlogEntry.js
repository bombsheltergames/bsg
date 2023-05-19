// Framework Imports
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
// Component Imports
import Button from "Components/Button";
// Style Imports
import "./blogEntry.css";

const BlogEntry = props => {
  const [clipped, setClipped] = useState(false);
  const { post, link, clipPosts } = props;

  useEffect(() => {
    if (!clipped && clipPosts) {
      setClipped(clipPosts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showPost = () => {
    setClipped(false);
  };

  const blogBodyCssClasses = clsx([
    "BlogEntry-body",
    clipped && "BlogEntry-body--clipped",
  ]);

  return (
    <div className="BlogEntry">
      <div className="BlogEntry-titleBar">
        <h3>
          {link ? (
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          ) : (
            post.title
          )}
        </h3>
        <p className="BlogEntry-author">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </p>
      </div>
      <div className={blogBodyCssClasses}>
        {post.subtitle && (
          <h4 className="BlogEntry-subtitle">{post.subtitle}</h4>
        )}
        <ReactMarkdown source={post.body} />
      </div>
      {clipped && (
        <Button onClick={showPost} size="small" type="ghost">
          View Entire Post
        </Button>
      )}
    </div>
  );
};

BlogEntry.propTypes = {
  post: PropTypes.object.isRequired,
  clipPosts: PropTypes.bool,
};

BlogEntry.defaultProps = {
  clipPosts: false,
};

export default BlogEntry;

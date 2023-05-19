// Framework Imports
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// Component Imports
import Button from 'Components/Button';
import Tag from 'Components/Tag';
// Style Imports
import './mediumBlogEntry.css';

const MediumBlogEntry = ({ clipPosts, post, showTags }) => {
  const [clipped, setClipped] = useState(false);

  useEffect(() => {
    if (!clipped && clipPosts) {
      setClipped(clipPosts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showPost = () => {
    setClipped(false);
  };

  const hidePost = () => {
    setClipped(true);
  };

  const blogBodyCssClasses = clsx([
    'MediumBlogEntry-body',
    clipped && 'MediumBlogEntry-body--clipped',
  ]);

  return (
    <div className="MediumBlogEntry">
      <div className="MediumBlogEntry-titleBar">
        <h3>
          <a href={post.link} target="_blank">
            {post.title}
          </a>
        </h3>
        <p className="MediumBlogEntry-author">
          <span>{post.author}</span>
          <span>{post.pubDate}</span>
        </p>
        {showTags && post.categories.length > 0 && (
          <div className="MediumBlogEntry-tagsWrap">
            {post.categories.map(category => (
              <Tag key={category}>{category}</Tag>
            ))}
          </div>
        )}
      </div>
      <div
        className={blogBodyCssClasses}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      {clipPosts && (
        <div className="MediumBlogEntry-buttonWrap">
          {clipped && (
            <Button onClick={showPost} size="small" type="ghost">
              View Entire Post
            </Button>
          )}
          {!clipped && (
            <Button onClick={hidePost} size="small" type="ghost">
              Collapse Post
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

MediumBlogEntry.propTypes = {
  clipPosts: PropTypes.bool,
  post: PropTypes.object.isRequired,
  showTags: PropTypes.bool,
};

MediumBlogEntry.defaultProps = {
  clipPosts: false,
  showTags: false,
};

export default MediumBlogEntry;

// Framework Imports
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// Style Imports
import './mediumBlog.css';
// Component Imports
import MediumBlogEntry from './MediumBlogEntry';

const MediumBlog = props => {
  const { clipPosts, entriesToShow, showTags } = props;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!posts.length) {
      fetchPosts().then(({ data }) => {
        setPosts(data.items.slice(0, entriesToShow));
      });
    }
  }, [entriesToShow, posts]);

  const fetchPosts = () =>
    axios.get(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bsheltergames`
    );

  return (
    <div className="MediumBlog">
      <div className="MediumBlog-entries">
        {posts.map((post, i) => (
          <MediumBlogEntry
            clipPosts={clipPosts}
            post={post}
            showTags={showTags}
            key={i}
          />
        ))}
      </div>
      <div className="MediumBlog-viewAll">
        <a href="https://bsheltergButtonmes.medium.com/">
          View All Blog Posts on Medium
        </a>
      </div>
    </div>
  );
};

MediumBlog.propTypes = {
  clipPosts: PropTypes.bool,
  entriesToShow: PropTypes.number,
  showTags: PropTypes.bool,
  useSections: PropTypes.bool,
};
MediumBlog.defaultProps = {
  clipPosts: false,
  entriesToShow: 2,
  showTags: false,
  useSections: false,
};

export default MediumBlog;

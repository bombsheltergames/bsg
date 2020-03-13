// Framework Imports
import React, { useState, useEffect } from "react";
// Component Imports
import AutoScrollTop from "Layout/AutoScrollTop";
import Header from "Layout/Header";
import Blog, { initBlog } from "PageSections/Blog";
import Footer from "Layout/Footer";
// Style Imports
import "./blogPage.css";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    if (blogPosts.length === 0) {
      initBlog(setBlogPosts);
    }
  }, [blogPosts.length]);
  return (
    <>
      <AutoScrollTop />
      <Header />
      <div className="BlogPage">
        <h1>Into the Depths...</h1>
        <Blog posts={blogPosts} entriesToShow={10} showPagination />
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;

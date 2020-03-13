// Framework Imports
import React, { useState, useEffect } from "react";
// Style Imports
import "./blogPage.css";
// Component Imports
import AutoScrollTop from "Layout/AutoScrollTop";
import Header from "Layout/Header";
import Blog, { initBlog } from "PageSections/Blog";
import Footer from "Layout/Footer";
import Breadcrumb from "../../Layout/Breadcrumb";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    if (blogPosts.length === 0) {
      initBlog(setBlogPosts);
    }
  }, [blogPosts.length]);
  return (
    <div className="BlogPage">
      <AutoScrollTop />
      <Header />
      <Breadcrumb pageTitle="Blog" />
      <Blog useSections posts={blogPosts} entriesToShow={10} showPagination />
      <Footer />
    </div>
  );
};

export default BlogPage;

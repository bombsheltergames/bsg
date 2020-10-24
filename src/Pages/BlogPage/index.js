// Framework Imports
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const defaultPages = [
    {
      href: "/blog/",
      title: "Blog",
    },
  ];
  const [pages, setPages] = useState(defaultPages);
  const { postId } = useParams();
  useEffect(() => {
    if (blogPosts.length === 0) {
      initBlog(setBlogPosts);
    }
    if (!postId) {
      setPages(defaultPages);
    }
    if (postId && blogPosts.length > 0) {
      const updatedPages = [...defaultPages];
      updatedPages.push({ href: `/blog/${postId}`, title: blogPosts[0].title });
      setPages(updatedPages);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogPosts.length, postId]);

  return (
    <div className="BlogPage">
      <AutoScrollTop />
      <Header />
      <Breadcrumb pages={pages} />
      <Blog useSections posts={blogPosts} entriesToShow={10} showPagination />
      <Footer showContactForm showContactInfo />
    </div>
  );
};

export default BlogPage;

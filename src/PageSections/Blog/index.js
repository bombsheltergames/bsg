// Framework Imports
import React, { Component } from "react";
import Tabletop from "tabletop";
import ReactMarkdown from "react-markdown";
// Style Imports
import "./blog.css";
// Component Imports
import MainSection from "Components/MainSection";
import MainContent from "Components/MainContent";

const preview = window.location.search.includes("preview");

const publicSpreadsheetUrl =
  "https://docs.google.com/spreadsheets/d/1x1PaRIhNhrZl5IpRgv5SzbT3kNLERBu_i-uVjdVhwJo/edit#gid=0";

class Blog extends Component {
  state = {
    data: [],
  };
  componentWillMount() {
    this.init();
  }
  init = () => {
    Tabletop.init({
      key: publicSpreadsheetUrl,
      simpleSheet: true,
    })
      .then((data, tabletop) => {
        this.setState({ data });
      })
      .catch(error => {
        return;
      });
  };
  render() {
    const { data } = this.state;
    const activePosts = data
      .filter(post => {
        // yeah, this is dumb, but apparently importing google sheets doesn't support real booleans
        return preview ? post : post.active === "TRUE";
      })
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    if (activePosts.length < 1) {
      return <></>;
    }
    return (
      <MainSection>
        <MainContent>
          <div className="Blog">
            {activePosts.map(post => (
              <div className="Blog-entry">
                <div className="Blog-titleBar">
                  <h3>{post.title}</h3>
                  <span>
                    {post.author} | {post.date}
                  </span>
                  {post.subtitle && (
                    <h4 className="Blog-subtitle">{post.subtitle}</h4>
                  )}
                </div>
                <div>
                  <ReactMarkdown source={post.body} />
                </div>
              </div>
            ))}
          </div>
        </MainContent>
      </MainSection>
    );
  }
}

export default Blog;

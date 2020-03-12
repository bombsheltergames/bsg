import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogPage from "Pages/BlogPage";
import Homepage from "Pages/Homepage";
import AutoScrollTop from "Layout/AutoScrollTop";

export default function Routes() {
  return (
    <Router>
      <AutoScrollTop />
      <Switch>
        <Route path="/blog/:page">
          <BlogPage />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

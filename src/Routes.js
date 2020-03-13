import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BlogPage from "Pages/BlogPage";
import Homepage from "Pages/Homepage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/blog/:page?" component={BlogPage} />
      </Switch>
    </BrowserRouter>
  );
}

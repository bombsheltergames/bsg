import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BlogPage from 'Pages/BlogPage';
import Homepage from 'Pages/Homepage';
import PressKit from 'Pages/PressKit';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/presskit" component={PressKit} />
        <Route path={['/blog/:page?', '/post/:postId']} component={BlogPage} />
      </Switch>
    </BrowserRouter>
  );
}

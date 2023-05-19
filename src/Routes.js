import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from 'Pages/Homepage';
import PressKit from 'Pages/PressKit';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/presskit" component={PressKit} />
      </Switch>
    </BrowserRouter>
  );
}

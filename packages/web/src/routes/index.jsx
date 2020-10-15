import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Users from "../pages/Users";
import Projects from "../pages/Projects";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
};

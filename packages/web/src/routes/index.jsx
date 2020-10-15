import React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

import Home from "../pages/Home";
import Users from "../pages/Users";
import Projects from "../pages/Projects";

export default () => {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/usuarios">
          <button>Usuarios</button>
        </Link>
        <Link to="/projetos">
          <button>Projetos</button>
        </Link>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/usuarios" component={Users} />
        <Route path="/projetos" component={Projects} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

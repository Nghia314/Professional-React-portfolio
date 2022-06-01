import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navtab from "../Navtab/index";
import About from "../About/index";
import Contact from "../Contact/index";
import Portfolio from "../Portfolio/index";
import Resume from "../Resume/index";

class Header extends Component {
  render() {
    return (
      <HashRouter>
        <Header>
          <Navtab />
        </Header>

        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/about" />} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
        </div>
      </HashRouter>
    )
  }
}


export default Header;

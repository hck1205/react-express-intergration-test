import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, withRouter } from 'react-router-dom';

import Beer from './pages/Beer';
import Main from './pages/Main';

import "babel-runtime/regenerator";
import "webpack-hot-middleware/client?reload=true";
import "./index.html";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path={"/"} component={ Main } />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
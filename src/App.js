import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import Investors from "./Investors";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/investors" />
          </Route>
          <Route exact path="/investors">
            <Investors />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

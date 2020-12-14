import React from "react";
import {
  StylesProvider,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import Layout from "./Layout";
import Investors from "./Investors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4970f8",
    },
    secondary: {
      main: "#000000",
    },
  },
});

function App() {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Redirect to="/investors" />
              </Route>
              <Route exact path="/investors">
                <Layout showNav>
                  <Investors />
                </Layout>
              </Route>
              <Route exact path="/companies">
                <Layout showNav />
              </Route>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
}

export default App;

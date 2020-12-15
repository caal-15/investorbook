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
import InvestorDetail from "./InvestorDetail";
import Companies from "./Companies";
import CompanyDetail from "./CompanyDetail";

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
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/investors" />
              </Route>
              <Route exact path="/investors">
                <Layout showNav>
                  <Investors />
                </Layout>
              </Route>
              <Route exact path="/investors/:id">
                <Layout>
                  <InvestorDetail />
                </Layout>
              </Route>
              <Route exact path="/companies">
                <Layout showNav>
                  <Companies />
                </Layout>
              </Route>
              <Route exact path="/companies/:id">
                <Layout showNav>
                  <CompanyDetail />
                </Layout>
              </Route>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
}

export default App;

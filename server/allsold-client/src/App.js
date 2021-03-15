import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { Container } from "@material-ui/core";
import Register from "./components/Register";
import { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

function App(props) {
  useEffect(() => {
    props.fetchGoogleUser();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Container maxwidth="md">
            <Route path="/" exact component={Home} />
            <Route path="/Register" component={Register} />
          </Container>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default connect(null, actions)(App);

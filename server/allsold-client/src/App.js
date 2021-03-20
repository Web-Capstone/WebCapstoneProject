import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { Container } from "@material-ui/core";
import Login from "./components/Login";
import { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import Register from "./components/Register.js";
import Drawer from "./components/Drawer";

function App(props) {
  useEffect(() => {
    props.fetchGoogleUser();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Drawer />
        <Container maxwidth="md">
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/" exact component={Home} />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default connect(null, actions)(App);

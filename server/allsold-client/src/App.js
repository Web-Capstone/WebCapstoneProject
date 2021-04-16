import React from "react";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import Register from "./components/Register.js";
import Products from "./components/Products";
import ProductDetails from "./components/productDetails";
import { useDispatch } from "react-redux";

import { getAllProducts, getExtraProducts } from "./actions/index";

import "./App.css";
import PostAdd from "./components/PostAdd";

function App(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    props.fetchGoogleUser();
    dispatch(getAllProducts());
    dispatch(getExtraProducts());
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        {/* <Container maxwidth="md"> */}
        <Route path="/PostAdd" component={PostAdd} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/products" component={Products} />
        <Route path="/productDetails/:id" component={ProductDetails} />
        <Route path="/" exact component={Home} />

        {/* </Container> */}
      </BrowserRouter>
    </div>
  );
}

export default connect(null, actions)(App);

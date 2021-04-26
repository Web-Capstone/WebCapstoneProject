import React from "react";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { useEffect } from "react";
import Register from "./components/Register.js";
import Products from "./components/Products";
import ProductDetails from "./components/productDetails";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/UniversalTheme";
import About from "./components/About";
import Margin from "./components/Margin";

import {
  getAllProducts,
  getExtraProducts,
  fetchGoogleUser,
} from "./actions/index";

import PostAdd from "./components/PostAdd";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoogleUser());
    dispatch(getExtraProducts());
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Route
            path="/PostAdd"
            component={() => <Margin component={<PostAdd />} />}
          />
          <Route
            path="/Login"
            component={() => <Margin component={<Login />} />}
          />
          {/* <Route path="/Login" component={Login} /> */}

          <Route
            path="/Register"
            component={() => <Margin component={<Register />} />}
          />
          <Route
            path="/products"
            component={() => <Margin component={<Products />} />}
          />
          <Route
            path="/productDetails/:id"
            component={() => <Margin component={<ProductDetails />} />}
          />
          <Route
            path="/"
            exact
            component={() => <Margin component={<Home />} />}
          />
          <Route
            path="/about"
            component={() => <Margin component={<About />} />}
          />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

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
  getSingleProduct,
  loginUser,
} from "./actions/index";

import PostAdd from "./components/PostAdd";
import Cars from "./components/Cars";
import Mobiles from "./components/Mobiles";
import Electronics from "./components/Electronics";
import Contact from "./components/Contact";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoogleUser());
    dispatch(getExtraProducts());
    dispatch(getAllProducts());
    //dispatch(getSingleProduct());
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

          <Route path="/product/cars" component={Cars} />
          <Route path="/product/mobiles" component={Mobiles} />
          <Route path="/product/electronics" component={Electronics} />

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

          <Route
            path="/contact"
            component={() => <Margin component={<Contact />} />}
          />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

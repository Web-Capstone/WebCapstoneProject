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
import PostCar from "./components/PostCar";
import PostMobile from "./components/PostMobile";
import PostElectronics from "./components/PostElectronics";

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
            exact
            path="/Postadd"
            component={() => <Margin component={<PostAdd />} />}
          />

          <Route
            path="/Postadd/Car"
            component={() => <Margin component={<PostCar />} />}
          />
          <Route
            path="/Postadd/Mobile"
            component={() => <Margin component={<PostMobile />} />}
          />

          <Route
            path="/Postadd/Electronics"
            component={() => <Margin component={<PostElectronics />} />}
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
            path="/product/cars"
            component={() => <Margin component={<Cars />} />}
          />

          <Route
            path="/product/mobiles"
            component={() => <Margin component={<Mobiles />} />}
          />

          <Route
            path="/product/electronics"
            component={() => <Margin component={<Electronics />} />}
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

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { Container } from "@material-ui/core";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Container maxwidth="md">
            <Route path="/Register" component={Register} />
            <Route path="/" exact component={Home} />
          </Container>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Container maxwidth="md">
            <Route path="/" exact component={Home} />
          </Container>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

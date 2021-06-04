import React from "react";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./app.css";
import APICall from "./pages/API Call/APICall";
import Form from "./pages/Form/Form";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/apicall" exact component={APICall} />
          <Route path="/form" exact component={Form} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

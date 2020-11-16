import React from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Appointments from "./pages/Appointments";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/appointments">
            <Appointments />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

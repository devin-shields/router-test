import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Help from "./Help";

const Home = () => <h1>Home</h1>;
const Host = () => <h1>Host</h1>;
const Signup = () => <h1>Signup</h1>;
const Login = () => <h1>Login</h1>;

function App() {
  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Route exact path="/" render={() => <Home title="Hello" />} />
      <Route exact path="/host" component={Host} />
      <Route path="/help" component={Help} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;

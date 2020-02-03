import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

function App() {
  return (
    <Router>
      <h1>Header</h1>
      <div>
        {/* Never use anchor tags!!! */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
      </div>
      <h1>Body</h1>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <h1>Footer</h1>
    </Router>
  );
}

export default App;

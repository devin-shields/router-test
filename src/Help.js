import React from "react";
import { Route, Link } from "react-router-dom";
// import HelpCustomer from "./HelpCustomer";
// import HelpHost from "./HelpHost";

const HelpCustomer = () => <h1>Help Customer Content</h1>;
const HelpHost = () => <h1>Help Host Content</h1>;

function Help() {
  return (
    <div>
      <div>
        <Link to="/help/customer">I am a customer </Link> |
        <Link to="/help/host"> I am a host</Link>
      </div>
      <p>An image goes here</p>

      <Route exact path="/help/customer" component={HelpCustomer} />
      <Route exact path="/help/host" component={HelpHost} />
      <h3>Footer for Help</h3>
    </div>
  );
}

export default Help;

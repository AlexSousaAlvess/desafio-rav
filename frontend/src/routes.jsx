import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Parts from "./pages/Parts";
import Simulations from "./pages/Simulations";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Parts} />
        <Route path="/simulations" component={Simulations} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

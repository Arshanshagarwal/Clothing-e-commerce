import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import "./app.css";
import shopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/" component={shopPage} />
      </Switch>
    </div>
  );
}

export default App;

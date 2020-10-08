import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import "./app.css";
import Header from "./components/header/header.component";
import shopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/" component={shopPage} />
      </Switch>
    </div>
  );
}

export default App;

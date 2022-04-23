import React from "react";
import ReactDOM from "react-dom";
import MenuComponent from "./app/components/menu/menu.jsx";
import HomeComponent from "./app/components/home/home.jsx";
import MarketComponent from "./app/components/market/market.jsx";
import ForestComponent from "./app/components/forest/forest.jsx";
import LumberJackComponent from "./app/components/lumberjack/lumberjack.component.jsx";
import TavernComponent from "./app/components/tavern/tavern.jsx";
import LibraryComponent from "./app/components/library/library.jsx";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Store from "./reducers/store.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Route exact path="/menu" component={MenuComponent} />
      <Route exact path="/home" component={HomeComponent} />
      <Route exact path="/market" component={MarketComponent} />
      <Route exact path="/tavern" component={TavernComponent} />
      <Route exact path="/forest" component={ForestComponent} />
      <Route exact path="/library" component={LibraryComponent} />
      <Route exact path="/jacks-hut" component={LumberJackComponent} />
      <Route exact path="/" render={() => <Redirect to="menu" />} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

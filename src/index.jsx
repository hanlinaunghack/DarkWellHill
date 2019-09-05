import React from "react";
import ReactDOM from "react-dom";
import MenuComponent from "./app/components/menu/menu.jsx";
import HomeComponent from "./app/components/home/home.jsx";
import FieldsComponent from "./app/components/field/fields.jsx";
import GroceryStoreComponent from "./app/components/grocerystore/grocerystore.jsx";
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
      <Route exact path="/fields" component={FieldsComponent} />
      <Route exact path="/store" component={GroceryStoreComponent} />
      <Route exact path="/" render={() => <Redirect to="menu" />} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

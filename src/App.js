import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Movies from "./Components/movies";
import Customers from "./Components/common/customers";
import Rentals from "./Components/common/rentals";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./Components/common/navbar";
import NotFound from "./Components/common/notfound";
import MovieForm from "./Components/common/movieForm";
import "./App.css";


function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm}/>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Redirect from="/" exact to="/movies" />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

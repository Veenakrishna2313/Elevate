import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Movies from "./Components/common/movies";
import Customers from "./Components/common/customers";
import Rentals from "./Components/common/rentals";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./Components/common/navbar";
import MoviesForm from "./Components/common/moviesForm";
import NotFound from "./Components/common/notfound";
import Register from "./Components/common/registerForm";
import "bootstrap/dist/js/bootstrap.bundle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./Components/common/loginForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MoviesForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={Register} />
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

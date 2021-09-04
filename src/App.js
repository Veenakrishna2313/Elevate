
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Movies from "./Components/movies";
import Customers from "./Components/common/customers";
import Rentals from "./Components/common/rentals";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./Components/common/navbar";
import NotFound from "./Components/common/notfound";



function App() {
  return (
    <main className="container">
      <NavBar />
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Redirect from="/" to="/movies" />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    </main>
  );
}

export default App;

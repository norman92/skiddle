import React from "react";
import Events from "./Events";
import logo from "./Logos/skiddle-logo-black-landscape.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EventDetails from "./Events/Details";
import ArtistDetails from "./Artists/index";
import "./App.css";
import NotFound from "./NotFound";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <header className="app-header">
            <Link to="/">
              <img className="logo" src={logo} alt="Skiddle" />
            </Link>
          </header>
          <section className="main">
            <Switch>
              <Route path="/details/:id">
                <EventDetails />
              </Route>
              <Route path="/artist/:id">
                <ArtistDetails />
              </Route>
              <Route path="/" exact>
                <Events />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </section>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

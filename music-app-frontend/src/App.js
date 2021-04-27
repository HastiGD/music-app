import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainPage from "./pages/MainPage.js";
import AddMusicPage from "./pages/AddMusicPage.js";
import CountriesPage from "./pages/CountriesPage.js";
import DiscoverPage from "./pages/DiscoverPage.js";
import ErrorPage from "./pages/ErrorPage.js";
import SideBarComponent from "./components/SideBarComponent.js";
import NavBarComponent from "./components/NavBarComponent.js";
import "./App.css";

function App() {
  // Opens SideNav
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "150px";
  };

  // Closes SideNav
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };

  // Returns random country from list
  const countries = [
    "united states",
    "australia",
    "colombia",
    "iran",
    "dominican republic",
    "china",
    "india",
  ];
  const randomCountry = countries[Math.floor(Math.random() * countries.length)];

  let [country, setCountry] = useState(randomCountry);
  let [toError, setToError] = useState(false);

  // Callback function for searching in NavBarComponent
  function handleSearch(searchQuery) {
    console.log("in onSearch");
    if (countries.includes(searchQuery)) {
      setCountry(searchQuery);
    } else {
      console.log("No video for this country");
      setToError(true);
    }
  }

  // Handles errors when resources for a specific country are not found
  function handleError() {
    setToError(true);
  }

  // Redirects errors to home
  function handleRedirect() {
    console.log("inredirect");
    setToError(false);
  }

  console.log("Rendering App");
  return (
    <Router>
      <div role="main">
        <NavBarComponent onHamburgerClick={openNav} onSearch={handleSearch} />
        <div id="mySidenav" className="sidenav" title="Side navbar">
          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Close"
            onClick={closeNav}
          />
          <br />
          <br />
          <br />
          <SideBarComponent />
        </div>
        <div id="main">
          <Switch>
            <Route path="/error">
              <ErrorPage onRedirect={handleRedirect} />
            </Route>
            <Route path="/discover">
              <DiscoverPage onError={handleError} />
            </Route>
            <Route path="/countries">
              <CountriesPage />
            </Route>
            <Route path="/add">
              <AddMusicPage />
            </Route>
            <Route path="/">
              <MainPage country={country} />
            </Route>
          </Switch>
          {toError ? <Redirect to="/error" /> : <Redirect to="/" />}
        </div>
      </div>
    </Router>
  );
}

export default App;

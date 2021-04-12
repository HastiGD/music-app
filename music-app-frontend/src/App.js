import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.js";
import AddMusicPage from "./pages/AddMusicPage.js";
import CountriesPage from "./pages/CountriesPage.js";
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
  const countries = ["united states", "australia", "colombia", "iran"];
  const randomCountry = countries[Math.floor(Math.random() * countries.length)];

  let [country, setCountry] = useState(randomCountry);

  // Callback function for searching in NavBarComponent
  const handleSearch = (searchQuery) => {
    setCountry(searchQuery);
  };

  console.log("Rendering App");
  return (
    <Router>
      <NavBarComponent onHamburgerClick={openNav} onSearch={handleSearch} />

      <div id="mySidenav" className="sidenav">
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
      </div>
    </Router>
  );
}

export default App;

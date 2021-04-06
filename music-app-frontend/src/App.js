import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.js";
import SideBarComponent from "./components/SideBarComponent.js";
import NavBarComponent from "./components/NavBarComponent.js";
import "./App.css";

function App() {
  // Links and Icons in SideNav
  const links = ["Home", "Countries", "Genres", "Add music", "Favorites"];
  const icons = [
    "bi bi-house-fill",
    "bi bi-geo-alt",
    "bi bi-music-note-list",
    "bi bi-plus-circle",
    "bi bi-star",
  ];

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

  // Renders links in SideNav
  const renderLinks = () => {
    return links.map((link, i) => (
      <SideBarComponent key={"Link" + i} icon={icons[i]} link={link} />
    ));
  };

  // Returns random country from list
  const countries = ["united states", "colombia", "iran", "china"];
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
        <div className="navs">
          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Close"
            onClick={closeNav}
          />
          <br />
          <br />
          <br />
          <ul>{renderLinks()}</ul>
        </div>
      </div>

      <div id="main">
        <Switch>
          <Route path="/">
            <MainPage country={country} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

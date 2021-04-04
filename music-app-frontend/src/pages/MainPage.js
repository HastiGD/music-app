import React from "react";
import NavBarComponent from "../components/NavBarComponent.js";
import "../MainPage.css";
import SideBarComponent from "../components/SideBarComponent.js";

export default function MainPage() {
  const links = ["Home", "Countries", "Genres", "Add music", "Favorites"];
  const icons = [
    "bi bi-house-fill",
    "bi bi-geo-alt",
    "bi bi-music-note-list",
    "bi bi-plus-circle",
    "bi bi-star",
  ];
  const openNav = () => {
    console.log("In openNav");
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "150px";
  };

  const closeNav = () => {
    console.log("In closeNav");
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };

  const renderLinks = () => {
    console.log("In renderLinks");
    return links.map((link, i) => (
      <SideBarComponent key={"Link" + i} icon={icons[i]} link={link} />
    ));
  };

  return (
    <div>
      <NavBarComponent onHamburgerClick={openNav} />
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
        <h1>My Front</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
          enim fuga possimus, eos aliquid odit obcaecati, quod nisi blanditiis
          maxime recusandae voluptatibus. Odit sapiente ducimus voluptas natus
          aliquam iusto nemo. Yeeee!
        </p>
      </div>
    </div>
  );
}

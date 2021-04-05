import React, { useState, useEffect } from "react";
import NavBarComponent from "../components/NavBarComponent.js";
import SideBarComponent from "../components/SideBarComponent.js";
import VideoComponent from "../components/VideoComponent.js";
import "../MainPage.css";

export default function MainPage() {
  const links = ["Home", "Countries", "Genres", "Add music", "Favorites"];
  const icons = [
    "bi bi-house-fill",
    "bi bi-geo-alt",
    "bi bi-music-note-list",
    "bi bi-plus-circle",
    "bi bi-star",
  ];

  let [country, setCountry] = useState("Colombia");
  let [src, setSrc] = useState("");

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
    return links.map((link, i) => (
      <SideBarComponent key={"Link" + i} icon={icons[i]} link={link} />
    ));
  };

  useEffect(() => {
    console.log("in useEffect");
    const fetchVideo = async () => {
      const resRaw = await fetch(`/country/${country}`);
      const res = await resRaw.json();
      console.log("Got country", res.country, "and genre", res.genre);
      setSrc(res.src);
    };
    console.log("fetching video");
    fetchVideo();
  }, [country]);

  function handleSearch(query) {
    console.log("Back in parent ready to search for", query);
  }

  return (
    <div>
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
        <VideoComponent src={src} country={country}></VideoComponent>
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

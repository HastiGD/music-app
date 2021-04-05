import React, { useState, useEffect } from "react";
import NavBarComponent from "../components/NavBarComponent.js";
import SideBarComponent from "../components/SideBarComponent.js";
import VideoComponent from "../components/VideoComponent.js";
import "../MainPage.css";

export default function MainPage() {
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

  // Choose random country from list
  const countries = ["united states", "colombia", "iran", "china"];
  const randomCountry = countries[Math.floor(Math.random() * countries.length)];

  // Display random video
  let [country, setCountry] = useState(randomCountry);
  let [src, setSrc] = useState("");

  // Callback function for searching
  const handleSearch = (searchQuery) => {
    setCountry(searchQuery);
  };

  // Rerender MainPage whenever country is searched
  useEffect(() => {
    console.log("in useEffect");
    const fetchVideo = async () => {
      const resRaw = await fetch(`/country/${country}`);
      const res = await resRaw.json();
      console.log("Got video", res.src);
      setSrc(res.src);
    };
    console.log("fetching video");
    fetchVideo();
  }, [country]);

  console.log("Rendering MainPage");
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

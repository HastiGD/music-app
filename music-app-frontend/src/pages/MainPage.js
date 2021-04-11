import React, { useState, useEffect } from "react";
import VideoComponent from "../components/VideoComponent.js";
import "../MainPage.css";

export default function MainPage({ country }) {
  let [src, setSrc] = useState("");

  // Capitalizes the first letter of the country name
  function capCountry(country) {
    const words = country.split(" ");
    let Country = words.map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    });
    return Country.join(" ");
  }

  // Rerender MainPage whenever user searches for new country
  useEffect(() => {
    const fetchVideo = async () => {
      const resRaw = await fetch(`/country/${country}`);
      const res = await resRaw.json();
      console.log("Got songs", res.songs[0].url);
      setSrc("https://www.youtube.com/embed/" + res.songs[0].url);
    };
    console.log("Searching for videos from", country);
    fetchVideo();
  }, [country]);

  console.log("Rendering MainPage");
  return (
    <div>
      <h1 className="display-6">
        Check out this song from {capCountry(country)}
      </h1>
      <VideoComponent src={src}></VideoComponent>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, enim
        fuga possimus, eos aliquid odit obcaecati, quod nisi blanditiis maxime
        recusandae voluptatibus. Odit sapiente ducimus voluptas natus aliquam
        iusto nemo. Yeeee!
      </p>
    </div>
  );
}

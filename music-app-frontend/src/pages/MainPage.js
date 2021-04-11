import React, { useState, useEffect } from "react";
import VideoComponent from "../components/VideoComponent.js";
import SongInfoComponent from "../components/SongInfoComponent.js";
import "../MainPage.css";

export default function MainPage({ country }) {
  let [src, setSrc] = useState("");
  let [songInfo, setSongInfo] = useState({});

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
      const song = res.songs[0];
      console.log("Got songs", song.url);
      setSrc("https://www.youtube.com/embed/" + song.url);
      setSongInfo({
        user: song.user,
        date: song.date,
        desc: song.description,
        genre: song.genre,
      });
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
      <span>
        <VideoComponent src={src}></VideoComponent>
        <SongInfoComponent
          user={songInfo.user}
          date={songInfo.date}
          desc={songInfo.desc}
          genre={songInfo.genre}
        ></SongInfoComponent>
      </span>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, enim
        fuga possimus, eos aliquid odit obcaecati, quod nisi blanditiis maxime
        recusandae voluptatibus. Odit sapiente ducimus voluptas natus aliquam
        iusto nemo. Yeeee!
      </p>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import VideoComponent from "../components/VideoComponent.js";
import SongInfoComponent from "../components/SongInfoComponent.js";
import "../MainPage.css";

export default function MainPage({ country }) {
  let [src, setSrc] = useState("");
  let [songInfo, setSongInfo] = useState({
    user: "",
    date: Date.now().toString(),
    desc: "",
    genres: [],
  });

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
      setSrc("https://www.youtube.com/embed/" + song.url);
      setSongInfo({
        user: song.user,
        date: song.date,
        desc: song.description,
        genres: song.genre.split(" "),
      });
    };
    fetchVideo();
  }, [country]);

  return (
    <div>
      <h1 className="display-6">
        Check out this song from {capCountry(country)}
      </h1>
      <br />
      <div className="row row align-items-center videoRow">
        <div className="col">
          <VideoComponent src={src}></VideoComponent>
        </div>
        <div className="col">
          <SongInfoComponent
            user={songInfo.user}
            date={songInfo.date}
            desc={songInfo.desc}
            genres={songInfo.genres}
          ></SongInfoComponent>
        </div>
      </div>
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, enim
        fuga possimus, eos aliquid odit obcaecati, quod nisi blanditiis maxime
        recusandae voluptatibus. Odit sapiente ducimus voluptas natus aliquam
        iusto nemo. Yeeee!
      </p>
    </div>
  );
}

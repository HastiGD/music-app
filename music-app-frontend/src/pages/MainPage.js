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
    if (country !== undefined) {
      const words = country.split(" ");
      let Country = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      });
      return Country.join(" ");
    }
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
      <div className="container-fluid display-flex">
        <div className="row justify-content-start">
          <div className="col-md-9">
            <h1>There is a world of music to discover</h1>
            <p>
              There is beautiful music from all over the world to be discovered!
              Check out the featured video below to listen to something new.
              Want to add some music from your country? Use the Add Music button
              to share something music only locals would hear. Or visit the
              countries page to discover music from countries you've never been
              to.
            </p>
            <div className="row align-items-end">
              <h2>Check out this song from {capCountry(country)}</h2>
              <div className="col-md-auto">
                <VideoComponent src={src}></VideoComponent>
              </div>
              <div className="col p-0 pb-2">
                <SongInfoComponent
                  user={songInfo.user}
                  date={songInfo.date}
                  desc={songInfo.desc}
                  genres={songInfo.genres}
                ></SongInfoComponent>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h1>Folk music</h1>
            <p>
              Traditional music native to a region or culture. Many artists
              around the world are keeping the music of their ancestors alive.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem perspiciatis laudantium quos totam aspernatur, amet
              atque exercitationem consequuntur ullam saepe nam sequi eum
              similique corporis! Assumenda, quo. Voluptas, ex, expedita.
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <h2>Add music from your country</h2>
        </div>
      </div>

      <br />
    </div>
  );
}

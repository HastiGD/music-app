import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap-buttons";
import VideoComponent from "../components/VideoComponent.js";
import SongInfoComponent from "../components/SongInfoComponent.js";
import "../MainPage.css";

export default function MainPage({ country }) {
  let history = useHistory();
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

  const AddMusicButton = () => {
    function handleClick() {
      history.push("/add");
    }
    return (
      <Button
        type="button"
        className="btn btn-secondary p-1 fw-light"
        aria-label="add music button"
        style={{ width: "200px" }}
        onClick={handleClick}
      >
        Add Music
      </Button>
    );
  };

  console.log("Rendering Main Page");
  return (
    <div className="container-fluid display-flex">
      <div className="row justify-content-start">
        <div className="col-md-9">
          <h1>There is a world of music to discover</h1>
          <p className="lead">
            There is beautiful music from all over the world to be heard and
            enjoyed. You never know what sounds you may be missing! Check out
            the featured video below to listen to something new, or head over to
            the countries page to discover music from countries you've never
            visited.
          </p>
          <br />
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
          <p className="fw-light">
            Traditional music native to a region or culture that has been passed
            down through generations. Musicians around the world are keeping the
            story of their ancestors alive by creating music that is true to
            their roots.
          </p>
          <div className="text-center">
            <i className="bi bi-music-note m-0 p-0"></i>
          </div>
          <br />
          <p className="fw-light">
            While mainstream music has it's time and place, we believe folk
            music is timeless and rich in culture. With that said, many artists
            are combining new sounds with old styles to create genres of music
            that pay respect to their roots, and appeal to those seeking modern
            styles.
          </p>
        </div>
      </div>
      <hr />
      <div className="row">
        <h2>Add music from your country</h2>
        <div className="col-md-9">
          <p className="fw-light">
            Want to add music from your country? Some music can only be heard
            walking down the city streets on a bustling saturday night, or at a
            venue only known to locals. Help curious people "travel" around the
            world by sharing something unique from your hometown.
          </p>
        </div>
        <div className="col-md-3 text-center">
          <AddMusicButton />
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useLocation, Redirect, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap-buttons";
import VideoComponent from "../components/VideoComponent.js";
import DiscoverSongInfoComponent from "../components/DiscoverSongInfoComponent.js";
import CountryInfoComponent from "../components/CountryInfoComponent.js";
import AlertComponent from "../components/AlertComponent.js";

export default function DiscoverPage({ onError }) {
  const { state } = useLocation();
  let history = useHistory();
  let [country] = useState(state.country);
  let [countryInfo, setCountryInfo] = useState({});
  let [toError, setToError] = useState(false);
  let [alert, setAlert] = useState(false);
  let [songs, setSongs] = useState([]);
  let [index, setIndex] = useState(-1);
  let [songInfo, setSongInfo] = useState({
    src: "",
    user: "",
    date: Date.now().toString(),
    desc: "",
    genres: [],
  });

  useEffect(() => {
    const fetchCountryInfo = async () => {
      const resRaw = await fetch(`/discover/${country}`);
      const res = await resRaw.json();
      setCountryInfo(res);
    };

    fetchCountryInfo();
  }, [country]);

  useEffect(() => {
    const fetchSongs = async () => {
      const resRaw = await fetch(`/country/${country.toLowerCase()}`);
      const res = await resRaw.json();
      if (res.songs.length === 0) {
        onError(true);
      } else {
        setSongs(res.songs);
        setIndex(0);
      }
    };
    fetchSongs();
  }, [countryInfo]);

  useEffect(() => {
    if (songs.length > 0) {
      setSongInfo({
        src: songs[index].url,
        user: songs[index].user,
        date: songs[index].date,
        desc: songs[index].description,
        genres: songs[index].genre.split(" "),
      });
    }
  }, [index]);

  function renderVideo(source) {
    return (
      <VideoComponent
        src={"https://www.youtube.com/embed/" + songInfo.src}
      ></VideoComponent>
    );
  }

  const PaginationButton = (label) => {
    function clickHandler() {
      if (alert) {
        setAlert(false);
      }
      if (label === "Prev") {
        if (index > 0) {
          setIndex(index - 1);
        }
      } else {
        if (index < songs.length - 1) {
          setIndex(index + 1);
        } else {
          setAlert(true);
        }
      }
    }
    let iconName =
      "bi bi-caret-" + (label === "Prev" ? "left" : "right") + "-fill ";
    return (
      <Button
        type="button"
        className={"btn btn-secondary p-1 fw-light " + label}
        aria-label={label}
        onClick={clickHandler}
      >
        {label}
        <span>
          <i className={iconName}></i>
        </span>
      </Button>
    );
  };

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

  console.log("Rendering Discover Page");
  return (
    <div className="container-fluid display-flex">
      {toError ? <Redirect to="/error" /> : null}
      <div className="row justify-content-start">
        <div className="col-md-9">
          <h1>Ready ...Set ...Go!</h1>
          <p className="lead">
            Our international friends are serious about good music so sit back,
            relax, and take your ears on a trip around the world. Who know, you
            might even find inspiration for a new trip!
          </p>
          <br />
          <div className="row align-items-center justify-content-start">
            <h2>Here's what people are listening to in {country}</h2>
            <div className="col-1 text-center">
              <div>{PaginationButton("Prev")}</div>
            </div>
            <div className="col-sm-9 text-center">
              {alert ? (
                <AlertComponent
                  type="secondary"
                  message="You've reached the end!"
                ></AlertComponent>
              ) : null}
              <div>{renderVideo(songInfo.src)}</div>
            </div>
            <div className="col-1 text-center">
              <div>{PaginationButton("Next")}</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <h2>Country</h2>
          <CountryInfoComponent country={country} countryInfo={countryInfo} />
          <br />
          <h2>Song</h2>
          <DiscoverSongInfoComponent
            user={songInfo.user}
            date={songInfo.date}
            desc={songInfo.desc}
            genres={songInfo.genres}
          ></DiscoverSongInfoComponent>
        </div>
      </div>
      <hr />
      <div className="row">
        <h2>Are you from {country}?</h2>
        <div className="col-md-9">
          <p className="fw-light">
            Help curious listeners from around the world by uploading some local
            music from your home country! Mainstream music definitely has it's
            place, but we think impromptu music is way cooler! Add a YouTube
            video of your favorite street performer, underground band, church
            choir or speakeasy club. The rythm is sure to draw travelers from
            far and wide.
          </p>
        </div>
        <div className="col-md-3 text-center">
          <AddMusicButton />
        </div>
      </div>
    </div>
  );
}

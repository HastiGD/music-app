import React, { useEffect, useState } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap-buttons";
import VideoComponent from "../components/VideoComponent.js";
import DiscoverSongInfoComponent from "../components/DiscoverSongInfoComponent.js";
import CountryInfoComponent from "../components/CountryInfoComponent.js";
import AlertComponent from "../components/AlertComponent.js";

export default function DiscoverPage({ onError }) {
  const { state } = useLocation();
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
    fetchCountryInfo();
    fetchSongs();
  }, [country]);

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
      if (label === "Previous") {
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
    return (
      <Button
        type="button"
        className={"btn btn-secondary p-0 " + label}
        aria-label={label}
        onClick={clickHandler}
      >
        {label}
      </Button>
    );
  };

  console.log("Rendering New Video ");
  return (
    <div>
      {toError ? <Redirect to="/error" /> : null}
      <h1 className="display-6 fs-2">
        Here's what people are listening to in {country}
      </h1>
      <br />
      <h2>A</h2>
      <h3>Heading</h3>
      <h4>Progression</h4>
      <div>
        <CountryInfoComponent country={country} countryInfo={countryInfo} />
      </div>
      <br />
      <br />
      <div className="container-fluid align-items-center">
        <div className="d-inline-block"></div>
        {alert ? (
          <AlertComponent
            type="secondary"
            message="You've reached the end!"
          ></AlertComponent>
        ) : null}
        <div className="d-inline-block">
          <div>{PaginationButton("Previous")}</div>
          <div>{renderVideo(songInfo.src)}</div>
          <div>{PaginationButton("Next")}</div>
          <div>
            <DiscoverSongInfoComponent
              user={songInfo.user}
              date={songInfo.date}
              desc={songInfo.desc}
              genres={songInfo.genres}
            ></DiscoverSongInfoComponent>
          </div>
        </div>
        <div className="d-inline-block"></div>
      </div>
    </div>
  );
}

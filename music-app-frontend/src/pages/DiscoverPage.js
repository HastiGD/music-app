import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import VideoComponent from "../components/VideoComponent.js";
import DiscoverSongInfoComponent from "../components/DiscoverSongInfoComponent.js";
import CountryInfoComponent from "../components/CountryInfoComponent.js";

export default function DiscoverPage() {
  const { state } = useLocation();
  let [country] = useState(state.country);
  let [countryInfo, setCountryInfo] = useState({});
  let [songs, setSongs] = useState([]);
  let [index, setIndex] = useState(0);
  let [src, setSrc] = useState("");
  let [songInfo, setSongInfo] = useState({
    user: "",
    date: Date.now().toString(),
    desc: "",
    genres: [],
  });

  useEffect(() => {
    const fetchCountryInfo = async () => {
      const resRaw = await fetch(`/discover/${country}`);
      const res = await resRaw.json();
      console.log("Got res", res);
      setCountryInfo(res);
    };
    console.log("Searching info for", country);
    fetchCountryInfo();
  }, [country]);

  useEffect(() => {
    const fetchVideo = async () => {
      const resRaw = await fetch(`/country/${country.toLowerCase()}`);
      const res = await resRaw.json();
      console.log("Got songs", res.songs, typeof res.songs);
      setSongs(res.songs);
      console.log("Got src", res.songs[index].url);
      setSrc(res.songs[index].url);
      setSongInfo({
        user: res.songs[index].user,
        date: res.songs[index].date,
        desc: res.songs[index].description,
        genres: res.songs[index].genre.split(" "),
      });
    };
    console.log("Searching for videos from", country);
    fetchVideo();
  }, [index]);

  function renderVideo(source) {
    console.log(source);
    return (
      <VideoComponent
        src={"https://www.youtube.com/embed/" + source}
      ></VideoComponent>
    );
  }

  function onPrevHandler() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function onNextHandler() {
    if (index < songs.length - 1) {
      setIndex(index + 1);
    }
  }

  return (
    <div>
      <h1 className="display-6 fs-2">
        Here's what people are listening to in {country}
      </h1>
      <br />
      <div>
        <CountryInfoComponent country={country} countryInfo={countryInfo} />
      </div>
      <br />
      <br />
      <div className="container-fluid align-items-center">
        <div className="d-inline-block">
          <button
            type="button"
            className="btn btn-outline-dark p-0 m-3"
            aria-label="Previous"
            onClick={onPrevHandler}
          >
            <span>
              <i
                className="bi bi-caret-left-fill"
                style={{ fontSize: "3rem" }}
              ></i>
            </span>
          </button>
        </div>
        <div className="d-inline-block">
          <div>{renderVideo(src)}</div>
          <div>
            <DiscoverSongInfoComponent
              user={songInfo.user}
              date={songInfo.date}
              desc={songInfo.desc}
              genres={songInfo.genres}
            ></DiscoverSongInfoComponent>
          </div>
        </div>
        <div className="d-inline-block">
          <button
            type="button"
            className="btn btn-outline-dark p-0 m-3"
            aria-label="Next"
            onClick={onNextHandler}
          >
            <span>
              <i
                className="bi bi-caret-right-fill"
                style={{ fontSize: "3rem" }}
              ></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

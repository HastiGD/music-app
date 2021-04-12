import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function DiscoverPage() {
  const { state } = useLocation();
  let [country] = useState(state.country);
  //let songs;
  let [songs, setSongs] = useState([]);

  // async function postInputs(input) {
  //   try {
  //     const reqOptions = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         countries: input,
  //       }),
  //     };
  //     const resRaw = await fetch("/addCountries", reqOptions);
  //     const res = await resRaw.json();
  //     console.log("res", res);
  //     console.log("Added countries", res);
  //   } catch (e) {
  //     console.log("Error", e);
  //   }
  // }

  useEffect(() => {
    const fetchVideo = async () => {
      const resRaw = await fetch(`/country/${country.toLowerCase()}`);
      const res = await resRaw.json();
      console.log("Got songs", res.songs, typeof res.songs);

      setSongs(res.songs);
      //setSrc("https://www.youtube.com/embed/" + song.url);
      // setSongInfo({
      //   user: song.user,
      //   date: song.date,
      //   desc: song.description,
      //   genres: song.genre.split(" "),
      // });
    };
    console.log("Searching for videos from", country);
    fetchVideo();
  }, []);

  return (
    <div>
      <h1 className="display-6 fs-2">
        Here's what people are listening to in {country}
      </h1>
    </div>
  );
}

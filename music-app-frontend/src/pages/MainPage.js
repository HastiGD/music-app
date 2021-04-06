import React, { useState, useEffect } from "react";
import VideoComponent from "../components/VideoComponent.js";
import "../MainPage.css";

export default function MainPage({ country }) {
  let [src, setSrc] = useState("");

  // Rerender MainPage whenever user searches for new country
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
      <VideoComponent src={src} country={country}></VideoComponent>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, enim
        fuga possimus, eos aliquid odit obcaecati, quod nisi blanditiis maxime
        recusandae voluptatibus. Odit sapiente ducimus voluptas natus aliquam
        iusto nemo. Yeeee!
      </p>
    </div>
  );
}

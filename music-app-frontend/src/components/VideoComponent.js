//import React, { useState, useEffect } from "react";

export default function VideoComponent({ src, country }) {
  console.log("render");
  return (
    <div>
      <h1 className="display-6">Check out this song from {country}</h1>
      <div>
        <iframe
          width="560"
          height="315"
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

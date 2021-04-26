import "../SongInfo.css";
import React from "react";

export default function SongInfoComponent({ user, date, desc, genres }) {
  const postDate = (date) => {
    const postDate = new Date(parseInt(date, 10));

    return postDate.toLocaleString("default", {
      month: "numeric",
      day: "numeric",
      year: "2-digit",
    });
  };
  return (
    <div className="card cardSongInfo">
      <div className="card-body p-0">
        <figure>
          <blockquote class="blockquote">
            <p className="card-text fw-light">"{desc}"</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            <cite title="Source Title">
              {user} &#183; {postDate(date)}
            </cite>
          </figcaption>
        </figure>
        {genres.map((genre, i) => (
          <span key={"" + genre + i} className="badge rounded-pill fw-light">
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
}

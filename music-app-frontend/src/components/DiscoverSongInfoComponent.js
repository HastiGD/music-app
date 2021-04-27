import "../DiscoverSongInfo.css";
import React from "react";

export default function DiscoverSongInfoComponent({
  user,
  date,
  desc,
  genres,
}) {
  const postDate = (date) => {
    const postDate = new Date(parseInt(date, 10));
    return postDate.toLocaleString("default", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };
  return (
    <div>
      <div className="card cardDiscoverSongInfo">
        <div className="card-body p-0">
          <figure>
            <blockquote className="blockquote">
              <p className="card-text fw-light">"{desc}"</p>
            </blockquote>
            <figcaption className="blockquote-footer">
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
    </div>
  );
}

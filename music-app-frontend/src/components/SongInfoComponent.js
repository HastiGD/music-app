import "../SongInfo.css";

export default function SongInfoComponent({ user, date, desc, genres }) {
  const postDate = (date) => {
    const postDate = new Date(parseInt(date, 10));

    return postDate.toLocaleString("default", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  console.log("Rendering SongInfoComponent");
  return (
    <div>
      <div className="card">
        <div className="card-body p-0">
          <h5 className="card-title fw-light">
            <span>
              <i className="bi bi-person-circle"></i>
            </span>
            {user}
          </h5>
          <h6 className="card-subtitle ml-2 text-muted fw-light">
            {postDate(date)}
          </h6>
          <p className="card-text fw-light">"{desc}"</p>
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

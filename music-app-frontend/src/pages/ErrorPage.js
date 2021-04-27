export default function ErrorPage({ onRedirect }) {
  return (
    <div>
      <br />
      <h1 className="display-6">
        Looks like no one has uploaded music for this country yet 🥺, check back
        later!
      </h1>
      <button type="button" className="btn btn-light" onClick={onRedirect}>
        Go Home
      </button>
    </div>
  );
}

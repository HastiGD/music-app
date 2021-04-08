import "../AddMusicPage.css";
const countries = require("../Countries.json");

export default function AddMusicPage() {
  return (
    <div>
      <div className="formInfo">
        <h1 className="display-6">Add a new video for your country</h1>
        <p className="lead">
          To upload your song, simply find it on YouTube, and copy and paste the
          url below. Don't forget to tell us more about the song such as it's
          origins, why you chose to share it, whether or not it has any cultural
          significance, or anything else you'd like to tell viewers about it!
        </p>
      </div>

      <form className="addMusicForm">
        <div className="form-group">
          <label className="text-light fw-light">YouTube Video</label>
          <input
            type="url"
            className="form-control bg-dark text-light border-secondary"
            placeholder="url"
          />
        </div>
        <div className="form-group">
          <label className="text-light fw-light">Select Country</label>
          <select className="form-control bg-dark text-light border-secondary">
            {countries.Countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="text-light fw-light">
            Tell viewers why you chose this video
          </label>
          <textarea
            className="form-control bg-dark text-light border-secondary"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-dark text-light fw-light border-secondary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

import React from "react";
import PropTypes from "prop-types";
import AlertComponent from "../components/AlertComponent.js";
import "../AddMusicForm.css";

AddMusicFormComponent.propTypes = {
  countriesArray: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  errorType: PropTypes.string,
  errorMessage: PropTypes.string.isRequired,
  onErrorClose: PropTypes.func.isRequired,
};

export default function AddMusicFormComponent({
  countriesArray,
  onChange,
  onBlur,
  onSubmit,
  error,
  errorType,
  errorMessage,
  onErrorClose,
}) {
  return (
    <div>
      {error ? (
        <AlertComponent
          type={errorType}
          message={errorMessage}
          onClick={onErrorClose}
        ></AlertComponent>
      ) : null}
      <form className="addMusicForm">
        <div className="form-group">
          <label className="text-light fw-light">YouTube Video</label>
          <input
            type="url"
            className="form-control bg-dark text-light border-secondary"
            placeholder="url"
            onChange={onChange}
            onBlur={(evt) => onBlur(evt.target.value, "url")}
          />
        </div>
        <div className="form-group">
          <label className="text-light fw-light">Country</label>
          <select
            className="form-control bg-dark text-light border-secondary"
            defaultValue={"DEFAULT"}
            onBlur={(evt) => onBlur(evt.target.value, "country")}
          >
            <option value="DEFAULT" disabled>
              Select country
            </option>
            {countriesArray.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="text-light fw-light">Genre</label>
          <input
            type="text"
            className="form-control bg-dark text-light border-secondary"
            placeholder="genre"
            onBlur={(event) => {
              onBlur(event.target.value, "genre");
            }}
          />
        </div>
        <div className="form-group">
          <label className="text-light fw-light">
            Tell viewers why you chose this video
          </label>
          <textarea
            className="form-control bg-dark text-light border-secondary"
            rows="3"
            onChange={onChange}
            onBlur={(evt) => onBlur(evt.target.value, "desc")}
          ></textarea>
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-dark text-light fw-light border-secondary"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

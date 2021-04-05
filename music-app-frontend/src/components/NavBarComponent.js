import React from "react";
import PropTypes from "prop-types";
import "../NavBar.css";

function NavBarComponent({ onHamburgerClick, onSearch }) {
  let query = "";

  console.log("Rendering NavBar");
  return (
    <nav className="navbar navbar-expand-xxl navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={onHamburgerClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <form
          className="d-flex"
          onSubmit={(evt) => {
            evt.preventDefault();
          }}
        >
          <div className="input-group m-1 text-center">
            <input
              type="text"
              className="form-control bg-light"
              placeholder="Search"
              aria-label="Search"
              onChange={(evt) => {
                query = evt.target.value;
                query = query.toLowerCase();
              }}
              onKeyPress={(evt) => {
                if (evt.code === "Enter") {
                  onSearch(query);
                }
              }}
            />

            <button
              className="btn btn-secondary"
              type="button"
              onClick={(evt) => {
                evt.preventDefault();
                onSearch(query);
              }}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </form>
        <div className="d-inline bg-dark text-light fw-light">
          Username
          <i className="bi bi-emoji-smile-fill"></i>
        </div>
      </div>
    </nav>
  );
}

NavBarComponent.propTypes = {
  onHamburgerClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default NavBarComponent;

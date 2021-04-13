import React from "react";
import PropTypes from "prop-types";

function NavBarComponent({ onHamburgerClick, onSearch }) {
  let query = "";

  return (
    <nav
      className="navbar navbar-expand-xxl navbar-dark"
      style={{ backgroundColor: "#301b3f" }}
    >
      <div className="container-fluid m-0">
        <button type="button" className="btn" onClick={onHamburgerClick}>
          <span
            className="navbar-toggler-icon"
            style={{ fontSize: "1.5rem" }}
          ></span>
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
              className="form-control bg-dark text-light border border-secondary"
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
              className="btn btn-secondary p-0"
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

        <div className="d-inline text-light fw-light">
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

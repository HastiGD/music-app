import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap-buttons";
import { useLocation, useHistory } from "react-router-dom";

function NavBarComponent({ onHamburgerClick, onSearch }) {
  let query = "";
  let location = useLocation();
  let history = useHistory();

  const SearchButton = () => {
    function handleClick() {
      onSearch(query);
      if (location !== "/") {
        history.push("/");
      }
    }
    return (
      <Button
        type="button"
        className="btn btn-secondary p-0"
        aria-label="search button"
        onClick={handleClick}
      >
        <span className="visually-hidden">Press to search for a country</span>
        <i className="bi bi-search"></i>
      </Button>
    );
  };

  console.log("Location ", location);

  return (
    <div>
      <nav
        className="navbar navbar-expand-xxl navbar-dark"
        style={{ backgroundColor: "#2B0645" }}
      >
        <div className="container-fluid m-0">
          <button
            type="button"
            className="btn"
            aria-label="sidebar toggler button"
            onClick={onHamburgerClick}
          >
            <span className="visually-hidden">
              Press to open side bar to access sidebar controls
            </span>
            <span
              className="navbar-toggler-icon"
              style={{ fontSize: "1.5rem", color: "white" }}
            ></span>
          </button>
          <form
            className="d-flex"
            style={{ width: "50%" }}
            onSubmit={(evt) => {
              evt.preventDefault();
            }}
          >
            <div className="input-group m-1 text-center">
              <label htmlFor="search-form" className="form-label m-2 fw-light">
                Country:{" "}
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light border border-secondary"
                id="search-form"
                placeholder="Search"
                aria-label="search form"
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
              <SearchButton></SearchButton>
            </div>
          </form>

          <div className="d-inline text-light fw-light">
            Username
            <i class="bi bi-person-circle"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBarComponent.propTypes = {
  onHamburgerClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default NavBarComponent;

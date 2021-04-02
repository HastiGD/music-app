import "../NavBar.css";
//import useLocation from "react-router-dom";

export default function NavBarComponent({ onHamburgerClick }) {
  // const location = useLocation();
  // console.log("render NavigationComponent", location);

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

        <form className="d-flex">
          <div className="input-group m-1 text-center">
            <input
              type="text"
              className="form-control border border-secondary bg-light"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-secondary" type="button">
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

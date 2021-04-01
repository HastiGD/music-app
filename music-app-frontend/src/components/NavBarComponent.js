import "../NavBar.css";
//import useLocation from "react-router-dom";

export default function NavBarComponent() {
  // const location = useLocation();
  // console.log("render NavigationComponent", location);

  return (
    <nav className="navbar navbar-expand-xxl navbar-light bg-dark">
      <div className="container-fluid">
        <div />
        <form className="d-flex">
          <div className="input-group m-1 text-center">
            <input
              type="text"
              className="form-control border border-light bg-light"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </form>
        <div class="d-inline bg-dark text-light fw-light">
          Username
          <i
            class="bi bi-emoji-smile-fill"
            style={{ fontSize: "1.5rem", color: "white", margin: "0.5rem" }}
          ></i>
        </div>
      </div>
    </nav>
  );
}

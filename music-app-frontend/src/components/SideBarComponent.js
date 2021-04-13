import { Link, useLocation } from "react-router-dom";
import "../SideBar.css";

export default function SideBarComponent() {
  const location = useLocation();

  return (
    <ul>
      <li>
        <i className="bi bi-house-fill">
          <Link
            className={
              "nav-link" &&
              "nav-link" + (location.pathname === "/" ? " active" : "")
            }
            to="/"
          >
            <span className="fw-light">Home</span>
          </Link>
        </i>
      </li>
      <li>
        <i className="bi bi-plus-circle">
          <Link
            className={
              "nav-link" + (location.pathname === "/add" ? " active" : "")
            }
            to="/add"
          >
            <span className="fw-light">Add Music</span>
          </Link>
        </i>
      </li>
      <li>
        <i className="bi bi-geo-alt">
          <Link
            className={
              "nav-link" + (location.pathname === "/countries" ? " active" : "")
            }
            to="/countries"
          >
            <span className="fw-light">Countries</span>
          </Link>
        </i>
      </li>
    </ul>
  );
}

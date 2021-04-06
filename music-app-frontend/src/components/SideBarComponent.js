import { Link, useLocation } from "react-router-dom";
import "../SideBar.css";

export default function SideBarComponent() {
  const location = useLocation();
  console.log("Location", location);
  // // Links and Icons in SideNav
  // const pages = ["Home", "Countries", "Genres", "Add music", "Favorites"];
  // const pathnames = ["/", "/countries", "/genres", "/add", "/favorites"];
  // const icons = [
  //   "bi bi-house-fill",
  //   "bi bi-geo-alt",
  //   "bi bi-music-note-list",
  //   "bi bi-plus-circle",
  //   "bi bi-star",
  // ];

  // // Renders links in SideNav
  // const renderLinks = () => {
  //   return links.map((link, i) => (
  //     <SideBarComponent key={"Link" + i} icon={icons[i]} page={link} />
  //   ));
  // };

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
    </ul>
  );
}

import "../SideBar.css";

export default function SideBarComponent({ icon, link }) {
  return (
    <li>
      <i className={icon}>
        <span className="fw-light">
          <a href="https://reactjs.org/">{link}</a>
        </span>
      </i>
    </li>
  );
}

//<button type="button" className="btn btn-link text-decoration-none">
//<span className="text-light">{link}</span>
//</button>

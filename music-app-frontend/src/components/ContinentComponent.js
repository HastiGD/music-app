import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../ContinentComponent.css";

export default function ContinentComponent({ continent }) {
  const Countries = require("../Continents.json").Countries;
  const Continents = require("../CountriesGrouped.json").Continents;
  const location = useLocation();
  console.log("Location", location);

  const renderCountries = (countryCodesArray) => {
    let i;
    let res = [];
    for (i = 0; i < Countries.length; i++) {
      // console.log(country.code);
      if (countryCodesArray.includes(Countries[i].code)) {
        res.push(
          <li key={"" + Countries[i].code + i}>
            <Link
              className={
                "nav-link" +
                (location.pathname === "/discover" ? " active" : "")
              }
              to={{
                pathname: "/discover",
                state: { country: Countries[i].name },
              }}
            >
              <span className="fw-light">{Countries[i].name}</span>
            </Link>
          </li>
        );
      }
    }
    return res;
  };
  //
  return (
    <div className="continentDiv fw-light">
      <ul>{renderCountries(Continents[continent])}</ul>
    </div>
  );
}

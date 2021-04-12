import React from "react";
import ContinentComponent from "../components/ContinentComponent.js";
import "../CountriesPage.css";

export default function CountriesPage() {
  const renderContinentComponent = (continent) => {
    return (
      <div>
        <br />
        <h1 className="display-6 fs-2">{continent}</h1>
        <ContinentComponent continent={continent} />
        <br />
        <hr />
      </div>
    );
  };

  const continents = [
    "North America",
    "South America",
    "Europe",
    "Asia",
    "Africa",
    "Oceania",
    "Antarctica",
  ];
  return (
    <div>
      <h1 className="display-6">Discover Music from Around the World</h1>
      <br />

      <div className="row">
        {continents.map((continent) => renderContinentComponent(continent))}
      </div>
    </div>
  );
}

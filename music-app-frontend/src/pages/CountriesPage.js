import React from "react";
import ContinentComponent from "../components/ContinentComponent.js";
import "../CountriesPage.css";

export default function CountriesPage() {
  // async function postInputs(input) {
  //   try {
  //     const reqOptions = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         countries: input,
  //       }),
  //     };
  //     const resRaw = await fetch("/addCountries", reqOptions);
  //     const res = await resRaw.json();
  //     console.log("res", res);
  //     console.log("Added countries", res);
  //   } catch (e) {
  //     console.log("Error", e);
  //   }
  // }
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

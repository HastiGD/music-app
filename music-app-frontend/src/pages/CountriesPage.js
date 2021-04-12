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
  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceana"];
  return (
    <div>
      <h1 className="display-6">Discover Music from Around the World</h1>
      {continents.map((continent) => (
        <ContinentComponent continent={continent}></ContinentComponent>
      ))}
    </div>
  );
}

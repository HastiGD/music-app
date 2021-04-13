export default function CountryInfoComponent({ country, countryInfo }) {
  return (
    <div>
      <div class="card w-50">
        <div class="card-body" style={{ backgroundColor: "#f4f1f1" }}>
          <h5 class="card-title fw-light" style={{ color: "black" }}>
            {country}
          </h5>
          <p class="card-text fw-light" style={{ color: "black" }}>
            <ul>
              <li>Capital:</li>
              <li>Language:</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CountryInfoComponent({ country, countryInfo }) {
  const renderCapital = (obj) => {
    if (obj && Object.keys(obj).length === 0 && obj.constructor === Object) {
    } else {
      if (obj.cap.length > 0) {
        return obj.cap[0].city;
      }
    }
  };
  const renderLanguages = (obj) => {
    if (obj && Object.keys(obj).length === 0 && obj.constructor === Object) {
    } else {
      if (obj.langs.length > 0) {
        let langsStr = "";
        let language;
        for (language of obj.langs[0].languages) {
          langsStr = langsStr + language + ", ";
        }
        return langsStr.slice(0, -2);
      }
    }
  };
  return (
    <div>
      <div className="card w-75">
        <div className="card-body" style={{ backgroundColor: "#f4f1f1" }}>
          <h5 className="card-title fw-bold" style={{ color: "black" }}>
            {country}
          </h5>
          <div className="card-text fw-bold" style={{ color: "black" }}>
            <ul>
              <li>
                Capital:{" "}
                <span className="fw-light">{renderCapital(countryInfo)}</span>
              </li>
              <li>
                Languages:{" "}
                <span className="fw-light">{renderLanguages(countryInfo)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

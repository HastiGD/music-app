export default function VideoComponent({ src, country }) {
  // Capitalizes the first letter of the country name
  function capCountry() {
    const words = country.split(" ");
    let Country = words.map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    });
    return Country.join(" ");
  }

  console.log("Rendering Video");
  return (
    <div>
      <h1 className="display-6">Check out this song from {capCountry()}</h1>
      <div>
        <iframe
          width="560"
          height="315"
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

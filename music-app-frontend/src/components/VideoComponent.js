export default function VideoComponent({ src, country }) {
  return (
    <div>
      <h1 class="display-6">Check out this song from {country}</h1>
      <div>
        <iframe
          width="560"
          height="315"
          src={src}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

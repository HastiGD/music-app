export default function VideoComponent({ src }) {
  console.log("Rendering Video");
  return (
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
  );
}

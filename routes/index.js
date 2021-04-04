var express = require("express");
var router = express.Router();

/* GET song from country */
router.get("/country/:country", function (req, res) {
  console.log("in router GET /country");
  const country = req.params.country || "Couldn't get country from front";

  // this needs to be replaced with a call to the db
  let src;
  if (country === "United States") {
    src = "https://www.youtube.com/embed/cwYAeUpH1NM?start=8";
  } else if (country === "Iran") {
    src = "https://www.youtube.com/embed/AfjGqtT53mI?start=8";
  } else if (country === "Colombia") {
    src = "https://www.youtube.com/embed/3n6nR6o6fzM";
  }

  console.log("Got country from front", country);
  res.send({ country: country, genre: "jazz", src: src });
});

module.exports = router;

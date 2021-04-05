var express = require("express");
var router = express.Router();

/* GET song from country */
router.get("/country/:country", function (req, res) {
  console.log("in router GET /country");
  const country = req.params.country || "Couldn't get country from front";

  // this needs to be replaced with a call to the db
  let src;
  if (country === "united states") {
    src = "https://www.youtube.com/embed/cwYAeUpH1NM?start=8";
  } else if (country === "iran") {
    src = "https://www.youtube.com/embed/AfjGqtT53mI?start=8";
  } else if (country === "colombia") {
    src = "https://www.youtube.com/embed/BYZ6b8XObdU";
  } else if (country === "china") {
    src = "https://www.youtube.com/embed/gT1kKkQlafw";
  }

  console.log("Got country from front", country);
  res.send({ genre: "jazz", src: src });
});

module.exports = router;

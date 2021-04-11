var express = require("express");
var router = express.Router();
const myDB = require("../database/db.js");

/* GET song from country */
router.get("/country/:country", async function (req, res) {
  console.log("in router GET /country");
  const country = req.params.country || "Couldn't get country from front";
  console.log("Getting songs from", country);

  // // this needs to be replaced with a call to the db
  // let src;
  // if (country === "united states") {
  //   src = "https://www.youtube.com/embed/cwYAeUpH1NM?start=8";
  // } else if (country === "iran") {
  //   src = "https://www.youtube.com/embed/AfjGqtT53mI?start=8";
  // } else if (country === "colombia") {
  //   src = "https://www.youtube.com/embed/BYZ6b8XObdU";
  // } else if (country === "china") {
  //   src = "https://www.youtube.com/embed/gT1kKkQlafw";
  // }
  try {
    const songs = await myDB.getSongs(country);
    res.send({ songs: songs });
  } catch (e) {
    console.log("Error", e);
  }
});

router.post("/newSong", async function (req, res) {
  // this needs a call to the db
  const url = req.body.url;
  const country = req.body.country;
  const desc = req.body.desc;
  const genre = req.body.desc;
  // console.log(
  //   "url:",
  //   url,
  //   "country:",
  //   country,
  //   "description:",
  //   desc,
  //   "genre:",
  //   genre
  // );

  const song = {
    url: url.slice(-11),
    country: country,
    description: desc,
    genre: genre,
    user: null,
    date: Date.now().toString(),
  };
  let dbRes;
  try {
    dbRes = await myDB.addSong(song);
  } catch (e) {
    console.log("Error", e);
    res.send({ result: dbRes });
  }
});

module.exports = router;

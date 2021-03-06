var express = require("express");
var router = express.Router();
const myDB = require("../database/db.js");

/* GET song from country */
router.get("/country/:country", async function (req, res) {
  const country = req.params.country || "";

  try {
    const songs = await myDB.getSongs(country);
    res.send({ songs: songs });
  } catch (e) {
    console.log("Error", e);
  }
});

router.get("/discover/:country", async function (req, res) {
  const country = req.params.country || "";
  try {
    const cap = await myDB.getCapital(country);
    const langs = await myDB.getLangs(country);
    res.send({ cap: cap, langs: langs });
  } catch (e) {
    console.log("Error", e);
  }
});

router.post("/newSong", async function (req, res) {
  // this needs a call to the db
  const url = req.body.url;
  const country = req.body.country;
  const desc = req.body.desc;
  const genre = req.body.genre;

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
    res.send({ result: dbRes });
  } catch (e) {
    console.log("Error", e);
  }
});

module.exports = router;

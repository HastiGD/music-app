var express = require("express");
var router = express.Router();

/* GET data */
router.get("/data", function (req, res) {
  res.send(["Hasti", "Gheibi", "Dehnashi", "Joon"]);
});

module.exports = router;

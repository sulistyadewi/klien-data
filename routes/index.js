const express = require("express");
const router = express.Router();
const routeKlien = require("./routeKlien");

router.get("/", (req, res) => {
  res.render("home");
});

router.use("/klien", routeKlien);

module.exports = router;

const router = require("express").Router();
const klienController = require("../controller/controllerKlien");
const klien = require("../models/modelKlien");

router.get("/", klienController.showKlien);
router.get("/add", klienController.formKlien);
router.post("/add", klienController.addKlien);
router.get("/:id/delete", klienController.deleteKlien);

module.exports = router;

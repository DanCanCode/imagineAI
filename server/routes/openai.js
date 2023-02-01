const router = require("express").Router();
const { generateImage } = require("../controllers/openaiControllers");

router.post("/", generateImage);

module.exports = router;

const {Router} = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");
const router = Router();

router.get("/characters",middlewares.characterValidation, controllers.getCharacters)
router.post("/characters",middlewares.characterValidation, controllers.createCharacters)

module.exports = router;
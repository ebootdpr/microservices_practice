const {Router} = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");
const router = Router();

router.get("/",middlewares.characterValidation, controllers.getCharacters)
router.post("/",middlewares.characterValidation, controllers.createCharacters)

module.exports = router;
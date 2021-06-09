const router = require("express").Router()
const blogController = require("../Controllers/BlogController")


router.get("/", blogController.tumMakaleler)
router.get("/:id", blogController.tekMakale)
router.post("/", blogController.aramaYap)


module.exports = router
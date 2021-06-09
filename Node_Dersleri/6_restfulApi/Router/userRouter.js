const router 	= require('express').Router();
const User 		=require("../Models/UserModel")

router.get("/", async(req, res) =>{
	const users = await User.find({});
	res.json({Mesaj: "Tüm User lar Listelenecek"})
})

router.get("/:id", (req, res) =>{
	res.json({Mesaj: `ID si ${req.params.id} olan User listelenecek`})
})

router.post("/", (req, res) =>{
	res.json(req.body)
})

router.patch("/:id", (req, res) =>{
	res.json({
		Mesaj: `Patch ID si ${req.params.id}`
	})
})


module.exports = router;





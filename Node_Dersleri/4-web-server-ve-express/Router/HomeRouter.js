const express = require('express');
const router = express.Router()




router.get('/', (req, res) => {
	console.log("Ana sayfaya Girdiniz")
	res.send("Merhaba from index");
});

module.exports = router;

const express = require('express');
const router = express.Router()




router.use((req, res) => {
	res.status(404).send("404 Aradığınız Sayfa bulunmamaktadır")
});

module.exports = router;
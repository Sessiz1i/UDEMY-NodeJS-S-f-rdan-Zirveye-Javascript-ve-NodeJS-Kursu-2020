const axios = require('axios');


const aramaYap = async (req, res) => {
	try {
		const aramaSonuc = await axios.get("https://emrealtunbilek.com/wp-json/wp/v2/posts?search=" + req.body.search)
		res.render('./makaleler/index', {makaleler: aramaSonuc.data})
	} catch (err) {
		console.log(err.response.data)
		console.log(err.response.status)
		console.log(err.response.header)
		res.json({
			Mesaj: 'Hata Çıktı: ' + err.response.data
		})
	}
}


const tumMakaleler = async (req, res) => {
	let sayfa = "", aktifSayfa = 1;
	if (req.query.page) {
		sayfa = "&page="+req.query.page;
		aktifSayfa = req.query.page;
	}
	try {
		const makaleler = await axios.get("https://emrealtunbilek.com/wp-json/wp/v2/posts?per_page=20" + sayfa)
		res.render('./makaleler/index', {makaleler: makaleler.data, sayfalama: makaleler.headers,aktifSayfa})
	} catch (err) {
		console.log(err.response.data)
		console.log(err.response.status)
		console.log(err.response.header)
		res.json({
			Mesaj: 'Hata Çıktı: ' + err.response.data
		})
	}
}

const tekMakale = async (req, res) => {
	let id = req.params.id;
	try {
		const makele = await axios.get("https://emrealtunbilek.com/wp-json/wp/v2/posts/" + id)
		res.render("./makaleler/makale", {makale: makele.data})
	} catch (err) {
		console.log(err.response.data)
		console.log(err.response.status)
		console.log(err.response.header)
		res.json({
			Mesaj: "Hata Çıktı:" + err.response.data
		})
	}
}


module.exports = {
	tumMakaleler,
	tekMakale,
	aramaYap
}
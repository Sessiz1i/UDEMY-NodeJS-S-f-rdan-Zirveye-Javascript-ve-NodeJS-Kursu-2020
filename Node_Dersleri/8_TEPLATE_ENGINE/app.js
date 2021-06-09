const express = require('express');

const app = express();
const path = require("path");

const ejs = require('ejs');
const expressLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("view", path.resolve(__dirname, "yeni_default_view"));
app.use(expressLayouts);
app.set("layout", path.resolve(__dirname, "yeni_default_view/layout_yeni"));



app.get('/', (req, res) => {
	// res.sendFile(path.resolve(__dirname, 'index.html'));
	const
		users = [
			{ad: "Ömer", id: 1},
			{ad: "Ömer2", id: 2},
			{ad: "Ömer3", id: 3},
			{ad: "Ömer4", id: 4},
			{ad: "Ömer5", id: 5},
		],
		dersAdi = "Node Js",
		yas = 32,
		colors = ["Kırmızı", "Mavi", "Yeşil"]

	res.render("index", {
		users,dersAdi,yas,colors
	})
})


app.listen(3000, _ => {
	console.log("3000 Portundan server Ayaklandı")
})

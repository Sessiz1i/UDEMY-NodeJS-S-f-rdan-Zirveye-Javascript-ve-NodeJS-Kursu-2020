const express = require('express');
require('./db/dbConnection');

//ROUTES
const userRoute = require("./Router/userRouter")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoute);

app.get('/', (req, res) => {
	res.status(200).json({"mesaj": "Hoş Geldiniz"})
});








app.listen(3000, _ => {
	console.log(" Server Bağlandı, 3000 Portu Dinleniyor")
});

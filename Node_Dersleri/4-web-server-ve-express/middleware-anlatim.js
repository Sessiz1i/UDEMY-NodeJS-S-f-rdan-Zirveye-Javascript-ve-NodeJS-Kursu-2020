const express = require("express");
const app = express();


function m1(req, res, next) {
 console.log("m1 Deyim")
	next()
}

app.use(m1);

app.use((req,res,next) =>{
	console.log("m2 Deyim")
	//res.send("M2 ye Geldi")
	req.zaman = Date.now();
	next()
});




console.log("Burada")

app.get('/',(req, res) => {
	console.log("M3 yani root rotasındayız req zamanı"+req.zaman)
	res.send(`${req.zaman}`)
});
app.post('/users',(req, res) => {
	console.log("M4 ye Geldi")
});

app.listen(3000, _=>{
	console.log("Port 3000 dinleniyor")
});

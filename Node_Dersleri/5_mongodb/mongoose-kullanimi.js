const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true, useUnifiedTopology: true})
.then(_ => {
	console.log("Veri tabanına bağlanıldı")
})
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
	isim: String
});

const User = mongoose.model("user", userSchema)

const omer = User({isim:"Ömer", age:42});

omer.save().then(res => console.log(res)).catch(err => console.log(err));


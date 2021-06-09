const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true, useUnifiedTopology: true}).then(_ => {
	console.log("Veri Tabanına Bağlanıldı");
}).catch(err => console.log("Bağlantı Hatası: ", err));

const userSchema = new Schema({age:Number,eyeColor:String}, {collection: "user"})
const User = mongoose.model("user", userSchema);


/*
User.find({age: 23}, {address: true, _id:0},{skip: 2,limit: 2}).then(users => console.log(users)).catch(err => console.log(err));
*/

/*
User.find({},{name:1,age:1,eyeColor:1,_id:0})
.and([{age: 30}, {eyeColor: "green"}])
.then(users => console.log(users))
.catch(err => console.log(err));
*/

/*
User.find({},{name:1,age:1,eyeColor:1,isActive: 1,_id:0})
.and([{age:{$gte:28}}, {isActive: true}])
.or([{age: 30}, {eyeColor: "green"}])
.then(users => console.log(users))
.catch(err => console.log(err));
*/

// Sayfalama Yapımı
/*

const sayfaNum = 4;
const sayfaBasinaGonderi = 10;

User.find({})
.skip((sayfaNum -1) * sayfaNum)
.limit(sayfaBasinaGonderi)
.then(users => console.log(users))
*/

User.updateOne({index:5},{eyeColor:"Kahverengi"}).then(res => console.log(res)).catch(err => console.log(err));;












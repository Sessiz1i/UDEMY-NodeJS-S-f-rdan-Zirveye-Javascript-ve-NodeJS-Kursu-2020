/* Mongo insert ( Create )
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
 */

const {MongoClient, ObjectId} = require('mongodb');

const dbURL = 'mongodb://localhost:27017';
const dbName = 'node-dersleri';

MongoClient.connect(dbURL, {useUnifiedTopology: true, useNewUrlParser: true}, (err, result) => {
	if (err) return console.log(`DB bağlantısı Hatalı ${err}`)
	console.log("DB Bağlantı Başarılı")
	const db = result.db(dbName);

	const myId = new ObjectId();
	console.log(myId.id);
	console.log(myId.getTimestamp())
	console.log(myId.toHexString())
/*

	db.collection('test').insertOne({
		_id: myId,
		name:"Ömer",
		updatedAt: new Date
	}).then(res => console.log(res.ops))

*/




	/*

		db.collection("users").insertOne({
			name: "Ömer",
			age: 12,
			gender: "male"
		}, (err, result) => {
			if (err) return console.log(`Veri Eklenemedi ${err}`)
			console.log(result.ops, result.insertedId)
		});

		db.collection("users").insertOne({
			name: "Ali",
			age: 33,
		}).then(result => {
			console.log(`Promise Başarılı`, result.ops);
		}).catch(err => {
			console.log(`Promise Başarısız`,err);
		});

	*/

	// Insert Many
	/*

		db.collection("users").insertMany([
			{name:"Ömer",age:33},
			{name:"Veli",gender:"Male"}
		]).then(result => console.log(result.ops)).catch(err => console.log(err));

	*/

/*	db.collection("product").insertMany([
		{name: "Telefon", marka: "Samsung", model: "Galaxy", stok: 301},
		{name: "Telefon", marka: "LG", model: "Tırıvırı", stok: 321}
	]).then(result => console.log(result.ops)).catch(err => console.log(err));*/
});
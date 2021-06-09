// Mongo Find ( Create )

const {MongoClient, ObjectId} = require('mongodb');

const dbURL = 'mongodb://localhost:27017';
const dbName = 'node-dersleri';

MongoClient.connect(dbURL, {useUnifiedTopology: true, useNewUrlParser: true}, (err, result) => {
	if (err) return console.log(`DB bağlantısı Hatalı ${err}`)
	console.log("DB Bağlantı Başarılı")
	const db = result.db(dbName);

	db.collection('users').find({name: 'Ömer'}).toArray().then(users => console.log(users))

	db.collection('users').find({name: 'Ömer'}, {limit: 3}).toArray().then(users => console.log(users))

	db.collection('users').find({name: 'Ömer'}).limit(5).toArray().then(users => console.log(users))

	db.collection("users").find({name: "Ömer"}).count().then(resCount => console.log(resCount))
	
	db.collection('users').findOne({name:"Ali"}).then(res => console.log(res))
	
	db.collection('users').findOne({_id: new ObjectId("60a41af4db5ba027c89001a5")}).then(users => console.log(users))

});
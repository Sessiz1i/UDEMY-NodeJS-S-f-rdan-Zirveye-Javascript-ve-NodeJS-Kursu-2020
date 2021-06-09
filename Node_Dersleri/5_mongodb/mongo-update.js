// Mongo Find ( Create )

const {MongoClient, ObjectId} = require('mongodb');

const dbURL = 'mongodb://localhost:27017';
const dbName = 'node-dersleri';

MongoClient.connect(dbURL, {useUnifiedTopology: true, useNewUrlParser: true}, (err, result) => {
	if (err) return console.log(`DB bağlantısı Hatalı ${err}`)
	console.log("DB Bağlantı Başarılı")
	const db = result.db(dbName);

	db.collection('users').updateMany({name:"Yeni Ömer"},{
		$set:{name:"YenYeni Ömer"}, $inc:{age:100}}).then(res => {console.log(res)})

});
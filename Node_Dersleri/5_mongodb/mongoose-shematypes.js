const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true, useUnifiedTopology: true}).then(_ => {
	console.log("Veri Tabanına Bağlanıldı");
}).catch(err => console.log("Bağlantı Hatası: ", err));

const schema = new Schema({name: String});
console.log(schema.path("name") instanceof mongoose.SchemaType);
console.log(schema.path("name") instanceof mongoose.Schema.Types.String);
console.log(schema.path("name").instance);
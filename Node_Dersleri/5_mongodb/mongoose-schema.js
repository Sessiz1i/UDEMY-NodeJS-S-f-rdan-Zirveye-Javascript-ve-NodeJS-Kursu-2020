const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true, useUnifiedTopology: true}).then(_ => {
	console.log("Veri Tabanına Bağlanıldı");
}).catch(err => console.log("Bağlantı Hatası: ", err));

var blogSchema = new Schema({
	title: String,
	author: String,
	body: String,
	comments: [{body: String, date: Date}],
	date: {type: Date, default: Date.now},
	hidden: Boolean,
	meta: {
		votes: Number,
	}
}, {collection: "Yazılarım",minimize: false,bufferCommands:true,timestamps:true});

blogSchema.methods.basligiGoster = function (aa) {
	return this.title + aa;
}

blogSchema.statics.basligaGoreElemanGetir = function (baslik){
	return this.find({title:baslik})
}


blogSchema.virtual("ozet").get(function (){
	return "Bu Bloğun Başlığı: "+this.title+" ve Yazarı: "+this.author;
})




const Blog = mongoose.model('blog', blogSchema);
const myBlog = new Blog({title: 'İlk Blog'});

console.log(myBlog.basligiGoster())

/*myBlog.save().then(res => console.log(res)).catch(err => console.log(err));


Blog.create({title: 'İkinci Bloğum'});

Blog.basligaGoreElemanGetir("İlk Blog").then(res =>console.log(res));*/


const myBlog2 = new Blog({title: "Timestamp Kulanımı",author: "Ömer Ölgün"});

console.log(myBlog2.ozet)
console.log(myBlog2.toJSON({virtuals:true}))

myBlog2.save();
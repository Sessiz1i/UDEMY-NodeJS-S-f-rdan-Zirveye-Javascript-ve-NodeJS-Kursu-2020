/*
const selamVer = function (){
	console.log("Merhaba")
}

selamVer();

const selamVerArrowFunction = _=> console.log("ArowFunction Merhaba")

selamVerArrowFunction();*/


/*
const karesiniAl = function (sayi) {
	return sayi * sayi;
}

console.log(karesiniAl(5))

const karesiniAlArrowFunction = (sayi) => {
	return sayi * sayi
};

console.log(karesiniAlArrowFunction(4))

const karesiniAlArrowFunction1 = sayi => sayi * sayi;

console.log(karesiniAlArrowFunction1(6))
*/


const test = function () {
	console.log(this)
}
test();

const test1 = () => {
	console.log(this)
}
test1();

const person = {
	isim: "Ömer Ölgün",
	sevdigiRenkler: ["Mavi", "Kırmızı"],
	bilgileriGoster: function () {
		console.log(this);
		const obje = this
		this.sevdigiRenkler.forEach(function (renk) {
			console.log(`İsim: ${obje.isim} Sevdiği renkler: ${renk}`)
		})
	},
}

person.bilgileriGoster();

const person2 = {
	isim: "Ömer Ölgün",
	sevdigiRenkler: ["Mavi", "Kırmızı"],
	bilgileriGoster() {
		console.log(this.isim)
		this.sevdigiRenkler.forEach((renk) => {
			console.log(`İsim: ${this.isim} Sevdiği renkler: ${renk}`)
		})
	}
}

person2.bilgileriGoster();





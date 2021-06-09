console.log("Program Başladı");

getUser(121, userigetir)

function userigetir(userObj) {
	getCourse(userObj.isim, kurslariGoster)
}

function kurslariGoster(kursDizisi) {
	getComments(kursDizisi[0], yorumGoster);
}

function yorumGoster(yorum) {
	console.log(yorum)
}


console.log("Program Bitti");

function getUser(id, callback) {
	console.log(`${id} User Getiriliyor`)
	setTimeout(() => {
		callback({id: id, isim: "Ömer"});
	}, 1500)
}

function getCourse(userName, callback) {
	console.log(`${userName} Kişisinin Kursları Getirelecek`)
	setTimeout(() => {
		callback(["Java", "PHP", "HTML"]);
	}, 2000)
}

function getComments(kursAdi, callback) {
	console.log(`${kursAdi} İsimli kursun yorumları getiriliyor`)
	setTimeout(() => {
		callback("Harika Avcı Bir Kurs")
	}, 2000)
}


/*
// Senkron
console.log("Program Başladı");

const user =getUser(123)
const kurs = getCourse(user)
const yorum = getComments(kurs[0])
console.log(yorum)*/




console.log("Başladı")

console.log("Bitti")

function getUser(id) {
	return new Promise((resolve, reject) => {
		console.log(`${id} User Getiriliyor`)
		setTimeout(() => {
			resolve({id: id, isim: "Ömer"});
		}, 1500)
	})
}

function getCourse(userName) {
	return new Promise((resolve, reject) => {
		console.log(`${userName} Kişisinin Kursları Getirelecek`)
		setTimeout(() => {
			resolve(["Java", "PHP", "HTML"]);
		}, 2000);
	})
}

function getComments(courseName) {
	return new Promise((resolve, reject) => {
		console.log(`${courseName} İsimli kursun yorumları getiriliyor`)
		setTimeout(() => {
			reject("Yorum getirilirken hata oluştu")
			resolve("Harika Avcı Bir Kurs")
		}, 2000)
	})
}

async function getYorum() {
	try {
		const userObj = await getUser(123);
		const courseSequence = await getCourse(userObj.isim);
		const comments = await getComments(courseSequence[0])
		console.log(comments)
	} catch (err) {
		console.log(`Bir hata oluştu: ${err}`)
	}
}

console.log("getYorum'dan Önce")

getYorum();

console.log("getYorum'dan Sonra")


getUser(123)
.then(userObj => getCourse(userObj.isim))
.then(courseSequence => getComments(courseSequence[0]))
.then(comments => console.log(comments))
.catch(err => console.log(`Bir hata oluştu: ${err}`))

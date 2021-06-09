
const myPromise = new Promise((resolve, reject) => {
	console.log("3 Saniyelik işlem başladı")
	setTimeout(()=>{
		console.log("3 saniyelik işlem bitti");
		reject("Hata Çıktı")
		resolve("İşlem sonucu burada");

	},3000)

})

myPromise.then((sonuc =>{
	console.log(sonuc);
} )).catch(err => {
	console.log(`Hata ${err}`)
})
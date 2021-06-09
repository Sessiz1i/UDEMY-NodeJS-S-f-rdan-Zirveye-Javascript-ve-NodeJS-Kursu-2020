const fs = require("fs");
const chalk = require("chalk")

const elke = (name, telNo) => {
	const kisilerDizisi = dosyadanKisileriOku();
	const ayniAdaSahipKisilerDizisi = kisilerDizisi.filter((kisi) => kisi.isim === name);
	if (ayniAdaSahipKisilerDizisi.length === 0) {
		kisilerDizisi.push({
			isim: name,
			tel: telNo
		});
		dosyayaKisileriYaz(kisilerDizisi);
		console.log(chalk.green.inverse.bold(name + " İsimli kişi eklendi"))
	} else {

		console.log(chalk.red.inverse.bold(name + " İsimli kayıt zaten var"))
	}
}

const dosyayaKisileriYaz = kisilerDizisi => {
	const jsonData = JSON.stringify(kisilerDizisi);
	fs.writeFileSync("kisiler.json", jsonData)
}

const dosyadanKisileriOku = _ => {
	try {
		const dataBuffer = fs.readFileSync("kisiler.json")
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
}

const sil = isim => {
	const tumKisiler = dosyadanKisileriOku();
	const dosyayaTekrarYazilacakKisiler = tumKisiler.filter(kisi => kisi.isim !== isim)
	if (tumKisiler.length > dosyayaTekrarYazilacakKisiler.length) {
		dosyayaKisileriYaz(dosyayaTekrarYazilacakKisiler);
		console.log(chalk.green.inverse.bold(isim + " Kişi silindi"))
	} else {
		console.log(chalk.red.inverse.bold(isim + " İsimli kişi bulunamadı"))
	}
}

const goster = isim => {
	const kisilerDizisi = dosyadanKisileriOku();
	const arananKisi = kisilerDizisi.find(kisi => kisi.isim === isim)

	if (arananKisi) {
		return console.log(chalk.green.inverse.bold(`Adı: ${arananKisi.isim} - Tel No: ${arananKisi.tel}`));
	} else {
		console.log(chalk.red.inverse.bold(`${isim} İsimli kişi bulunamadı`));
	}
}

const listele = _ => {
	const kisilerDizisi = dosyadanKisileriOku();
	kisilerDizisi.forEach(kisi => console.log(chalk.blue.inverse.bold(`Adı: ${kisi.isim} - Tel No: ${kisi.tel}`)))
}

module.exports = {
	kisiEkle: elke,
	kisiSil: sil,
	kisiGoster: goster,
	kisiListele: listele
}
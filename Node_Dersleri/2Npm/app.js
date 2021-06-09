const yargs = require('yargs');
const kisi = require("./kisi");


yargs.version("1.0.1");


// Kişi ekle komutu
yargs.command({
	command: "ekle",
	describe: "Yeni kişi ekler",
	builder: {
		isim: {
			describe: "Eklenecek kişi Adı...",
			demandOption: true,
			type: "string"
		},
		tel: {
			describe: "Eklenecek Tel No...",
			demandOption: true,
			type: "string",
			maxLength: "11",
			minLength: "11"
		}
	},
	handler(argv) {
		kisi.kisiEkle(argv.isim, argv.tel);
	}
});
// Kişi sil
yargs.command({
	command: "sil",
	describe: "Kişi siler",
	builder: {
		isim: {
			describe: "Silinecek kişi Adı...",
			demandOption: true,
			type: "string"
		},
	},
	handler(argv) {
		kisi.kisiSil(argv.isim)
	}

});

// Kişi Gösterir
yargs.command({
	command: "show",
	describe: "Kişi Gösterir",
	builder: {
		isim: {
			describe: "Gösterilecek kişi Adı...",
			demandOption: true,
			type: "string"
		},
	},
	handler(argv) {
		kisi.kisiGoster(argv.isim)
	}

});

yargs.command({
	command: "index",
	describe: "Kişileri listeler",
	handler() {
		kisi.kisiListele()
	}

});


yargs.parse();
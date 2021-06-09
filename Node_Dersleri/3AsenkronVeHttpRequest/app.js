const https = require('https');
const yargs = require('yargs');
const capitalWeather = require("./capital-weather");

run();

function run() {
	yargs.command({
		command: 'getir',
		describe: "Bilgilerini istediğiniz ülke",
		builder: {
			ulke: {
				describe: "Ülke adını ingilizce giriniz",
				demandOption: true,
				type: "string"
			}
		},
		handler(argv) {
			capitalWeather(argv.ulke);
		}
	});
	yargs.parse();
}

module.exports = run;


/*

https.get("https://restcountries.eu/rest/v2/name/turkey", response => {

	let data = "";
	response.on("data", chunk => data += chunk);

	response.on("end", _ => {
		const jsonData = JSON.parse(data)
		console.log(jsonData[0])
		console.log(jsonData[0].timezones[0])
		console.log(jsonData[0].currencies[0].code)
	})

}).on("error", err => console.error(err));

*/









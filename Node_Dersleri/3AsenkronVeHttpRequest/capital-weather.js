const axios = require('axios');

function findCapitalWeather(ulke) {

	axios.get(`https://restcountries.eu/rest/v2/name/${ulke}`).then(res =>{
	/*	const ulke = ulkeData.nativeName;
		const basKent = ulkeData.capital;
		const nusuf = ulkeData.population;
		const enlem = ulkeData.latlng[0];
		const boylam = ulkeData.latlng[1];*/

		const [{nativeName:ulke,capital:basKent,population:nufus,latlng:[enlem,boylam]}] = res.data;

		console.log(`Ülke Adı: ${ulke} - Başkent: ${basKent} - Nüfuzu: ${nusuf} - Enem: ${enlem} - Boylam: ${boylam}`);

		axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${basKent}&units=metric&lang=tr&appid=dc3da9e49b3f4b5adfe29e2ff68d4cd2`).then(res =>{
			const {name:sehir,weather:[{description:aciklama}],main:{temp:sicaklik}} = res.data;

			console.log(`Başkent ${sehir} bu gün hava ${aciklama} sıcaklık ${sicaklik}`)
		})
	})
}

module.exports = findCapitalWeather;





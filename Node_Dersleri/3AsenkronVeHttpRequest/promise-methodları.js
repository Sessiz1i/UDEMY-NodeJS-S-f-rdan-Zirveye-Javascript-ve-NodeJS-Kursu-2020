let data = 0;

const p1 = new Promise((resolve, reject) => {
	setTimeout(_ => {
		if (data === 0) {
			resolve("P1 Başarılı")
		} else {
			reject("P1 Hatalı")
		}
	}, 3000)
})

const p2 = new Promise(resolve => {

	setTimeout(_ => resolve("P2 4 sn Sonra Bitti"), 4000)
})

const promiseAll = Promise.all([p2, p1]);

promiseAll.then(result => console.log(result))
.catch(err => console.log(err));

Promise.race([p1, p2]).then(result => console.log(result))



const express = require('express');
const router = express.Router()
const Joi = require('joi');

const users =
	[
		{id: 1, name: "Ömer", age: 42},
		{id: 2, name: "Ali", age: 55},
		{id: 3, name: "Veli", age: 33},
		{id: 4, name: "Osman", age: 22},
	];


router.get('/', (req, res) => {
	console.log(req.query)
	if (req.query.ters) {
		res.send(users.reverse());
	} else {
		res.send(users);
	}
	console.log("Users sayfasına Girdiniz")

});

router.get('/:id', (req, res) => {
	const getUser = users.find(user => user.id === parseInt(req.params.id));
	if (getUser) {
		res.send(getUser);
	} else {
		res.status(404).send(`${req.params.id} User Bulunamadı`)
	}
});

router.post('/', (req, res) => {

	const {error} = validation(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	} else {
		const newUser = {
			id: users.length + 1,
			name: req.body.name,
			age: req.body.age
		}
		users.push(newUser)
		return res.send(newUser)
	}


});

router.put('/:id', (req, res) => {
	const user = users.find(user => user.id === parseInt(req.params.id))
	if (!user) {
		return res.status(404).send(`${req.params.id} id li bir kulanıcı bulunamadı`)
	} else {
		const {error} = validation(req.body);

		if (error) {
			return res.status(400).send(error.details[0].message);
		} else {
			user.name = req.body.name;
			user.age = req.body.age;
			return res.send(user)
		}
	}
});

router.delete('/:id', (req, res) => {
	const user = users.find(user => user.id === parseInt(req.params.id))
	if (user) {
		const index = users.indexOf(user);
		users.splice(index, 1)
		res.send(user)
	} else {
		res.status(404).send(`${req.params.id} Kulanıcı bulunamadı`)
	}
});

function validation(user) {
	const schema = Joi.object({
		name: Joi.string().alphanum().min(3).max(25).required(),
		age: Joi.number().integer().min(15).max(99).required()
	});
	return schema.validate(user);
}

module.exports = router;
const express = require('express');
const morgan = require('morgan');
const app = express();
// Router lar
const HomeRouter = require('./Router/HomeRouter');
const UserRouter = require('./Router/UserRouter');
const Route404 = require('./Router/404Router');



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(morgan("combined"));

app.use("/", HomeRouter);
app.use("/users",UserRouter);
app.use(Route404)



app.listen(3000, _ => {
	console.log("Server 3000 portunu dinliyor.")
});

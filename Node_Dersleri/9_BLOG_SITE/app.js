const express = require('express');
const app =express();
const blogRoute = require("./src/Routers/BlogRouter");
const ejs = require('ejs');
const path = require('path');
const expressLayout = require('express-ejs-layouts')

app.use(express.static("public"))
app.use(expressLayout);
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname,'./src/views'))

app.use(express.urlencoded({extended:true}));

app.use("/", blogRoute)
app.use("/blog", blogRoute)



app.listen(3000, _=>{
	console.log("3000 Portundan Server Bağlandı")
})
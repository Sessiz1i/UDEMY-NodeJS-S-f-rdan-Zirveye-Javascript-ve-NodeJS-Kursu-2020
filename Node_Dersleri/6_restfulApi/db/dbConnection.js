const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/restfulapi", {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
.then(_ => console.log("Connected to Server"))
.catch(err => console.log("Failed to connect Server", err));

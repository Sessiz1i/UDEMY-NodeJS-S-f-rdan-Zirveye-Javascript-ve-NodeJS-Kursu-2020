const path = require("path")

const fs = require("fs")

console.log(path.parse(__dirname))

fs.readdir("./", {withFileTypes:true},(err,files)=>{
    console.log(err)
    console.log(files[0])
})
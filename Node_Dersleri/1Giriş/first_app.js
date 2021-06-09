const myModul = require("./modulNedir")
const pcInfo = require("./pc_modul")

function selamVer() {
    console.log("Merhaba Node JS")
}

selamVer();

console.log(myModul.isim)
myModul.topla(3,5)

pcInfo.pcInfo()


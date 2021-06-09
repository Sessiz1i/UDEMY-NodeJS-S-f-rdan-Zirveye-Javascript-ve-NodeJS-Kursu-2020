/*
        Odev 1
*/




let zaman   =   parseInt(prompt("Dakika ve saniye kesaplamak için uzun bir sayı giriniz.")).toFixed(0)


let saniye  = zaman % 60;

let dakika = (zaman - saniye) / 60;

alert(`${zaman} Saniye : ${dakika} Daika ve ${saniye} Saniye dir.`)






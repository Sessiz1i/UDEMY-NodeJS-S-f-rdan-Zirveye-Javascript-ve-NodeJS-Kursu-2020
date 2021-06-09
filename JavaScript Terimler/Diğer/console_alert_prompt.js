let myAge = 33;
console.log(myAge);
console.error("console.error() Hata Mesajı");
console.warn("console.warn() Dikkat mesajı.");

let bilgiler = {
    isim: "Ömer",
    soyIsim: "ÖLGÜN",
    yas: "33",
    ders1: "JavaScript",
    ders2: "NodeJs"
}
console.table(bilgiler);

console.time("id");
console.error("console.error() Hata Mesajı");
console.error("console.error() Hata Mesajı");
console.error("console.error() Hata Mesajı");
console.table(bilgiler);
console.table(bilgiler);
console.table(bilgiler);
console.table(bilgiler);
console.timeEnd("id");


alert("Alert Mesaj Paneli");

console.clear();

let girilenSayı = prompt("Bir Sayı giriniz");

alert("Girmiş olduğunuz sayı: "+girilenSayı)



/*
	Aslında 2 tip veri Türü vardır.
	Primitive ve Referans Veri Türleri
	
	Primitive tipler: Number, String, Boolean, Undefined, Null Symbol
	Referans tipler: Object, Array
 */

let sayi = 50;
console.log(sayi);
console.log(typeof sayi);

let ondalikSayi = 44.44;
console.log(ondalikSayi);
console.log(typeof ondalikSayi);

let negatifSayi = -44.44;
console.log(negatifSayi);
console.log(typeof negatifSayi);

let isim = "Ömer";
let soyIsim = 'Ölgün';
let metin = 'Ömer\'in Dersleri';
console.log(metin);
    metin = "Ömer'in Dersleri";
console.log(metin)
console.log(isim);
console.log(typeof isim);

console.clear();

let tamIisim = isim+soyIsim;
console.log(tamIisim);

console.log(isim+" "+soyIsim);

tamIisim = `${isim}${soyIsim}`;

console.log(tamIisim);

tamIisim = `${isim}      ${soyIsim}`;

console.log(tamIisim);

tamIisim = `${isim} ${soyIsim}`;

console.log(tamIisim);

console.log(`Templete Literal Ile Yazdır: ${tamIisim}`);

let asalSayiMi = true;
console.log("Veri Türü değeri: "+asalSayiMi+" Veri tipi: "+typeof asalSayiMi);
console.log(`Veri türü değeri: ${asalSayiMi} Veri tipi: ${typeof asalSayiMi}`);

let renk;
console.log(renk);
console.log(typeof renk);

 renk ="Yeşil";
console.log(renk);
console.log(typeof renk);

let yas=null
console.log(`Veri İçerik: ${yas} Veri Tipi: ${typeof yas}`);






let sistemSayi1 = parseInt(Math.random() * 10);
let sistemSayi2 = parseInt(Math.random() * 10);
let sistemSayi = sistemSayi1 + "" + sistemSayi2;




let userSayi = prompt("Yarışmaya katılmak için 2 basamaklı bir sayı giriniz", "Şanslı Sayınızı yazın...");


let userSayi1 = userSayi[0];
let userSayi2 = userSayi[1];

if (sistemSayi == userSayi)
{
    alert(`Sistem Sayısı    : ${sistemSayi}\nSizin Sayınız     : ${userSayi}\nTebrikler 10.000 TL Kazandınız.`)
}
else if (sistemSayi1 == userSayi2 && sistemSayi2 == userSayi1)
{
    alert(`Sistem Sayısı    : ${sistemSayi}\nSizin Sayınız     : ${userSayi}\nTebrikler 5.000 TL Kazandınız.`)
}
else if ((sistemSayi1 == userSayi1 && sistemSayi1 != userSayi2) || (sistemSayi2 == userSayi2 && sistemSayi2 != userSayi1))
{
    alert(`Sistem Sayısı    : ${sistemSayi}\nSizin Sayınız     : ${userSayi}\nTebrikler 1.000 TL Kazandınız.`)
}
else
{
    alert(`Sistem Sayısı    : ${sistemSayi}\nSizin Sayınız     : ${userSayi}\nTebrikler 3 ün 1 ini Kazandınız.`)
}










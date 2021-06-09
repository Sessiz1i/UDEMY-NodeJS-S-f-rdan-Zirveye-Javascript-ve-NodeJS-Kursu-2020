let gun = 7;


switch (gun)
{
    case 1:
        document.getElementById("sonuc").innerHTML = "Pazartesi";
        break;
    case 2:
        document.getElementById("sonuc").innerHTML = "Salı";
        break;
    case 3:
        document.getElementById("sonuc").innerHTML = "Çarşamba";
        break;
    case 4:
        document.getElementById("sonuc").innerHTML = "Perşembe";
        break;
    case 5:
        document.getElementById("sonuc").innerHTML = "Cuma";
        break;
    case 6:
        document.getElementById("sonuc").innerHTML = "Cumartesi";
        break;
    case 7:
        document.getElementById("sonuc").innerHTML = "Pazar";
        break;
    default: document.getElementById("sonuc").innerHTML = "Hafta da 7 gün var HACI sen ne ayaksın?";
}
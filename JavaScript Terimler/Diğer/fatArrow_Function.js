// fatArrow function Parametreli

let fatArrowParametreli = (param1, param2) => {

    document.write(param1 + " - " + param2);
}
let isim = "Ömer";
let soyIsim = "Ölgün";

fatArrowParametreli(isim, soyIsim);

// fatArrow function Parametresiz

let fatArrowParametresiz = _ => {

    let isim = "Ali";
    let soyIsim = "Kambak";

    document.write(isim + " - " + soyIsim);
}
document.write("<br>");

fatArrowParametresiz();


// fatArrow function parametreli Daha da kısa

let fatArrowPparametresizKısa = param => param * param;

document.write("<br>");
document.write(fatArrowPparametresizKısa(5));












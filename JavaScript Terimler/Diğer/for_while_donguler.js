
/*
    For Döngüsü
*/

for (let i = 0; i <= 10; i += 1)
{
    document.getElementById("for").innerHTML += `for Döngüsü = ${i}<br>`;
}

/*
    While Döngüsü
*/


let w=0;
while (w <= 10){
    document.getElementById("while").innerHTML += `while Döngüsü = ${w}<br>`;
    w++;
}

/*
   do While Döngüsü
*/


let d=0;
do {
    d++;
    document.getElementById("while").innerHTML += `do while Döngüsü = ${d}<br>`;
}while(d <= 10);
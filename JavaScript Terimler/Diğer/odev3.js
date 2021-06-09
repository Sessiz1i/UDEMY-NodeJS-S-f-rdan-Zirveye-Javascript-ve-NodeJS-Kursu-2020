for (let i = 0; i < 1 ;)
{
    let yil = parseInt(prompt(`Bir yıl girin, bakalım artık bir yıl mı?`,"2020"))
    console.log(typeof yil)
    if(isNaN(yil))
    {
        alert("Lütfen bir rakkam giriniz.")
    }
    else
    {
        if((yil % 400 == 0) || (yil % 4 == 0) && (yil % 100 != 0))
        {
            alert(`Girmiş olduğunuz yıl: ${yil} Bu bir artık yıl dır.`)
        }
        else
        {
            alert(`Girmiş olduğunuz yıl: ${yil} Bu bir artık yıl değildir.`)
        }
        i++;
    }
}






let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
    const Data = JSON.parse(xhr.response);
    console.log(Data);
    for (let i = 0; i<Data.length; i++){
        console.log(Data [i].flags);
    }


}

    

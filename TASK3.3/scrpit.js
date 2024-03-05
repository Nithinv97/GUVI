let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
    const Data = JSON.parse(xhr.response);
    for (let i = 0; i<Data.length; i++){
        console.log(Data [i].name.common);
        console.log(Data[i].region);
        console.log(Data[i].subregion);
        console.log(Data[i].population);
    }


}
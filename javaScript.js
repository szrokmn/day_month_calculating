var gunler = [ "Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

var aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım","Aralık"];


let today = new Date();

document.getElementById("date").innerHTML = `${today.getDate()}.${today.getMonth()+1}.${today.getUTCFullYear()} - ${gunler[today.getDay()]}`;



function calculating() {

let gun = parseInt(document.getElementById("gün").value);
let ay = parseInt(document.getElementById("ay").value);

let sonuc1 = new Date(
    new Date().getFullYear(),
    new Date().getMonth(), 
    new Date().getDate() + (gun ? gun:0)
);



document.getElementById("günsonuc").innerHTML = `${sonuc1.getDate()}.${sonuc1.getMonth()+1}.${sonuc1.getUTCFullYear()} - ${gunler[sonuc1.getDay()]}`;



let sonuc2 = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + (ay ? ay:0), 
    new Date().getDate() 
);

document.getElementById("aysonuc").innerHTML = `${sonuc2.getDate()}.${sonuc2.getMonth()+1}.${sonuc2.getUTCFullYear()}- ${aylar[sonuc2.getMonth()]}`;

}




 
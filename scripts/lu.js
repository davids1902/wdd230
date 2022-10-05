const year = document.querySelector("#year");
const YEAR = new Date();
year.innerHTML= YEAR.toLocaleDateString('en-us',{year:'numeric'});


let text = document.lastModified;
//document.getElementById("currentDate").innerHTML = text;
// document.querySelector("#currentDate") = "Hola";

const LMsel = document.querySelector("#currentDate");
const LMvar = new Date();
const details = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
LMsel.innerHTML= LMvar.toLocaleDateString('en-us',details);




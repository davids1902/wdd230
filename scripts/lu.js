// This code will show the current YEAR beside the copyright mark. 
const year = document.querySelector("#year");
const YEAR = new Date();
year.innerHTML= YEAR.toLocaleDateString('en-us',{year:'numeric'});

// This code  will show the last date modified of the document, on the footer.(Details are custom) 
const LMsel = document.querySelector("#currentDate");
const LMvar = new Date();
const details = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' };
LMsel.innerHTML= LMvar.toLocaleDateString('en-us',details);




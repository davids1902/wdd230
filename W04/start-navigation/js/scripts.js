
//Banner-------------------------------------------------
const dayNumber = now.getDay();
const element = document.getElementById("banner");

if (dayNumber == 1 || dayNumber == 2 ) {
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
}

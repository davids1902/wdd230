const visitor = document.querySelector(".visitor");

let MSinDay = 1000 * 60 * 60 * 24;
let today = Date.now();
let numvisitor = Number(localStorage.getItem("visitor"));
let lastVisit = localStorage.getItem('dateVisited');
let daysPassed, difference;
 
if (numvisitor !== 0) {
    localStorage.setItem("dateVisited", today);
    difference = today - lastVisit
    daysPassed = Math.round(difference / MSinDay)
    daysPassed = "Welcome!"
}else {
    localStorage.setItem('visitor', 1)
    localStorage.setItem("dateVisited", today);
    daysPassed = "Thank you for returning."

}

numvisitor++

localStorage.setItem('visitor', numvisitor)

visitor.textContent = daysPassed
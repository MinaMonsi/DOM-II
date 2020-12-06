//  Your code goes here
const logo = document.querySelector(".logo-heading");
logo.addEventListener("click", (e) => {
  alert("Let's plan a trip!");
});

window.addEventListener("load", (e) => {
  console.log(`${event.type} happened`);
});

const intro = document.querySelector(".intro");
console.log(intro);
intro.addEventListener("mouseenter", (e) => {
  intro.style.backgroundColor = "pink";
});

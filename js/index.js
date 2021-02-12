//  Your code goes here
const logo = document.querySelector(".logo-heading");
logo.addEventListener("click", (e) => {
  alert("Let's plan a trip!");
});

window.addEventListener("load", (e) => {
  console.log(`${event.type} happened`);
});

const introImg = document.querySelector(".intro img");
console.log(introImg);

introImg.addEventListener("mouseenter", () => {
   introImg.style.transform = "scale(1.2)";
   introImg.style.transition = "all 0.3s";
 });


const navLinks = document.querySelector(".nav-link");
//console.log(navLinks);

navLinks.addEventListener('focus',(event) => {
  event.target.style.background = 'yellow';
  event.target.style.color = "red";
});
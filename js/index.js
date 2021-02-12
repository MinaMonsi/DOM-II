//  Your code goes here
//1. CLICK EventListner
const logo = document.querySelector(".logo-heading");
logo.addEventListener("click", (e) => {
  alert("Let's plan a trip!");
});

//2. LOAD EventListner
window.addEventListener("load", (e) => {
  console.log(`${event.type} happened`);
});

//3. MOUSEENTER EventListner
const introImg = document.querySelector(".intro img");
//console.log(introImg);
introImg.addEventListener("mouseenter", () => {
   introImg.style.transform = "scale(1.2)";
   introImg.style.transition = "all 0.3s";
 });

//4. FOCUS EventListner
const navLinks = document.querySelectorAll(".nav-link");
//console.log(navLinks);
navLinks.forEach(links => {
  links.addEventListener('focus',(event) => {
    event.target.style.color = "red"
    event.target.style.background = "yellow"
  })
});

//5. RESIZE EventListener
const imgContent = document.querySelector(".img-content img");
//console.log(imgContent);
 window.addEventListener('resize', () => {
   imgContent.src = "https://www.fodors.com/wp-content/uploads/2018/09/4_MachuPicchu101_WhereCanIGetBestPhoto_dreamstime_xxl_55205752_1-724x483.jpg"
 })

 //6. MOUSEOVER EventListner
 const destination = document.querySelector(".content-destination")
 //console.log(destination);
 destination.addEventListener("mouseover", (event) => {
   event.stopPropagation();
   event.target.style.backgroundColor = "aqua";
   event.target.style.color = "#7a38f5"
   console.log("End destination content.")
 })

 //7. WHEEL EventListner
 const advAwaits = document.querySelector(".text-content");
 console.log(advAwaits);

 
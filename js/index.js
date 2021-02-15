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
  //  console.log("End destination content.")
 })

 //7. WHEEL EventListner
 const fun = document.querySelector(".text-content h2");
 //console.log(fun);
fun.addEventListener("wheel", () => {
  fun.style.transform = "scale(.7)";
  fun.style.transition = "all 0.5s";
});

//8. SCROLL EventListner
 window.addEventListener('scroll', (event) => {
   if (window.scrollY >= 200) {
     alert("scrolled")
   }
 })

//9. DBLCLICK EventListner
const home = document.querySelector(".intro p");
//console.log(home);
 home.addEventListener("dblclick", (event) => {
   event.target.style.backgroundColor = "papayawhip"
   console.log("dblclick works")
 });

//10. MOUSEOUT EventListner
const bottomText = document.querySelectorAll(".content-pick p");
//console.log(bottomText);
 bottomText.forEach(text => {
   text.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "#8feb34";
    event.target.style.color = "white";
   })
 });



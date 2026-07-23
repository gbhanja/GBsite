/*==================================================
Gourab Bhanja Portfolio
script.js
Part 1
==================================================*/

/*-------------------------------
Typing Animation
--------------------------------*/

const words = [
  "Quantum Information Theory",
  "Open Quantum Systems",
  "Quantum Thermodynamics",
  "Quantum Batteries"
];

const typing = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const current = words[wordIndex];

  if (!deleting) {

    typing.textContent = current.substring(0, charIndex);

    charIndex++;

    if (charIndex > current.length) {

      deleting = true;

      setTimeout(typeEffect, 1500);

      return;

    }

  } else {

    typing.textContent = current.substring(0, charIndex);

    charIndex--;

    if (charIndex < 0) {

      deleting = false;

      wordIndex = (wordIndex + 1) % words.length;

      charIndex = 0;

    }

  }

  setTimeout(typeEffect, deleting ? 40 : 80);

}

typeEffect();

/*-------------------------------
Scroll Progress Bar
--------------------------------*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

  const winScroll =
    document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress =
    (winScroll / height) * 100;

  progressBar.style.width = progress + "%";

});

/*-------------------------------
Navbar Shadow
--------------------------------*/

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.padding = "14px 8%";

    navbar.style.boxShadow =
      "0 8px 25px rgba(0,0,0,.25)";

  } else {

    navbar.style.padding = "18px 8%";

    navbar.style.boxShadow = "none";

  }

});

/*==================================================
Scroll Reveal Animation
==================================================*/

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},

{

threshold: 0.15

}

);

document.querySelectorAll(

".research-card,.conference-card,.publication-card,.timeline-item,.about-image,.about-content,.stat-box,.contact-card,.contact-form"

).forEach(el => {

el.classList.add("fade");

observer.observe(el);

});

/*==================================================
Active Navigation Link
==================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("#nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const top = section.offsetTop - 120;

const height = section.offsetHeight;

if (window.scrollY >= top) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {

link.classList.add("active");

}

});

});

/*==================================================
Smooth Scroll
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault();

const target = document.querySelector(

this.getAttribute("href")

);

if (target) {

target.scrollIntoView({

behavior: "smooth"

});

}

});

});

/*==================================================
Parallax Hero Effect
==================================================*/

const hero = document.querySelector("header");

window.addEventListener("scroll", () => {

const y = window.pageYOffset;

hero.style.backgroundPositionY = `${y * 0.4}px`;

});

/*==================================================
Profile Image Hover Glow
==================================================*/

const profile = document.querySelector(".profile-card");

if(profile){

profile.addEventListener("mousemove", () => {

profile.style.boxShadow =

"0 20px 60px rgba(96,165,250,.45)";

});

profile.addEventListener("mouseleave", () => {

profile.style.boxShadow =

"0 20px 40px rgba(0,0,0,.3)";

});

}

/*==================================================
Dark / Light Theme
==================================================*/

const themeButton = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

document.body.classList.add("light");

themeButton.innerHTML='<i class="fas fa-sun"></i>';

}

themeButton.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

localStorage.setItem("theme","light");

themeButton.innerHTML='<i class="fas fa-sun"></i>';

}else{

localStorage.setItem("theme","dark");

themeButton.innerHTML='<i class="fas fa-moon"></i>';

}

});

/*==================================================
Mobile Menu
==================================================*/

const hamburger=document.getElementById("hamburger");

const navMenu=document.getElementById("nav-links");

hamburger.addEventListener("click",()=>{

navMenu.classList.toggle("active");

hamburger.classList.toggle("open");

});

document.querySelectorAll("#nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

hamburger.classList.remove("open");

});

});

/*==================================================
Animated Background Particles
==================================================*/

const particleContainer=document.getElementById("particles");

if(particleContainer){

for(let i=0;i<45;i++){

const particle=document.createElement("span");

particle.classList.add("particle");

particle.style.left=Math.random()*100+"%";

particle.style.top=Math.random()*100+"%";

particle.style.animationDuration=

(6+Math.random()*10)+"s";

particle.style.animationDelay=

(Math.random()*6)+"s";

particle.style.opacity=

0.15+Math.random()*0.4;

particle.style.transform=

`scale(${0.5+Math.random()*1.5})`;

particleContainer.appendChild(particle);

}

}

/*==================================================
Gallery Image Zoom
==================================================*/

document.querySelectorAll(".gallery-grid img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.className="image-overlay";

overlay.innerHTML=`

<div class="image-box">

<img src="${img.src}">

</div>

`;

document.body.appendChild(overlay);

overlay.addEventListener("click",()=>{

overlay.remove();

});

});

});

/*==================================================
Navbar Active Background
==================================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>120){

navbar.style.background="rgba(7,19,33,.92)";

}else{

navbar.style.background="rgba(7,19,33,.75)";

}

});

/*==================================================
Current Year Footer
==================================================*/

const year=document.querySelector(".copyright");

if(year){

year.innerHTML=

`© ${new Date().getFullYear()} Gourab Bhanja • IIT Gandhinagar`;

}

/*==================================================
Console Greeting
==================================================*/

console.log(
"%cWelcome to Gourab Bhanja's Academic Website",
"color:#60A5FA;font-size:18px;font-weight:bold;"
);

console.log(
"%cDeveloped using HTML • CSS • JavaScript",
"color:#94A3B8;font-size:14px;"
);

/*==================================================
Finished
==================================================*/

var bodyElement = document.body;
var logoImg = document.getElementById("logo");
const mainText = document.getElementById("mText");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");
const p6 = document.getElementById("p6");
const p7 = document.getElementById("p7");
const p8 = document.getElementById("p8");

console.log("In this project, I was motivated to unbrand a famous whiskey brand Jack Daniel's where if you hover over the logo, the background changes to promote water. I thought this would be an interesting way to juxtapose the similarity between how one can promote an unhealthy versus healthy drink.");

function mOver(){
    console.log("Unbranding");
    bodyElement.style.backgroundImage = "url(assets/img/water.jpg)";
    logoImg.src = "assets/img/waterLogo.png";
    logoImg.style.width = "40px";
    mainText.innerText = "Refreshing Water";
    p1.innerText = "Classic Tap";
    p2.innerText = "Water & Lemon";
    p3.innerText = "Bottled Water";
    p4.innerText = "Sparkling";
    p5.innerText = "Distilled";
    p6.innerText = "Alaskan Glacier";
    p7.innerText = "Spring Water";
    p8.innerText = "Well Water";
    this.style = "cursor: pointer";
}

function mOut(){
    console.log("Back To Original");
    document.body.style.backgroundImage = "url(assets/img/jackDan.jpg)";
    logoImg.src = "assets/img/navLogo.webp";
    logoImg.style.height = "36px";
    logoImg.style.width = "93px";
    mainText.innerText = "Make it Count";
    p1.innerText = "Old No. 7";
    p2.innerText = "Jack & Coke";
    p3.innerText = "Single Barrel";
    p4.innerText = "Gentleman Jack";
    p5.innerText = "Bonded";
    p6.innerText = "Tennessee Honey";
    p7.innerText = "Tennessee Fire";
    p8.innerText = "Tennessee Apple";
    this.style = "cursor: default";
}

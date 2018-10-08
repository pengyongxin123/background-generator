var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// set variables

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	h3.textContent = body.style.background;
}
// set gradient and h3 function after click

body.style.background = "linear-gradient(to right, rgb(255, 0, 0) , rgb(255, 255, 0))";

h3.textContent = body.style.background;
// set initial background color h3 

var btn = document.createElement("button");
btn.appendChild(document.createTextNode("Random Gradient Background"));
document.body.appendChild(btn);
// set random color button

function generatecolor (){
	var letter = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++){
		color = color + letter[Math.floor(Math.random()*15)];
	}
	return color;
}
// generate random color

function randomcolor(){
	var hue1 = generatecolor();

	var hue2 = generatecolor();

	body.style.background = 
	"linear-gradient(to right, " 
	+ hue1 
	+ ", " 
	+ hue2 
	+ ")";

	h3.textContent = body.style.background;

	color1.value = hue1;
	color2.value = hue2;
}
// pick random color function after click


btn.addEventListener("click", randomcolor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");
var css = document.createElement("h3");
document.body.appendChild(css);
// var text = document.createTextNode(body.style.background + ";")
// css.appendChild(text);
function gradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}
color1.addEventListener("input",gradient);
color2.addEventListener("input",gradient);

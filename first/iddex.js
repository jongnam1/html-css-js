// 문자열 글자 '' "" ``
const mySting = "jong nam";

const body = document.querySelector("body");
const p = document.createElement("p");

p.innerText = mySting;

p.style.color = "blue";
p.className = "header";

body.append(p);

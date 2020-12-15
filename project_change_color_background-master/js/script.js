// Implement the JavaScript code such that every time the button is clicked, the background changes color.

const button = document.querySelector(".btn");
const background = document.querySelector("body");

const colors = ["red", "green", "blue", "orange", "grey", "purple"];

button.addEventListener("click", function () {
  const random = Math.floor(Math.random() * colors.length);
  background.style.backgroundColor = colors[random];
});

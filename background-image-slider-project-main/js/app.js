//A default image should be displayed when you load the page.
//When you click the “left” button, one of five images should display, all the way until each of the five numbers display in sequence.
//Repeat step 2 for the “right” button.

const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");
const imgContainer = document.querySelector(".img-container");

let counter = 0;

btnRight.addEventListener("click", function () {
  if (counter !== 4) {
    counter++;
    imgContainer.style.backgroundImage = `url('img/contBcg-${counter}.jpeg')`;
  }
});

btnLeft.addEventListener("click", function () {
  if (counter !== 0) {
    counter--;
    imgContainer.style.backgroundImage = `url('img/contBcg-${counter}.jpeg')`;
  }
});

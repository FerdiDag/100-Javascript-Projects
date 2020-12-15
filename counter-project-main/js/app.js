// The default counter begins at the number 0.
//When you click “Lower Count”, the counter should decrement by 1.  If the count goes below 0, the number should change to the color red.
//When you click “Add Count”, the counter should increment by 1. If the count goes above 0, the number should change to the color green.

const next = document.querySelector(".nextBtn");
const prev = document.querySelector(".prevBtn");
let counter = document.getElementById("counter");
let counterNum = 0;

function checkCounter() {
  if (counterNum > 0) {
    counter.style.color = "green";
  } else if (counterNum < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
}

next.addEventListener("click", function () {
  counterNum++;
  checkCounter();
  counter.textContent = counterNum;
});

prev.addEventListener("click", function () {
  counterNum--;
  checkCounter();
  counter.textContent = counterNum;
});

// start header
let bar = document.querySelector(".show-list");
let barDiv = document.querySelectorAll(".show-list div");
let meun = document.querySelector("ul");
bar.onclick = function () {
  meun.classList.toggle("hidde");
  barDiv.forEach((el) => el.classList.toggle("close"));
};

// end header

let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
var btnopen = document.querySelector(".cart");
var modal = document.querySelector(".modal");
var btnclose = document.querySelector(".xmark");

// function toggleModal() {
//   modal.classList.add(".hide");
// }
// btnopen.addEventListener("click".toggleModal);

function openModal() {
  modal.classList.add("open-modal");
}
function closemodal() {
  modal.classList.remove("open-modal");
}
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 60) {
    document.querySelector("#scroll-top").classList.add("active");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
  }
};
// loader
// function loader() {
//   document.querySelector(".loader-container").classList.add("fade-out");
// }
// function fadeout() {
//   setInterval(loader);
// }
// window.onload = fadeout();
let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let num = document.querySelectorAll(".num");

for (let i = 0; i < plus.length; i++) {
  var amount = 1;
  plus[i].addEventListener("click", () => {
    amount++;
    if (amount < 10) {
      amount = "0" + amount;
    }

    num[i].innerText = amount;
  });
}
for (let i = 0; i < minus.length; i++) {
  var amount = 1;
  minus[i].addEventListener("click", () => {
    console.log(minus);
    if (amount > 1) {
      amount--;
      amount = "0" + amount;
    }
    if (amount >= 10);
    {
      amount = +amount;
    }
    if (amount < 10) {
      amount = "0" + amount;
    }
    num[i].innerText = amount;
  });
}
// ------- MODAL----------

// ฟังก์ชันเลื่อนไปทางซ้ายหรือขวา
function slide(direction) {
  const slider = document.querySelector(".product-slider");
  const scrollAmount = 300; // ระยะการเลื่อนต่อการกด 1 ครั้ง

  if (direction === "left") {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}

window.onload = function () {
  const btt = document.getElementById("backToTop");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      btt.style.display = "block";
    } else {
      btt.style.display = "none";
    }
  };
  btt.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
};

// const profileBtn = document.getElementById("profileBtn");
// const dropdownMenu = document.getElementById("dropdownMenu");

const profileBtn = document.getElementById("profileBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
profileBtn.addEventListener("click", function (event) {
  dropdownMenu.classList.toggle("show");
  profileBtn.classList.toggle("active");

  event.stopPropagation();
});

const swichlanguage = document.getElementById("swichlanguage");
const lgMenu = document.getElementById("lgMenu");
swichlanguage.addEventListener("click", function (event) {
  lgMenu.classList.toggle("show");
  swichlanguage.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  if (!swichlanguage.contains(event.target) && !lgMenu.contains(event.target)) {
    lgMenu.classList.remove("show");
    swichlanguage.classList.remove("active");
  }
  if (
    !profileBtn.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.remove("show");
    profileBtn.classList.remove("active");
  }
});

function onClickContact() {
  window.location.href = "../Contact/Contact.html";
}
function onClickAbout() {
  window.location.href = "../About/About.html";
}
function onClickSignUp() {
  window.location.href = "../Sign-Up/Sign-Up.html";
}
function onClickWishlist() {
  window.location.href = "../E_Commerce_Page/WishlistPage.html";
}
function onClickAccount() {
  window.location.href = "../Account/Account.html";
}
// function onClickAccount() {
//     window.location.href = "../Account/Account.html";
// }

function onClickCart() {
  window.location.href = "../Cart/Cart.html";
}

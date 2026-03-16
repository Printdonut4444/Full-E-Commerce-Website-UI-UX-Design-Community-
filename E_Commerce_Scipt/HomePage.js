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
  const buutonCarousel = document.getElementById("button-carousel");
  for (let i = 0; i < 5; i++) {
    const buttonList = document.createElement('div');
    buttonList.style.width = "10px";
    buttonList.style.height = "10px";
    buttonList.style.backgroundColor = "#7D8184";
    buttonList.style.borderRadius = "50%";
    buttonList.style.cursor = "pointer";

    buttonList.addEventListener("mouseover", () => {
      buttonList.style.backgroundColor = "red";
      buttonList.style.border = "2px solid white";
      buttonList.style.boxSizing = "border-box";
    });

    buttonList.addEventListener("mouseleave", () => {
      buttonList.style.backgroundColor = "#7D8184";
      buttonList.style.borderWidth = "0px";
    })

    buutonCarousel.appendChild(buttonList);
  }
};

const profileBtn = document.getElementById("profileBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
profileBtn.addEventListener("click", function (event) {
  dropdownMenu.classList.toggle("show");
  profileBtn.classList.toggle("active");

  // event.stopPropagation();
});

const swichlanguage = document.getElementById("swichlanguage");
const lgMenu = document.getElementById("lgMenu");
swichlanguage.addEventListener("click", function (event) {
  lgMenu.classList.toggle("show");
  swichlanguage.classList.toggle("active");

  // event.stopPropagation();
});
const lgThai = document.getElementById("lgThai");
lgThai.addEventListener("click",function(){
  swichlanguage.innerHTML = lgThai.innerHTML + ' &#9662';
  // console.log(swichlanguage.innerText);
})
const lgEng = document.getElementById("lgEng");
lgEng.addEventListener('click',function(){
  swichlanguage.innerHTML = lgEng.innerHTML + ' &#9662';
})

document.addEventListener("click", function (event) {
  if (!swichlanguage.contains(event.target) && !lgMenu.contains(event.target)) {
    lgMenu.classList.remove("show");
    swichlanguage.classList.remove("active");
  }
  if (
    !profileBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
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
function onClickCart() {
  window.location.href = "../Cart/Cart.html";
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


function link(link) {
  switch (link) {
    case "Home":
      window.location.href = "../E_Commerce_Page/HomePage.html";
      break;
    case "SignUp":
      window.location.href = "../Sign-Up/Sign-Up.html";
      break;
    case "About":
      window.location.href = "../About/About.html";
      break;
    case "Contact":
      window.location.href = "../Contact/Contact.html";
      break;

  }
}
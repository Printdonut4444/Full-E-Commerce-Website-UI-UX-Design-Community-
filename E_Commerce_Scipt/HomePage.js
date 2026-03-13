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

const profileBtn = document.getElementById("profileBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

profileBtn.addEventListener("click", function (event) {
  // สลับการเปิด/ปิดเมนู
  dropdownMenu.classList.toggle("show");

  // สลับการค้างสีแดงที่ปุ่ม (Toggle คลาส active)
  profileBtn.classList.toggle("active");

  event.stopPropagation();
});

// เมื่อคลิกที่อื่นนอกจากเมนู ให้ปิดเมนูและเอาสีแดงออก
document.addEventListener("click", function (event) {
  if (
    !profileBtn.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.remove("show");
    profileBtn.classList.remove("active"); // เอาสีแดงออกเมื่อเมนูปิด
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
function onClickAccount() {
  window.location.href = "../Account/Account.html";
}
// function onClickAccount() {
//     window.location.href = "../Account/Account.html";
// }

function onClickCart() {
  window.location.href = "../Cart/Cart.html";
}

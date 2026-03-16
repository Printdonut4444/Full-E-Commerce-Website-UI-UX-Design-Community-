const profileBtn = document.getElementById("profileBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
profileBtn.addEventListener("click", function (event) {
  dropdownMenu.classList.toggle("show");
  profileBtn.classList.toggle("active");

  // event.stopPropagation();
});

document.addEventListener("click", function (event) {
  // if (!swichlanguage.contains(event.target) && !lgMenu.contains(event.target)) {
  //   lgMenu.classList.remove("show");
  //   swichlanguage.classList.remove("active");
  // }
  if (
    !profileBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove("show");
    profileBtn.classList.remove("active");
  }
});


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

function onClickWishlist() {
  window.location.href = "../E_Commerce_Page/WishlistPage.html";
}
function onClickCart() {
  window.location.href = "../Cart/Cart.html";
}
function onClickAccount() {
  window.location.href = "../Account/Account.html";
}
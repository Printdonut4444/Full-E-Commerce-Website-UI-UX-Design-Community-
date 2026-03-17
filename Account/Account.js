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
    case "Wishlist":
      window.location.href = "../E_Commerce_Page/WishlistPage.html";
      break;
    case "Account":
      window.location.href = "../Account/Account.html";
      break;
  }
}

function ChangePass() {
  const firstname = document.getElementById("FirstName").value;
  const lastname = document.getElementById("LastName").value;
  const email = document.getElementById("Email").value;
  const address = document.getElementById("Address").value;
  const currpass = document.getElementById("CurrPass").value;
  const newpass = document.getElementById("NewPass").value;
  const confirmnpass = document.getElementById("ConfirmNPass").value;

  const userData = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    address: address,
    currpass: currpass,
    newpass: newpass,
    confirmnpass: confirmnpass,
  };

  console.log(userData);
}

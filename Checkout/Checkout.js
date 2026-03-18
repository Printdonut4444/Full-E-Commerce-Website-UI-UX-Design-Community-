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
    case "Cart":
      window.location.href = "../Cart/Cart.html";
      break;
    case "Account":
      window.location.href = "../Account/Account.html";
      break;
    case "CheckOut":
      location.reload();
      break;
  }
}

function BillDetail() {
  const name = document.getElementById("firstName").value;
  const company = document.getElementById("companyName").value;
  const address = document.getElementById("address").value;
  const detailAddress = document.getElementById("detailAddress").value;
  const city = document.getElementById("city").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  const billData = {
    name: name,
    company: company,
    address: address,
    detailAddress: detailAddress,
    city: city,
    phone: phone,
    email: email,
  };

  console.log(billData);
}

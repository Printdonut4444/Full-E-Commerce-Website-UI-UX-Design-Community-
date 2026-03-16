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

function Contact() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const contact = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };

  console.log(contact);
}

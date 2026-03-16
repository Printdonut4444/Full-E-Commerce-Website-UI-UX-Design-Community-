fetch("http://172.20.10.9:5433", {
  method: "Get",
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
    case "LogIn":
      window.location.href = "../E_Commerce_Page/LoginPage.html";
      break;
  }
}

function signUp() {
  const name = document.getElementById("userName").value;
  const email = document.getElementById("userEmail").value;
  const password = document.getElementById("userPassword").value;

  const userData = {
    name: name,
    email: email,
    password: password,
  };

  console.log(userData);
}

function togglePass() {
  const passwordInput = document.getElementById("userPassword");
  const toggleIcon = document.getElementById("togglePassword");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.replace("fa-eye-slash", "fa-eye");
  }
}

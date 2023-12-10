const toggleBtn = document.querySelector(".btn-toggle");
const menuList = document.querySelectorAll(".main-navbar ul");
const navbar = document.querySelector(".main-navbar");

toggleBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuList[0].classList.toggle("visible");
  navbar.classList.toggle("background");
  toggleBtn.classList.toggle("bi-list");
  toggleBtn.classList.toggle("bi-x-lg");
}

function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let body = "Name: " + name + 
  " <br /> From: " + email + 
  " <br />Message: " + message ;

  Email.send({
    SecureToken: "0f4bb1f6-1fb6-4c30-9912-d77ef4d3f7bf",
    To: "hamratsiysofia@gmail.com",
    From: "hamratsiysofia@gmail.com",
    Subject: "msg from Contact Form (portfolio)",
    Body: body,
  }).then((message) => alert(message));
}

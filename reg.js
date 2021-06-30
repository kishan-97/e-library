var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");

var submit = document.getElementById("button");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  var pass = 0;
  if (username.length <= 0) {
    window.alert("Please Enter Username");
    pass = 1;
  }
  if (password.value.length < 8) {
    window.alert("Weak Password, Password should be of at least 8 letters");
    pass = 1;
  }
  if (password.value !== cpassword.value) {
    pass = 1;
    window.alert("Please Enter same password in both fields");
  }
  if (pass === 0) window.location.href = "main.html";
});

const form = document.getElementById("formID");
var username = document.getElementById("usernameID");
var email = document.getElementById("emailID");
var password = document.getElementById("passwordID");
var confirmPassword = document.getElementById("confirm_passwordID");

form.addEventListener("submit", (e) => checkValue(e));

function checkValue(e) {
  var usernameVal = username.value;
  var emailVal = email.value;
  var passwordVal = password.value;
  var confirmPasswordVal = confirmPassword.value;
  var emailMatch =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var usernameError = document.getElementById("username_error");
  var emailError = document.getElementById("email_error");
  var passwordError = document.getElementById("password_error");
  var confirmPasswordError = document.getElementById("confirm_password_error");
  var userTrue = false;
  var emailTrue = false;
  var passTrue = false;
  var confTrue = false;
  usernameCheck(usernameVal);
  emailCheck(emailVal, emailMatch);
  passwordCheck(passwordVal);
  confirmCheck(passwordVal, confirmPasswordVal);
  addFunc(userTrue, emailTrue, passTrue, confTrue);
  function usernameCheck(x) {
    if (x.length > 2 && x.length < 16) {
      usernameError.innerHTML = "";
      document.getElementById("usernameID").classList.remove("errorBorder");
      userTrue = true;
    } else {
      usernameError.innerHTML =
        "Username must be at least 3 characters and max 15";
      document.getElementById("usernameID").classList.add("errorBorder");
    }
  }
  function emailCheck(f, k) {
    if (f.match(k)) {
      emailError.innerHTML = "";
      document.getElementById("emailID").classList.remove("errorBorder");
      emailTrue = true;
    } else {
      emailError.innerHTML = "Email is wrong";
      document.getElementById("emailID").classList.add("errorBorder");
    }
  }
  function passwordCheck(y) {
    if (y.length > 5) {
      passwordError.innerHTML = "";
      document.getElementById("passwordID").classList.remove("errorBorder");
      passTrue = true;
    } else {
      passwordError.innerHTML = "Password must be at least 6 characters";
      document.getElementById("passwordID").classList.add("errorBorder");
    }
  }
  function confirmCheck(m, n) {
    if (m == n) {
      confirmPasswordError.innerHTML = "";
      document
        .getElementById("confirm_passwordID")
        .classList.remove("errorBorder");
      confTrue = true;
    } else {
      confirmPasswordError.innerHTML = "Please confirm right password";
      document
        .getElementById("confirm_passwordID")
        .classList.add("errorBorder");
    }
  }
  function addFunc(userTrue, emailTrue, passTrue, confTrue) {
    if (userTrue && emailTrue && passTrue && confTrue) {
      var usersList = document.getElementById("usersList");
      var usersProfiles = document.createElement("li");
      usersProfiles.setAttribute("class", "profile_style");
      var newUser = `
              <h5 class="username">Username: ${usernameVal}</h5>
              <p class="email">Email: ${emailVal}</p>
              `;
      usersProfiles.innerHTML = newUser;
      usersList.appendChild(usersProfiles);
      form.reset();
    }
  }
  e.preventDefault();
}

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const passwordError = document.getElementById("passwordError");

const passwordMatch = () => {
  if (password.value === confirmPassword.value) {
    passwordError.innerText = "";
  } else if (password.value !== confirmPassword.value) {
    passwordError.innerText = "*Password do not match";
  }
};

password.addEventListener("keyup", passwordMatch);
confirmPassword.addEventListener("keyup", passwordMatch);

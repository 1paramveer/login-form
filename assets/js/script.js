const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const passwordError = document.getElementById("passwordError");

const passwordMatch = () => {
  if (password.value === confirmPassword.value) {
    passwordError.style.color = "white";
  } else if (password.value !== confirmPassword.value) {
    passwordError.style.color = "red";
  }
};

password.addEventListener("keyup", passwordMatch);
confirmPassword.addEventListener("keyup", passwordMatch);

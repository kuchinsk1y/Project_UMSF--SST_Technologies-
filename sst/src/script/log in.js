const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// ======= Validation =========
document.querySelector("[name=email]").addEventListener("input", function () {
  const capitalLetter =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  highlightValidationHint(
    document.getElementById("emailFormat"),
    capitalLetter.test(this.value)
  );
});

const form = document.forms["formUserData"];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    document.getElementById("emailFormat") /* .classList.contains("success") */
  ) {
    return alert("Form submitted successfully");
  }
  /* return alert("Enter Data!"); */
});

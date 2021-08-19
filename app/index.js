const mailField = document.querySelector(".emailfield");
const passwordField = document.querySelector(".passwordfield");
const loginForm = document.querySelector(".loginform");
console.log(loginForm);

loginForm.addEventListener("click", (e) => {
  e.preventDefault();
  const email = mailField.value;
  const password = passwordField.value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log("successfully signed up");
    })
    .catch((err) => {
      console.log(err);
    });
});

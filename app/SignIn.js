const mailField = document.querySelector(".emailfield");
const passwordField = document.querySelector(".passwordfield");
const loginForm = document.querySelector(".loginform");
const loadingAnime = document.getElementById("loadingAnimation");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = mailField.value;
  const password = passwordField.value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      auth.onAuthStateChanged(function (currentUser) {
        if (currentUser) {
          //store email in localstorage
          localStorage.setItem("email", email);
          //redirect to dashboard page
          location.href = "/src/dashboard.html";
        }
        loginForm.reset();
      });
    })
    .catch((err) => console.log(err));
});

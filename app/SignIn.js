const mailField = document.querySelector(".emailfield");
const passwordField = document.querySelector(".passwordfield");
const loginForm = document.querySelector(".loginform");

loginForm.addEventListener("click", (e) => {
  e.preventDefault()
  const email = mailField.value;
  const password = passwordField.value;

  if (e.target.classList.contains('submit')) {
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        auth.onAuthStateChanged(function (currentUser) {
          if (currentUser) {
            //store email in localstorage
            localStorage.setItem("email", email)
            //redirect to dashboard page
            location.href = '/src/dashboard.html'
          }
          loginForm.reset()
        });
      })
      .catch(err => console.log(err));
  }
});

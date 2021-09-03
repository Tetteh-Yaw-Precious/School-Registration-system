const dropdownicon = document.getElementById("dropdownarrow");
const signout = document.querySelector(".signout");
const navopen = document.getElementById("navopen");
const navclose = document.getElementById("navclose");
const sidenav = document.getElementById("navbar");

dropdownicon.addEventListener("click", (e) => {
  e.preventDefault;
  signout.classList.toggle("display-active");
});
//toggling dropdown



/**opening sidenav on click */
navopen.addEventListener("click", () => {
  sidenav.style.animation = " slidein  0.5s  forwards";
});

/**closing sidenav on click */
navclose.addEventListener("click", () => {
  sidenav.style.animation = " slideout  0.5s forwards";
});

/**removing sidenav on payment popup */
sidenav.addEventListener("click", (e) => {
  if (e.target.classList.contains("payfees")) {
    sidenav.style.animation = " slideout  0.5s forwards";
  }
});

const registerBtn = document.getElementById("registerCourses");
registerPopup = document.getElementById("regPopup");


//closing register popup when close icon is click
const closeicon = document.getElementById("close");
closeicon.addEventListener("click", () => {
  registerPopup.classList.add("display-active");
});

//checking for submit event on courses checked
const coursesForm = document.getElementById("popup-body-courses");
coursesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  registerPopup.classList.add("display-active");
});

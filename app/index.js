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

//building doughnut
let moneyGraph = document.getElementById("moneyGraph").getContext("2d");
Chart.defaults.font.size = 12;
Chart.defaults.font.family = "Raleway,sans-serif";
Chart.defaults.cutOut = 49;
let massPopChart = new Chart(moneyGraph, {
  type: "doughnut",
  data: {
    labels: ["remaining balance", "paid"],
    datasets: [
      {
        label: "Population",
        data: [40, 60],
        backgroundColor: ["#13266a", "#0fb60c"],
        fontFamily: "Raleway",
      },
    ],
  },
  options: [],
});

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

//registering courses popup
const registerBtn = document.getElementById("registerCourses");
registerPopup = document.getElementById("regPopup");
registerBtn.addEventListener("click", (e) => {
  registerPopup.classList.remove("display-active");
});

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

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

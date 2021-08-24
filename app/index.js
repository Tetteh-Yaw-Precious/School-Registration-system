const dropdownicon = document.getElementById("dropdownarrow");
const signout = document.querySelector(".signout");
dropdownicon.addEventListener("click", e=>{
    e.preventDefault;
    signout.classList.toggle("display-active")
})
//toggling dropdown

//building doughnut
let moneyGraph = document.getElementById('moneyGraph').getContext('2d')
let massPopChart = new Chart(moneyGraph, {
    type: 'doughnut',
    data:{
        labels:['remaining balance', 'paid',],
        datasets:[{
            label: "Population",
            data:[
                40,
                60,
            ],
            backgroundColor:['#13266a','#0fb60c']
        }]
    },
    options: []
})
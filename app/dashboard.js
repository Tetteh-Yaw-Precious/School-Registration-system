//retrieve the email stored in localstorage
const email = localStorage.getItem("email");
const loadingAnime = document.getElementById("loadingAnimation");
const payFeesBtn = document.getElementById("payfees");
const proceedToPayment = document.getElementById("proceed");
let data;
let Totalfees;

//loading animation
const loadingcircle = () => {
  setTimeout(() => {
    document.getElementById("loading").style.borderRight = "5px solid #f45110";
  }, 100);
  setTimeout(() => {
    document.getElementById("loading").style.borderBottom = "5px solid #f45110";
  }, 200);
};

auth.onAuthStateChanged((user) => {
  //if the user has signed in, go ahead and get the user data from the database
  if (user) {
    /**go to the User_Data collection where email is equal
     * to the email retrieved from localstorage*/
    db.collection("User_Data").where("email", "==", email)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data = doc.data();
          //setting localStorage data
          //get their ids and insert the data into them
          document.getElementById("dob").innerHTML = data.dob;
          document.getElementById("firstName1").innerHTML = data.firstname;
          document.getElementById("firstName2").innerHTML = data.firstname;
          document.getElementById("lastName2").innerHTML = data.lastname;
          document.getElementById("otherName").innerHTML = data.othername;
          document.getElementById("sex").innerHTML = data.sex;
          document.getElementById("pob").innerHTML = data.pob;
          document.getElementById("nationality").innerHTML = data.nationality;
          document.getElementById("programSession").innerHTML = data.programsession;
          document.getElementById("tel").innerHTML = data.Tel;
          document.getElementById("eduBackground").innerHTML = data.edubackground;
          document.getElementById("tel").innerHTML = data.Tel;
          document.getElementById("resultSlip").innerHTML = data.resultslip;
          document.getElementById("residencialAddress").innerHTML = data.residencialaddress;
          document.getElementById("fatherName").innerHTML = data.fathername;
          document.getElementById("fatherOcc").innerHTML = data.fatherocc;
          document.getElementById("motherName").innerHTML = data.mothername;
          document.getElementById("motherOcc").innerHTML = data.motherocc;
          document.getElementById("admissionYear").innerHTML = data.admissionyear;
          document.getElementById("completionYear").innerHTML = data.completionyear;
          document.getElementById("department").innerHTML = data.department;
          document.getElementById("programme").innerHTML = data.programme;
          document.getElementById("resultSlip").innerHTML = data.resultslip;
          document.getElementById("resultSlip").innerHTML = data.resultslip;
          document.getElementById("totalfees").innerHTML = data.totalfees;
          document.getElementById("paidfees").innerHTML = data.paidfees;
          localStorage.setItem("Tel", data.Tel);
          localStorage.setItem("name", `${data.firstname} ${data.lastname}`);
          localStorage.setItem("Totalfees", data.totalfees);
          Totalfees = data.totalfees;
          console.log(Totalfees);
          //we are checking to see what 60% of the overrall fees is
          calculatingfeespercentage = () => {
            let requiredpercentage = (60 / 100) * Totalfees;
            console.log(requiredpercentage);

            /**after checking to find out the what 60% is now we are we going to
             * see if the paid fees is >= to 60% of the total fees*/
            if (data.paidfees >= requiredpercentage) {
              document.getElementById("pfeesh6").style.color = "#0fb60c";
              document.getElementById("paidfees").style.color = "#0fb60c";
              document.getElementById("paid").style.color = "#0fb60c";
              console.log(true);
            } else {
              console.log(false);
              const eleligiblefeesCt = document.querySelector(".eligiblefees-ct");
              document.getElementById("pfeesh6").style.color = "#f45110";
              document.getElementById("paidfees").style.color = "#f45110";
              document.getElementById("paid").style.color = "#f45110";

            }
          };
          calculatingfeespercentage();
          if (data !== null) {
            loadingcircle();
          }
          setTimeout(() => {
            loadingAnime.classList.add("display-active");
          }, 300);
        });
      });
  }
});

/**signing users out of the dashboard, clearing
 * localStorage and redirecting the user back to the homepage
 */
signout.addEventListener("click", (e) => {
  e.preventDefault();
  auth
    .signOut()
    .then((user) => {
      if (user == null) {
        localStorage.clear();
        location.href = "/index.html";
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

const payfeepopup = document.getElementById("paymentPopup");
const amountForm = document.getElementById("amountform");

//integrating flutterwave payment methods
payFeesBtn.addEventListener("click", () => {
  if (payfeepopup.classList.contains("display-active")) {
    payfeepopup.classList.remove("display-active");
  }
});
const mediaQuery = window.matchMedia("(min-width: 600px)");
// Check if the media query is true

amountForm.addEventListener("click", (e) => {
  e.preventDefault;
  if (e.target.classList.contains("close")) {
    //removing popup window
    payfeepopup.classList.add("display-active");
    if (window.innerWidth > 600) {
      sidenav.style.animation = " slidein  0.2s forwards";
    }
  }
});
//checking for 60%  of total fees

// console.log(requiredpercentage);
//comparing paid fees to total fees

const makePayments = (e) => {
  e.preventDefault();

  FlutterwaveCheckout({
    public_key: pkey,
    tx_ref: `COMPSCI ${Math.random() * 100000000000} + 1`,
    amount: document.getElementById("inputamount").value,
    currency: "GHS",
    country: "GH",
    payment_options: "card,mobile_money_ghana",
    customer: {
      email: `${localStorage.getItem("email")}`,
      phone_number: `${localStorage.getItem("Tel")}`,
      name: `${localStorage.getItem("name")}`,
    },
    callback: function () {
      console.log("success");
    },
    onclose: function () {
      payfeepopup.classList.add("display-active");
    },
    customizations: {
      title: "School fees",
      description: "Payment of school fees",
      logo: "../assets/ktulogonew.svg",
    },
  });
};

const pkey = "FLWPUBK_TEST-bb162b39298e644e1f022c070ca2ad05-X";
amountForm.addEventListener("submit", makePayments);
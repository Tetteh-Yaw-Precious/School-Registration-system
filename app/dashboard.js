//retrieve the email stored in localstorage
const email = localStorage.getItem("email");
const loadingAnime = document.getElementById("loadingAnimation");
const payFeesBtn = document.getElementById("payfees");
const proceedToPayment = document.getElementById("proceed");
let data;
auth.onAuthStateChanged((user) => {
  //if the user has signed in, go ahead and get the user data from the database
  if (user) {
    /**go to the User_Data collection where email is equal
     * to the email retrieved from localstorage*/
    db.collection("User_Data")
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data = doc.data();

          //get their ids and insert the data into them
          document.getElementById("dob").innerHTML = data.dob;
          document.getElementById("firstName1").innerHTML = data.firstname;
          document.getElementById("lastName1").innerHTML = data.lastname;
          document.getElementById("firstName2").innerHTML = data.firstname;
          document.getElementById("lastName2").innerHTML = data.lastname;
          document.getElementById("otherName").innerHTML = data.othername;
          document.getElementById("sex").innerHTML = data.sex;
          document.getElementById("pob").innerHTML = data.pob;
          document.getElementById("nationality").innerHTML = data.nationality;
          document.getElementById("programSession").innerHTML =
            data.programsession;
          document.getElementById("tel").innerHTML = data.Tel;
          document.getElementById("eduBackground").innerHTML =
            data.edubackground;
          document.getElementById("tel").innerHTML = data.Tel;
          document.getElementById("resultSlip").innerHTML = data.resultslip;
          document.getElementById("residencialAddress").innerHTML =
            data.residencialaddress;
          document.getElementById("fatherName").innerHTML = data.fathername;
          document.getElementById("fatherOcc").innerHTML = data.fatherocc;
          document.getElementById("motherName").innerHTML = data.mothername;
          document.getElementById("motherOcc").innerHTML = data.motherocc;
          document.getElementById("admissionYear").innerHTML =
            data.admissionyear;
          document.getElementById("completionYear").innerHTML =
            data.completionyear;
          document.getElementById("department").innerHTML = data.department;
          document.getElementById("programme").innerHTML = data.programme;
          document.getElementById("resultSlip").innerHTML = data.resultslip;
          document.getElementById("resultSlip").innerHTML = data.resultslip;
          document.getElementById("totalfees").innerHTML = data.totalfees;
          localStorage.setItem("Tel", data.Tel);
          localStorage.setItem("name", `${data.firstname} ${data.lastname}`);
          /*making perfect circle for animation and 
          removing animation from the page */
          if (data !== null) {
            setTimeout(() => {
              document.getElementById("loading").style.borderRight =
                "5px solid #f45110";
            }, 100);
            setTimeout(() => {
              document.getElementById("loading").style.borderBottom =
                "5px solid #f45110";
            }, 200);
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

console.log(payFeesBtn);
const payfeepopup = document.getElementById("paymentPopup");
const enterAmount = document.getElementById("enteramount");
//integrating flutterwave payment methods
payFeesBtn.addEventListener("click", () => {
  if (payfeepopup.classList.contains("display-active")) {
    payfeepopup.classList.remove("display-active");
  }
});

enterAmount.addEventListener("click", (e) => {
  e.preventDefault;
  console.log(e.target);
  if (e.target.classList.contains("close")) {
    payfeepopup.classList.add("display-active");
  }
});

const pkey = "FLWPUBK_TEST-bb162b39298e644e1f022c070ca2ad05-X";
proceedToPayment.addEventListener("click", () => {
  FlutterwaveCheckout({
    public_key: pkey,
    tx_ref: `COMPSCI ${Math.random() * 100000000000} + 1`,
    amount: 10,
    currency: "GHS",
    country: "GH",
    payment_options: "card,mobile_money_ghana",
    customer: {
      email: `${localStorage.getItem("email")}`,
      phone_number: `${localStorage.getItem("Tel")}`,
      name: `${localStorage.getItem("name")}`,
    },
    callback: function (data) {
      console.log(data);
    },
    onclose: function () {
      // close modal
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "https://assets.piedpiper.com/logo.png",
    },
  });
});

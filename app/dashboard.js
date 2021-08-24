//retrieve the email stored in localstorage
const email = localStorage.getItem("email");
const loadingAnime = document.getElementById("loadingAnimation");
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
          console.log(data);

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

          /*making perfect circle for animation and 
          removing animation from the page */

          if (data !== null) {
            setTimeout(() => {
              document.getElementById("loading").style.borderRight =
                "5px solid white";
            }, 100);
            setTimeout(() => {
              document.getElementById("loading").style.borderBottom =
                "5px solid white";
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
 * localStorage and redirecting the back to the homepage
 */
signout.addEventListener("click", (e) => {
  e.preventDefault();
  auth
    .signOut()
    .then((user) => {
      if (user == null) {
        localStorage.clear();
        location.href = "/src/index.html";
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

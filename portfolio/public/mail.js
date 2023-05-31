const firebaseConfig = {
    apiKey: "AIzaSyBnqRvGtiPfZHPFnMJ40tWr5Gt6-AXgN2o",
    authDomain: "portfolio-92c5a.firebaseapp.com",
    databaseURL: "https://portfolio-92c5a-default-rtdb.firebaseio.com",
    projectId: "portfolio-92c5a",
    storageBucket: "portfolio-92c5a.appspot.com",
    messagingSenderId: "772293064115",
    appId: "1:772293064115:web:ed1d545ee88eb20f1907c6",
    measurementId: "G-JXMHFX63W7"
  };

firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  console.log(name);

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};


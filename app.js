// Global variables
const name = document.getElementById("formGroupExampleInput");
const number = document.getElementById("formGroupExampleInput2");
const date = document.getElementById("formGroupExampleInput3");
const select = document.getElementById("select");
const selecttwo = document.getElementById("select2");
const button = document.querySelector(".table-button");

// EVENT Listener for the button
document.querySelector(".table-button").addEventListener("click", function(e) {
  e.preventDefault();

  // if invalid
  if (
    name.className === "is-invalid" ||
    name.value === "" ||
    number.value === "" ||
    number.className === "is-invalid" ||
    date.value === "" ||
    date.className === "is-invalid" ||
    select.selectedIndex === 0 ||
    selecttwo.selectedIndex == 0
  ) {
    button.classList.add("is-invalid");
    setTimeout(function() {
      button.classList.remove("is-invalid");
    }, 5000);
  } else {
    button.classList.add("is-valid");
    setTimeout(function() {
      clearFields();
    }, 5000);
  }
});

// Form Blur Event Listeners
document
  .getElementById("formGroupExampleInput")
  .addEventListener("blur", validateName);

document
  .getElementById("formGroupExampleInput2")
  .addEventListener("blur", validatePhone);

document
  .getElementById("formGroupExampleInput3")
  .addEventListener("blur", validateDate);

document.getElementById("select").addEventListener("blur", validSelectOne);

// Validate Name
function validateName() {
  const name = document.getElementById("formGroupExampleInput");
  const re = /^[a-zA-Z]{1,30}\s[a-zA-Z]{1,30}$/;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

// Validate Phone number
function validatePhone() {
  const phone = document.getElementById("formGroupExampleInput2");
  const re = /^[0-9]{11}$/;

  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}

// Validate Date
function validateDate() {
  const date = document.getElementById("formGroupExampleInput3");
  const re = /^[1-9][1-9]\/[1-9][1-2]\/[1-9][1-9][1-9][1-9]/;

  if (!re.test(date.value)) {
    date.classList.add("is-invalid");
  } else {
    date.classList.remove("is-invalid");
  }
}

// Validate Date
function validSelectOne() {
  const select = document.getElementById("select");

  if (select.selectedIndex === 0) {
    select.className.add("is-invalid");
  } else {
    select.className.remove("is-invalid");
  }
}

function clearFields() {
  button.classList.remove("is-valid");
  name.value = "";
  name.classList.remove("is-invalid");
  number.value = "";
  number.classList.remove("is-invalid");
  date.value = "";
  date.classList.remove("is-invalid");
  select.selectedIndex = 0;
  selecttwo.selectedIndex = 0;
  button.classList.remove("is-invalid");
}

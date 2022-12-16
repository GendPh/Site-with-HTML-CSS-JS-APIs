let fullNameValidation = false;
let fullNameValue;
$("#fullNameValue").on("blur", function () {
  const fullNameRule = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const oneNameRule = '^[a-zA-Z]{3,16}$';
  if ($(this).val().match(fullNameRule) || $(this).val().match(oneNameRule)) {
    $(this).css("border", "3px solid green");
    fullNameValidation = true;
    fullNameValue = $(this).val();
  } else {
    $(this).css("border", "3px solid red");
    fullNameValidation = false;
    fullNameValue = undefined;
  }
});

let emailValidation = false;
let emailValue;
$("#userEmailValue").on("blur", function () {
  const emailRule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if ($(this).val().match(emailRule)) {
    $(this).css("border", "3px solid green");
    emailValidation = true;
    emailValue = $(this).val();
  } else {
    $(this).css("border", "3px solid red");
    emailValidation = false;
    emailValue = undefined;
  }
});

let phoneNumber;
let phoneNumberValidation = false;

$("#phoneNumber").on("blur", function () {
  const phoneRule = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

  if ($(this).val().match(phoneRule)) {
    phoneNumber = $(this).val();
    $(this).css("border", "3px solid green");
    phoneNumberValidation = true;
  } else {
    phoneNumberValidation = false;
    phoneNumber = undefined;
    $(this).css("border", "3px solid red");
  }
})

let subjectText;
let subjectTextValidation = false;
$("#subjectValue").on("blur", function () {
  const subjectRule = /^\s*$/;
  if ($(this).val().match(subjectRule)) {
    $(this).attr("placeholder", "Insert valid values")
    $(this).css("border", "3px solid red");
    subjectTextValidation = false;
    subjectText = undefined;
  } else {
    $(this).css("border", "3px solid green");
    subjectText = $(this).val();
    subjectTextValidation = true;
  }
})

let textAreaText;
let textAreaValidation = false;
$("#textAreaValue").on("blur", function () {
  const textAreaRule = /^\s*$/;
  if ($(this).val().match(textAreaRule)) {
    $(this).attr("placeholder", "Insert valid values")
    $(this).css("border", "3px solid red");
    textAreaText = undefined;
    textAreaValidation = false;
  } else {
    $(this).css("border", "3px solid green");
    textAreaText = $(this).val();
    textAreaValidation = true;
  }
})

$("#contactFormBtn").on("mouseover", function () {
  $("#contactFormBtnExtra").text("Clicking here will open a email page");
})
$("#contactFormBtn").on("mouseout", function () {
  $("#contactFormBtnExtra").text("");
})


function sendMail() {
  const myEmail = "ferreira_gab98@hotmail.com"

  if (fullNameValidation === true && emailValidation === true && subjectTextValidation === true && textAreaValidation === true && phoneNumberValidation === true) {
    window.open('mailto:' + myEmail + '?subject=Reason for the contact: ' + subjectText + ", Name: " + fullNameValue + ", Phone Number:" + phoneNumber + '&body=' + textAreaText);

  } else {
    alert("Please insert the missing Values \n" + "Name: " + fullNameValue + "\n Email: " + emailValue + "\n Phone Number: " + phoneNumber + "\n Subject: " + subjectText + "\n Message: " + textAreaText)
  }
}
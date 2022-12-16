/* Form Name validation Start */
window.valFirstNameOk = false;
window.valFirstNameValue = "none";
window.valLastNameOk = false;
window.valLastNameValue = "none";

$("#firstName").on("blur", function () {
  if ($(this).val().match('^[a-zA-Z]{3,16}$')) {
    $(this).addClass("valOk")
    $(this).removeClass("valNok")
    valFirstNameValue = $(this).val();
    valFirstNameOk = true;
  } else {
    $(this).removeClass("valOk")
    $(this).addClass("valNok")
    valFirstNameValue = "Insert Correct Last Name";
    valFirstNameOk = false;
  }
});
$("#lastName").on("blur", function () {
  if ($(this).val().match('^[a-zA-Z]{3,16}$')) {
    $(this).addClass("valOk")
    $(this).removeClass("valNok")
    valLastNameValue = $(this).val();
    valLastNameOk = true;
  } else {
    $(this).removeClass("valOk")
    $(this).addClass("valNok")
    valLastNameValue = "Insert Correct Last Name";
    valLastNameOk = false;
  }
});

window.cellNumberVal = false;
window.cellNumberValue = 0;
$(document).ready(function () {
  $('#cellNumber').blur(function (e) {
    if (validatePhone('txtPhone')) {
      $(this).addClass("valOk")
      $(this).removeClass("valNok")
      cellNumberValue = $(this).val();
      cellNumberVal = true;
    }
    else {
      $(this).removeClass("valOk")
      $(this).addClass("valNok")
      cellNumberVal = false;
      cellNumberValue = "Insert Correct Phone Number";
    }
  });
});

function validatePhone(txtPhone) {
  let a = $("#cellNumber").val();
  let filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
  if (filter.test(a)) {
    return true;
  }
  else {
    return false;
  }
}

$("#sendProposal").click(function () {
  if (valFirstNameOk == false || valLastNameOk == false || cellNumberVal == false) {
    alert("Wrong Validation" + "\n First Name :" + valFirstNameValue + "\n Last Name : " + valLastNameValue + "\n Phone Number : " + cellNumberValue);
  } else {
    let proposalPhrase = "First Name :" + valFirstNameValue + "\n Last Name : " + valLastNameValue + "\n Phone Number : " + cellNumberValue + "\n Site pretend : " + optionsChosen + "\n Extra options : " + extraOptionNames.join(", ") + "\n Discount : " + discountChosen.join(": ") + "\n Final Price: " + $("#finalPrice").val();
    alert(proposalPhrase);

  }
})
/* Form Name validation End */


/* Budget Start */
import webSites from "./webSites.json" assert{type: "json"};
import webSitesExtraOptions from "./webSiteExtraOption.json" assert{type: "json"};

$("#BudgetRequest").ready(function () {
  /* Select Option */
  $("#firstOption").text(webSites[0].name);
  $("#firstOption").val(webSites[0].price);
  $("#secondOption").text(webSites[1].name);
  $("#secondOption").val(webSites[1].price);
  $("#thirdOption").text(webSites[2].name);
  $("#thirdOption").val(webSites[2].price);
  $("#fourthOption").text(webSites[3].name);
  $("#fourthOption").val(webSites[3].price);
  $("#fifthOption").text(webSites[4].name);
  $("#fifthOption").val(webSites[4].price);
  $("#sixthOption").text(webSites[5].name);
  $("#sixthOption").val(webSites[5].price);
  $("#seventhOption").text(webSites[6].name);
  $("#seventhOption").val(webSites[6].price);
  $("#eightOption").text(webSites[7].name);
  $("#eightOption").val(webSites[7].price);
  $("#ninthOption").text(webSites[8].name);
  $("#ninthOption").val(webSites[8].price);
  /* CheckBox */
  $("#extraLabelOne").text(webSitesExtraOptions[0].extra);
  $("#extraOne").val(webSitesExtraOptions[0].price);
  $("#extraLabelTwo").text(webSitesExtraOptions[1].extra);
  $("#extraTwo").val(webSitesExtraOptions[1].price);
  $("#extraLabelThree").text(webSitesExtraOptions[2].extra);
  $("#extraThree").val(webSitesExtraOptions[2].price);
  $("#extraLabelFour").text(webSitesExtraOptions[3].extra);
  $("#extraFour").val(webSitesExtraOptions[3].price);
  $("#extraLabelFive").text(webSitesExtraOptions[4].extra);
  $("#extraFive").val(webSitesExtraOptions[4].price);
  $("#extraLabelSix").text(webSitesExtraOptions[5].extra);
  $("#extraSix").val(webSitesExtraOptions[5].price);
  $("#extraLabelSeven").text(webSitesExtraOptions[6].extra);
  $("#extraSeven").val(webSitesExtraOptions[6].price);
});

let pricePerWebSite = 0;
let optionExtra = 0;
let optionsChosen = [];
let extraOptionNames = [];
let discounted = pricePerWebSite;

$("#webSiteType").change(function () {
  discount();
  let optionId = $(this).find('option:selected').attr('id');
  $("#webSiteType option:selected").each(function () {
    pricePerWebSite = parseInt($(this).val());
  });
  $("#sitePrice").text(pricePerWebSite + "€");
  $("#finalPrice").val(pricePerWebSite + optionExtra + "€");
  if (optionId == "firstOption") {
    optionsChosen = [];
    optionsChosen.push(webSites[0].name);
    $("#timeFinish").val(webSites[0].time);
  } else if (optionId == "secondOption") {
    optionsChosen = [];
    optionsChosen.push(webSites[1].name);
    $("#timeFinish").val(webSites[1].time);
  } else if (optionId == "thirdOption") {
    optionsChosen = [];
    optionsChosen.push(webSites[2].name);
    $("#timeFinish").val(webSites[2].time);
  } else if (optionId == "fourthOption") {
    optionsChosen = [];
    optionsChosen.push(webSites[3].name);
    $("#timeFinish").val(webSites[3].time);
  } else if (optionId == "fifthOption") {
    optionsChosen = [];
    optionsChosen.push(webSites[4].name);
    $("#timeFinish").val(webSites[4].time);
  } else if (optionId == "sixthOption") {
    optionsChosen = [];
    optionsChosen.push(webSites[5].name);
    $("#timeFinish").val(webSites[5].time);
  } else if (optionId == "seventhOption") {
    optionsChosen = [];
    optionsChosen.push(webSites[6].name);
    $("#timeFinish").val(webSites[6].time);
  } else if (optionId == "eightOption") {
    optionsChosen = [];
    optionsChosen.push(webSites[7].name);
    $("#timeFinish").val(webSites[7].time);
  } else if (optionId == "ninthOption") {
    optionsChosen = [];
    optionsChosen.push(webSites[8].name);
    $("#timeFinish").val(webSites[8].time);
  }
  $("#optionChosen").text(optionsChosen + ". Extra options: " + extraOptionNames.join(", "));
});


let discountCount =
{
  PlusOneWeek: "Plus One Week",
  PlusOneWeekVal: "5%",
  PlusTwoWeek: "Plus Two Week's",
  PlusTwoWeekVal: "10%",
  PlusThreeWeek: "Plus Three Week's",
  PlusThreeWeekVal: "15%",
  PlusFourWeek: "Plus Four Week's",
  PlusFourWeekVal: "20%",
}


function discount() {
  $("#discountLine").removeClass("discount");
  $("#noD").text("No plus Time: Original Value");
  $("#dOne").text(discountCount.PlusOneWeek + ": " + discountCount.PlusOneWeekVal);
  $("#dTwo").text(discountCount.PlusTwoWeek + ": " + discountCount.PlusTwoWeekVal);
  $("#dThree").text(discountCount.PlusThreeWeek + ": " + discountCount.PlusThreeWeekVal);
  $("#dFour").text(discountCount.PlusFourWeek + ": " + discountCount.PlusFourWeekVal);
}


function percentageOff(price, percentageValue) {
  return price * (1 - percentageValue / 100)
}
let discountChosen = ["No Discount"];

$("#webSiteDiscount").change(function () {
  let discountId = $(this).find('option:selected').attr('id');
  if (discountId === "dOne") {
    discounted = percentageOff(pricePerWebSite, 5);
    $("#finalPrice").val(discounted + optionExtra + "€");
    discountChosen = [];
    discountChosen.push(discountCount.PlusOneWeek);
    discountChosen.push(discountCount.PlusOneWeekVal);
  } else if (discountId === "dTwo") {
    discounted = percentageOff(pricePerWebSite, 10);
    $("#finalPrice").val(discounted + optionExtra + "€");
    discountChosen = [];
    discountChosen.push(discountCount.PlusTwoWeek);
    discountChosen.push(discountCount.PlusTwoWeekVal);
  } else if (discountId === "dThree") {
    discounted = percentageOff(pricePerWebSite, 15);
    $("#finalPrice").val(discounted + optionExtra + "€");
    discountChosen = [];
    discountChosen.push(discountCount.PlusThreeWeek);
    discountChosen.push(discountCount.PlusThreeWeekVal);
  } else if (discountId === "dFour") {
    discounted = percentageOff(pricePerWebSite, 20);
    $("#finalPrice").val(discounted + optionExtra + "€");
    discountChosen = [];
    discountChosen.push(discountCount.PlusFourWeek);
    discountChosen.push(discountCount.PlusFourWeekVal);
  } else if (discountId === "noD") {
    discounted = percentageOff(pricePerWebSite, 0);
    $("#finalPrice").val(discounted + optionExtra + "€");
    discountChosen = [];
    discountChosen.push("No Discount");
  }
})



$('#extraOne').change(function () {
  if ($(this).is(':checked')) {
    extraOptionNames.push(webSitesExtraOptions[0].extra);
    optionExtra += webSitesExtraOptions[0].price;
    $("#optionChosen").text(optionsChosen + ". Extra options: " + extraOptionNames.join(", "));
  } else {
    extraOptionNames.pop(webSitesExtraOptions[0].extra);
    optionExtra -= webSitesExtraOptions[0].price;
    $("#optionChosen").text(optionsChosen + ". Extra options: " + extraOptionNames.join(", "));
  }
  $("#finalPrice").val(discounted + optionExtra + "€");
});

$('#extraTwo').change(function () {
  if ($(this).is(':checked')) {
    extraOptionNames.push(webSitesExtraOptions[1].extra);
    optionExtra += webSitesExtraOptions[1].price;
    $("#optionChosen").text(optionsChosen + ". Extra options: " + extraOptionNames.join(", "));
  } else {
    extraOptionNames.pop(webSitesExtraOptions[1].extra);
    optionExtra -= webSitesExtraOptions[1].price;
    $("#optionChosen").text(optionsChosen + ". Extra options: " + extraOptionNames.join(", "));
  }
  $("#finalPrice").val(discounted + optionExtra + "€");
});
$('#extraThree').change(function () {
  if ($(this).is(':checked')) {
    extraOptionNames.push(webSitesExtraOptions[2].extra);
    optionExtra += webSitesExtraOptions[2].price;
    $("#optionChosen").text(optionsChosen + ". Extra options: " + extraOptionNames.join(", "));
  } else {
    extraOptionNames.pop(webSitesExtraOptions[2].extra);
    optionExtra -= webSitesExtraOptions[2].price;
    $("#optionChosen").text(optionsChosen + ". Extra options: " + extraOptionNames.join(", "));
  }
  $("#finalPrice").val(discounted + optionExtra + "€");
});

$('#extraFour').change(function () {
  if ($(this).is(':checked')) {
    extraOptionNames.push(webSitesExtraOptions[3].extra);
    optionExtra += webSitesExtraOptions[3].price;
    $("#optionChosen").text(optionsChosen + ". Extra options: " + extraOptionNames.join(", "));
  } else {
    extraOptionNames.pop(webSitesExtraOptions[3].extra);
    optionExtra -= webSitesExtraOptions[3].price;
    $("#optionChosen").text(optionsChosen + ". Extra options: " + extraOptionNames.join(", "));
  }
  $("#finalPrice").val(discounted + optionExtra + "€");
});
$('#extraFive').change(function () {
  if ($(this).is(':checked')) {
    extraOptionNames.push(webSitesExtraOptions[4].extra);
    optionExtra += webSitesExtraOptions[4].price;
    $("#optionChosen").text(optionsChosen + ". Extra options: " + extraOptionNames.join(", "));
  } else {
    extraOptionNames.pop(webSitesExtraOptions[4].extra);
    optionExtra -= webSitesExtraOptions[4].price;
    $("#optionChosen").text(optionsChosen + ". Extra options: " + extraOptionNames.join(", "));
  }
  $("#finalPrice").val(discounted + optionExtra + "€");
});
$('#extraSix').change(function () {
  if ($(this).is(':checked')) {
    extraOptionNames.push(webSitesExtraOptions[5].extra);
    optionExtra += webSitesExtraOptions[5].price;
    $("#optionChosen").text(optionsChosen + ". Extra options: " + extraOptionNames.join(", "));
  } else {
    extraOptionNames.pop(webSitesExtraOptions[5].extra);
    optionExtra -= webSitesExtraOptions[5].price;
    $("#optionChosen").text(optionsChosen + ". Extra options: " + extraOptionNames.join(", "));
  }
  $("#finalPrice").val(discounted + optionExtra + "€");
});
$('#extraSeven').change(function () {
  if ($(this).is(':checked')) {
    extraOptionNames.push(webSitesExtraOptions[6].extra);
    optionExtra += webSitesExtraOptions[6].price;
    $("#optionChosen").text(optionsChosen + ". Extra options: " + extraOptionNames.join(", "));
  } else {
    extraOptionNames.pop(webSitesExtraOptions[6].extra);
    optionExtra -= webSitesExtraOptions[6].price;
    $("#optionChosen").text(optionsChosen + ". Extra options: " + extraOptionNames.join(", "));
  }
  $("#finalPrice").val(discounted + optionExtra + "€");
});
$("#finalPrice").val(discounted + optionExtra + "€");

/* Budget End */


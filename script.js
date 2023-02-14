if ($("#sel1").val() == 0, $("#sel2").val() == 0) {
	$("#btn").attr("disabled", "disabled");
}
$("#sel1"), $("#sel2").on("change", function () {
	if ($("#sel1").val() == 0, $("#sel2").val() == 0) {
		$("#btn").attr("disabled", "disabled");
	} else {
		$("#btn").removeAttr("disabled");
	}
})

// include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";

// for selecting different controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var demo = document.getElementById("demo");
var resultFrom;
var resultTo;
var searchValue;

// Event when currency is changed
fromCurrecy.addEventListener('change', (event) => {
	resultFrom = `${event.target.value}`;
});

// Event when currency is changed
toCurrecy.addEventListener('change', (event) => {
	resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);

// function for updating value
function updateValue(e) {
	searchValue = e.target.value;
}

// when user clicks, it calls function getresults
convert.addEventListener("click", getResults);

function getResults() {
	var inpObj = document.getElementById("oamount");
	finalAmount.style.cssText = 'display:block';
	if (!inpObj.checkValidity()) {
		document.getElementById("demo").innerHTML = inpObj.validationMessage;
		finalAmount.style.cssText = 'display:none';
	} else {
		fetch(`${api}`)
			.then(currency => {
				return currency.json();
			}).then(displayResults);
		demo.style.cssText = 'display:none';
	}
}

// display results after conversion
function displayResults(currency) {
	let fromRate = currency.rates[resultFrom];
	let toRate = currency.rates[resultTo];
	finalValue.innerHTML =
		((toRate / fromRate) * searchValue).toFixed(2);
}

// when user click on reset button
function clearVal() {
	window.location.reload();
	document.getElementsByClassName("finalValue").innerHTML = "";
};
document.getElementById("cp_btn").addEventListener("click", copy_password);

function copy_password() {
	var copyText = document.getElementById("pwd_spn");
	var textArea = document.createElement("textarea");
	textArea.value = copyText.textContent;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("Copy");
	textArea.remove();
}

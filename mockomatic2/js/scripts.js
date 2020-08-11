//console.log("The Matrix has you...");

var text;
var altered;
var counter;
var skipCounter;

function getFormText(formKey) {
	text = document.forms["inputForm"]["inputFormTextArea"].value;
	if (formKey == 'mock') {
		alterText(text);
	} else if (formKey == 'caps') {
		capsText(text);
	}
}

function alterText(text) {
	text = text.toLowerCase();
	altered = "";
	counter = 0;
	skipCounter = 0;
	for(var x = 0; x < text.length; x++) {
		letter = text.charAt(x);
		if(letter.match(/[a-z]/)) {
			rNumber = Math.floor(Math.random() * 100) + 1;
			if(rNumber <= 50 && counter < 2) {
				letter = letter.toUpperCase();
				counter += 1;
				skipCounter = 0;
			}
			else if(skipCounter >= 2) {
				letter = letter.toUpperCase();
				counter += 1;
				skipCounter = 0;
			}
			else {
				skipCounter += 1;
				counter = 0;
			}
		}
		altered += letter;
	}
	localStorage.setItem("resultText", altered);
	window.location.href="mockResult.HTML";
}

function capsText(text) {
	altered = text.toUpperCase();
	localStorage.setItem("resultText", altered);
	window.location.href="capsResult.HTML";
}

function clearText() {
	document.getElementById("inputFormTextArea").value = "";
}

function getResultText() {
	document.getElementById("resultBox").innerHTML=localStorage.getItem("resultText");
}

function copyToClipboard() {
	var copyText = localStorage.getItem("resultText");
	navigator.clipboard.writeText(copyText);
	alert("Copied!");
}

function goAgain() {
	var reText = localStorage.getItem("resultText");
	alterText(reText);
}
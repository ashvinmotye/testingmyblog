var button = document.querySelector("button");

var all = document.querySelectorAll(".result");

var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five =document.querySelector("#five");
var six = document.querySelector("#six");
var results = [one, two, three, four, five, six];

button.addEventListener("click", function() {
	resetColor(all);

	var x = [];

	for(var i=0; i<6; i++) {
		do {
			var num = Math.round(Math.random()*40);
		} while(x.indexOf(num) != -1 || num == 0);

		x.push(num);
	}

	x.sort(compare);

	for(var i=0; i<6; i++) {
		results[i].innerHTML = x[i];

		var val = Number(results[i].innerHTML);

		if(val <= 10) {
			results[i].style.backgroundColor = "#F44336";
		}

		if(val >= 11 && val <= 20 ) {
			results[i].style.backgroundColor = "#2196F3";
		}

		if(val >= 21 && val <= 30) {
			results[i].style.backgroundColor = "#FFEB3B";
		}

		if(val >= 30) {
			results[i].style.backgroundColor = "#4CAF50";
		}
	}

	this.innerHTML = "Shuffle again";
});

function compare(a, b) {
	return a - b;
}

function resetColor(a) {
	for(var i=0; i<a.length; i++) {
		a[i].style.backgroundColor = "#E4E4E4";
	}
}
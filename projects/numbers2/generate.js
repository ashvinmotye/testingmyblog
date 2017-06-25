/**
 * Created by Ashvin on 23-Apr-17.
 */
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");

var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
var sixth = document.getElementById("sixth");

var results = [first, second, third, fourth, fifth, sixth];
var all = document.querySelectorAll(".output");

var button = document.querySelector("button");

var numbers = [];

one.addEventListener("change", function(){
    numbers[0] = Number(this.value);
    setColor(this);
});

two.addEventListener("change", function(){
    numbers[1] = Number(this.value);
    setColor(this);
});

three.addEventListener("change", function(){
    numbers[2] = Number(this.value);
    setColor(this);
});

four.addEventListener("change", function(){
    numbers[3] = Number(this.value);
    setColor(this);
});

five.addEventListener("change", function(){
    numbers[4] = Number(this.value);
    setColor(this);
});

six.addEventListener("change", function(){
    numbers[5] = Number(this.value);
    setColor(this);
});

function setColor(obj) {
    if(obj.value<11) {
        obj.style.backgroundColor = "#f44336";
        obj.style.color = "#272822";
    }

    if(obj.value>=11 && obj.value<21) {
        obj.style.backgroundColor = "#2196f3";
        obj.style.color = "#272822";
    }

    if(obj.value>=21 && obj.value<31) {
        obj.style.backgroundColor = "#ffeb3b";
        obj.style.color = "#272822";
    }

    if(obj.value>=31 && obj.value<41) {
        obj.style.backgroundColor = "#4caf50";
        obj.style.color = "#272822";
    }
}

button.addEventListener("click", function() {
    resetColor(all);

    var x = [];

    for(var i=0; i<6; i++) {
        do {
            var num = Math.round(Math.random()*40);
        } while(x.indexOf(num) != -1 || num == 0 || numbers.indexOf(num) != -1);

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
        a[i].style.backgroundColor = "#41423c";
        a[i].style.color = "#272822";
    }
}
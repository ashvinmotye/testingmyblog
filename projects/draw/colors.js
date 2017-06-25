var colors = ['black','grey','#ff2b2b','#ff792b','white','#f7f713','#33bd2a','#2ba7ff','#e82bff','#5f2bff'];

for(var i=0, n=colors.length; i<n; i++) {
	var swatch = document.createElement('div');
	swatch.className = 'swatch';
	swatch.style.backgroundColor = colors[i];
	swatch.addEventListener('click', setSwatch);
	document.getElementById('colors').appendChild(swatch);
}

function setColor(color) {
	context.fillStyle = color;
	context.strokeStyle = color;

	var active = document.getElementsByClassName('active')[0];
	if (active) {
		active.className = 'swatch';
	}
}

function setSwatch(e) {
	//identify swatch
	var swatch = e.target;

	//set color
	setColor(swatch.style.backgroundColor);

	//give active class
	swatch.className += ' active';
}

setSwatch({target: document.getElementsByClassName('swatch')[0]});
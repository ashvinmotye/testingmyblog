var setRadius = function(newRadius) {
	if (newRadius < minRad)
		newRadius = minRad;
	else if (newRadius > maxRad)
		newRadius = maxRad;
	radius = newRadius;
	context.lineWidth = 2*radius;

	radSpan.textContent = radius;
}

var minRad = 1,
	maxRad = 5,
	defaultRad = 2,
	interval = 1,
	radSpan = document.getElementById('radval'),
	decRad = document.getElementById('decrad'),
	incRad = document.getElementById('incrad');

decrad.addEventListener('click', function(){
		setRadius(radius - interval);
});

incrad.addEventListener('click', function(){
	setRadius(radius + interval);
});

setRadius(defaultRad);
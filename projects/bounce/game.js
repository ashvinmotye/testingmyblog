var canvas, context;
var ballX = 75;
var ballY = 75;
var ballSpeedX = 10;
var ballSpeedY = 12;

const PADDLE_WIDTH = 100;
const PADDLE_THICKNESS = 10;
const PADDLE_FROM_EDGE = 50;
var paddleX = 400;

function updatePos(e) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	var mouseX = e.clientX - rect.left - root.scrollLeft;
	// var mouseY = e.clientY - rect.top - root.scrollTop;

	paddleX = mouseX - PADDLE_WIDTH/2;
}

window.onload = function() {
	canvas = document.querySelector('canvas');
	context = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	var fps = 30;
	setInterval(updateAll, 1000/fps);

	canvas.addEventListener('mousemove', updatePos);
}

function updateAll() {
	moveAll();
	drawAll();
}

function ballReset() {
	ballX = canvas.width/2;
	ballY = canvas.height/4;
}

function moveAll() {
	ballX += ballSpeedX;
	ballY += ballSpeedY;

	if (ballX < 0) { // hits left side
		ballSpeedX *= -1;
	}

	if (ballX > canvas.width) { // hits right side
		ballSpeedX *= -1;
	}

	if (ballY < 0) { // hits top
		ballSpeedY *= -1;
	}

	if (ballY > canvas.height) { // hits bottom
		ballReset();
	}

	var paddleTopEdge = canvas.height - PADDLE_FROM_EDGE;
	var paddleBottomEdge = paddleTopEdge + PADDLE_THICKNESS;
	var paddleLeftEdge = paddleX;
	var paddleRightEdge = paddleX + PADDLE_WIDTH;

	if (ballY > paddleTopEdge && // below top
		ballY < paddleBottomEdge && // above bottom
		ballX > paddleLeftEdge && // right of left edge
		ballX < paddleRightEdge) { // left of right edge

			ballSpeedY *= -1;

		var centrePaddleX = paddleX + PADDLE_WIDTH/2;
		var ballFromCentrePaddle = ballX - centrePaddleX;
		ballSpeedX = ballFromCentrePaddle * 0.35;
	}
}

function drawAll() {
	colorRect(0,0, canvas.width,canvas.height, '#1f1f1f'); //clear screen
	colorCircle(ballX,ballY, 10, 'white'); // draw ball
	colorRect(paddleX,canvas.height - PADDLE_FROM_EDGE, PADDLE_WIDTH, PADDLE_THICKNESS, 'white');
}

function colorRect(x,y, width,height, color) {
	context.fillStyle = color;
	context.fillRect(x,y, width,height);
}

function colorCircle(x,y, radius, color) {
	context.fillStyle = color;
	context.beginPath();
	context.arc(x,y, radius, 0,2*Math.PI, true);
	context.fill();
}
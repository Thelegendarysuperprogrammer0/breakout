let gamecanvas = document.getElementById(breakout);
let gcv = gamecanvas.getContext('2d');

//draw a ball
function drawBall() {
	gcv.beginPath();
	gcv.fillStyle = "white";
	gcv.rect(20,20,20,20);
	gcv.closePath();
}

drawBall()


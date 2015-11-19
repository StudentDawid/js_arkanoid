var paddleHeight = 10;
var paddleWidth = 175;
var paddleX = (canvas.width - paddleWidth) / 2;
var paddleY = canvas.height - paddleHeight;

var rightPressed = false;
var leftPressed = false;

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#83E593";
    ctx.fill();
    ctx.closePath();
}

function updatePaddle() {
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    } 
}
var balls = [];
var tmp=0;

function initBalls() {
    destroyed_balls = 0;
    balls = [];
    balls[0] = {
        ballRadius: 10,
        x: canvas.width / 2,
        y: canvas.height - 30,
        dx: 3,
        dy: -3+(-1*extra_speed_from_level),
        start_dx: 3,
        start_dy: -3,
        status: 1
    };
    // balls[1] = {
    //     ballRadius: 10,
    //     x: canvas.width / 2,
    //     y: canvas.height - 30,
    //     dx: -3,
    //     dy: -3,
    //     start_dx: -3,
    //     start_dy: -3,
    //     status: 1
    // };
    // balls[2] = {
    //     ballRadius: 10,
    //     x: canvas.width / 2,
    //     y: canvas.height - 30,
    //     dx: -3,
    //     dy: -2,
    //     start_dx: -3,
    //     start_dy: -2,
    //     status: 1
    // };
}

var grd=ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0,"black");
grd.addColorStop(1,"white");

function drawBall() {
    for (tmp = 0; tmp < balls.length ; tmp++) {
        var ball = balls[tmp];
        if(ball.status == 1) {
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.ballRadius, 0, Math.PI * 2);
            ctx.fillStyle = "#83E593";
            ctx.fill();
            ctx.closePath();
        }
    }

}

function updateBall() {
    for (tmp = 0; tmp < balls.length ; tmp++) {
        var ball = balls[tmp];
        if(ball.status==1){
            if (ball.x + ball.dx > canvas.width - ball.ballRadius || ball.x + ball.dx < ball.ballRadius) {
                ball.dx = -ball.dx;
            }
            if (ball.y + ball.dy < ball.ballRadius) {
                ball.dy = -ball.dy;
            }
            ball.x += ball.dx;
            ball.y += ball.dy;
        }
    }
}

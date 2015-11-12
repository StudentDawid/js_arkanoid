function drawScore() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "red";
	ctx.fillText("Score: "+score, 8, 20);
	ctx.fillText("Score multipler: "+score_multipler, 8, 40);

}

function drawLives() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "red";
	ctx.fillText("Lives: "+lives, canvas.width-65, 20);
    // ctx.fillText("clickx: "+mouseClickX, canvas.width-65, 40);
    // ctx.fillText("clicky: "+mouseClickY, canvas.width-65, 60);
    // ctx.fillText("destroyed_balls: "+destroyed_balls, canvas.width-150, 80);
    // var tmp=0;
    // for (tmp = 0; tmp < balls.length ; tmp++) {
    //     var ball = balls[tmp];
    //     ctx.fillText("ball: "+tmp+' status-'+ball.status, 8, 80+tmp*20);
    // }
}

function RectCircleColliding(circle_x, circle_y, circle_r, rect_x, rect_y, rect_w, rect_h) {
    var distX = Math.abs(circle_x - rect_x - rect_w / 2);
    var distY = Math.abs(circle_y - rect_y - rect_h / 2);

    if (distX > (rect_w / 2 + circle_r)) {
        return false;
    }
    if (distY > (rect_h / 2 + circle_r)) {
        return false;
    }

    if (distX <= (rect_w / 2)) {
        return true;
    }
    if (distY <= (rect_h / 2)) {
        return true;
    }

    var dx = distX - rect_w / 2;
    var dy = distY - rect_h / 2;
    return (dx * dx + dy * dy <= (circle_r * circle_r));
}

function collisionWithPaddle(ball) {
    return RectCircleColliding(ball.x, ball.y, ball.ballRadius, paddleX, paddleY, paddleWidth, paddleHeight);
}

function collisionWithMapEnd(ball){
    return ball.y >= canvas.height;
}
function collisionWithBrick(ball, brick){
    return RectCircleColliding(ball.x, ball.y, ball.ballRadius, brick.x, brick.y, brickWidth, brickHeight)
}


function collisionDetection() {
    var ball;
    var i, c, r, b;

    for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
            b = bricks[c][r];

            if (b.status == 1) {
                for (i = 0; i < balls.length ; i++) {
                    ball = balls[i];
                    if ( collisionWithBrick(ball, b) ) {
                        ball.dy = -ball.dy;
                        b.status = 0;
                        score= score + b.score_point*score_multipler;
                    }
                }
            }

        }
    }

    var brick_status =0;
    for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
          b = bricks[c][r];
          if(b.status>0){
            brick_status++;
          }
      }
    }
    if (brick_status==0) {
        end_game_message = "Win";
        setScore(score);
        newGame=2;
    }
    ball=undefined;

    for (var i = 0; i < balls.length ; i++) {
        var ball = balls[i];
        if ( collisionWithPaddle(ball) ) {
            ball.y = canvas.height - paddleHeight - ball.ballRadius;
            ball.dy = -ball.dy;
        }
        if ( collisionWithMapEnd(ball) ){
            if(ball.status > 0) {
                destroyed_balls=destroyed_balls+1;
                ball.status = 0;
            }
        }
    }

    if(destroyed_balls == balls.length) {
        end_game_message = "Lose";
        setScore(score);
        newGame=2;
    }
}

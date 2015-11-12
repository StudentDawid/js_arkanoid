function initializeKeyListeners() {
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
        document.addEventListener("mousemove", mouseMoveHandler, false);
        canvas.addEventListener("click", mouseClickHandler, false);

        function keyDownHandler(e) {
            if (e.keyCode == 39) {
                rightPressed = true;
            }
            else if (e.keyCode == 37) {
                leftPressed = true;
            }
        }

        function keyUpHandler(e) {
            if (e.keyCode == 39) {
                rightPressed = false;
            }
            else if (e.keyCode == 37) {
                leftPressed = false;
            }
        }

        function mouseMoveHandler(e) {
            if(newGame != 2) {
                var relativeX = e.clientX - canvas.offsetLeft;
                if (relativeX > 0 && relativeX < canvas.width) {
                    paddleX = relativeX - paddleWidth / 2;
                }
            }
        }

        function mouseClickHandler(e) {
            mouseClickX = e.clientX;
            mouseClickY = e.clientY;

            var p = getMousePos(e);
            if(newGame == 1){ //menu glowne
                if (p.x >= menu_button_1.x && p.x <= menu_button_1.x + menu_button_1.w &&
                    p.y >= menu_button_1.y && p.y <= menu_button_1.y + menu_button_1.h){
                    newGame=0;
                }
            } else if(newGame == 2){ //po poziomie
                if (p.x >= play_again_button.x && p.x <= play_again_button.x + play_again_button.w &&
                    p.y >= play_again_button.y && p.y <= play_again_button.y + play_again_button.h){
                    score_multipler=1;
                    extra_speed_from_level=0;
                    initBalls();
                    initBricks();
                    newGame=0;
                } else if (p.x >= go_to_menu_button.x && p.x <= go_to_menu_button.x + go_to_menu_button.w &&
                    p.y >= go_to_menu_button.y && p.y <= go_to_menu_button.y + go_to_menu_button.h){
                    score_multipler=1;
                    extra_speed_from_level=0;
                    initBalls();
                    initBricks();
                    newGame=1;
                } else if (p.x >= next_level_button.x && p.x <= next_level_button.x + next_level_button.w &&
                    p.y >= next_level_button.y && p.y <= next_level_button.y + next_level_button.h){
                    extra_speed_from_level=extra_speed_from_level+2;
                    score_multipler++;
                    initBalls();
                    initBricks();
                    newGame=0;
                }
            }
        }
    }

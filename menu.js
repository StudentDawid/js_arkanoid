function drawMenu() {


      // imageObj.onload = function() {
      //   ctx.drawImage(this, 100, 100);
      // };


    //ctx.beginPath();
    //ctx.rect(0, 0, canvas.width, canvas.height);
    //ctx.fillStyle = "#0095DD";
    //ctx.fill();
    //ctx.closePath();

    ctx.beginPath();
    ctx.drawImage(menuImageObject, 0, 0, canvas.width, canvas.height);
    ctx.closePath();

    ctx.beginPath();
    //ctx.rect(menu_button_1.x, menu_button_1.y , menu_button_1.w, menu_button_1.h);
    //ctx.fillStyle = "blue";
    //ctx.fill();
    ctx.drawImage(menu_button_1_image, menu_button_1.x, menu_button_1.y , menu_button_1.w, menu_button_1.h);
    ctx.closePath();

    ctx.font = "16px Arial";
	ctx.fillStyle = "black";
	ctx.fillText("NEW GAME", menu_button_1.x+menu_button_1.w/20, menu_button_1.y+menu_button_1.h/1.5);
    // ctx.fillText("NEW GAME", canvas.width/2 - 50, 100);
}

function drawWinMenu() {
    ctx.beginPath();
    //ctx.rect(play_again_button.x, play_again_button.y , play_again_button.w, play_again_button.h);
    //ctx.fillStyle = "blue";
    //ctx.fill();
    ctx.drawImage(play_again_button_image, play_again_button.x, play_again_button.y , play_again_button.w, play_again_button.h);
    ctx.closePath();

    ctx.beginPath();
    //ctx.rect(go_to_menu_button.x, go_to_menu_button.y , go_to_menu_button.w, go_to_menu_button.h);
    //ctx.fillStyle = "blue";
    //ctx.fill();
    ctx.drawImage(go_to_menu_button_image, go_to_menu_button.x, go_to_menu_button.y , go_to_menu_button.w, go_to_menu_button.h);
    ctx.closePath();

    if(end_game_message=="Win"){
      ctx.beginPath();
      //ctx.rect(next_level_button.x, next_level_button.y , next_level_button.w, next_level_button.h);
      //ctx.fillStyle = "blue";
      //ctx.fill();
        ctx.drawImage(next_level_button_image, next_level_button.x, next_level_button.y , next_level_button.w, next_level_button.h);
      ctx.closePath();
    }

    ctx.font = "16px Arial";
    ctx.fillStyle = "black";

    ctx.fillText("Play Again", play_again_button.x+play_again_button.w/20, play_again_button.y+play_again_button.h/1.5);
    ctx.fillText("Go to Menu", go_to_menu_button.x+go_to_menu_button.w/20, go_to_menu_button.y+go_to_menu_button.h/1.5);
    if(end_game_message=="Win"){
      ctx.fillText("Next level", next_level_button.x+next_level_button.w/20, next_level_button.y+next_level_button.h/1.5);
    }
    ctx.fillText("Score - "+localStorage.getItem("wynik"), go_to_menu_button.x+go_to_menu_button.w/20, go_to_menu_button.y+go_to_menu_button.h/1.5+100);


    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(end_game_message, canvas.width/2 - 50, canvas.height/10);
}

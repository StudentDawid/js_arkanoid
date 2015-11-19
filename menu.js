function drawMenu() {

    //ctx.beginPath();
    //ctx.rect(0, 0, canvas.width, canvas.height);
    //ctx.fillStyle = "#0095DD";
    //ctx.fill();
    //ctx.closePath();

    //ctx.beginPath();
    //ctx.drawImage(menuImageObject, 0, 0, canvas.width, canvas.height);
    //ctx.closePath();

    ctx.beginPath();
    ctx.rect(menu_button_1.x, menu_button_1.y , menu_button_1.w, menu_button_1.h);
    ctx.fillStyle = "#83E593";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(menu_button_2.x, menu_button_2.y , menu_button_2.w, menu_button_2.h);
    ctx.fillStyle = "#83E593";
    ctx.fill();
    ctx.closePath();

    ctx.font = "180px 'Arka_solid' Arial";
    ctx.fillStyle = "#83E593";
    ctx.fillText("ARKANOID", 50, 200);

    ctx.font = "16px 'Arka_solid' Arial";
	ctx.fillStyle = "black";
	ctx.fillText("NEW GAME", menu_button_1.x+menu_button_1.w/20, menu_button_1.y+menu_button_1.h/1.5);

    ctx.font = "16px 'Arka_solid' Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Leaderboard", menu_button_2.x+menu_button_2.w/20, menu_button_2.y+menu_button_2.h/1.5);
}

function drawWinMenu() {
    ctx.beginPath();
    //ctx.drawImage(play_again_button_image, play_again_button.x, play_again_button.y , play_again_button.w, play_again_button.h);
    ctx.rect(play_again_button.x, play_again_button.y , play_again_button.w, play_again_button.h);
    ctx.fillStyle = "#83E593";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(go_to_menu_button.x, go_to_menu_button.y , go_to_menu_button.w, go_to_menu_button.h);
    ctx.fillStyle = "#83E593";
    ctx.fill();
    ctx.closePath();

    if(end_game_message=="Win"){
        ctx.rect(next_level_button.x, next_level_button.y , next_level_button.w, next_level_button.h);
        ctx.fillStyle = "#83E593";
        ctx.fill();
      ctx.closePath();
    }

    ctx.font = "16px 'Arka_solid' Arial";
    ctx.fillStyle = "black";

    ctx.fillText("Play Again", play_again_button.x+play_again_button.w/20, play_again_button.y+play_again_button.h/1.5);
    ctx.fillText("Go to Menu", go_to_menu_button.x+go_to_menu_button.w/20, go_to_menu_button.y+go_to_menu_button.h/1.5);
    if(end_game_message=="Win"){
      ctx.fillText("Next level", next_level_button.x+next_level_button.w/20, next_level_button.y+next_level_button.h/1.5);
    }
    //ctx.fillText("Score - "+localStorage.getItem("wynik"), go_to_menu_button.x+go_to_menu_button.w/20, go_to_menu_button.y+go_to_menu_button.h/1.5+100);


    ctx.font = "20px 'Arka_solid' Arial";
    ctx.fillStyle = "red";
    ctx.fillText(end_game_message, canvas.width/2 - 50, canvas.height/10);
}

function drawLeaderboard() {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(leaderboard_go_to_menu_button.x, leaderboard_go_to_menu_button.y , leaderboard_go_to_menu_button.w, leaderboard_go_to_menu_button.h);
    ctx.fillStyle = "#83E593";
    ctx.fill();
    ctx.closePath();

    ctx.font = "16px 'Arka_solid' Arial";
    ctx.fillStyle = "black";
    ctx.fillText("     MENU", leaderboard_go_to_menu_button.x+leaderboard_go_to_menu_button.w/20, leaderboard_go_to_menu_button.y+leaderboard_go_to_menu_button.h/1.5);

    //wynik_tmp = localStorage.getItem("wynik");
    wynik_tmp = JSON.parse(localStorage["wynik"]);
    console.log('wynik start - '+wynik_tmp.length);
    for(var i=0;i<wynik_tmp.length;i++){
        console.log(wynik_tmp[i]);
    }
    console.log('wynik stop');
}
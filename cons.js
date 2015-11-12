var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var menuImageObject = new Image();
menuImageObject.src = "img/arkanoid.png";
canvas.width = window.innerWidth * 0.5;
canvas.height = window.innerHeight*0.75;

var myAudio = new Audio('tetris_theme.mp3');
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();

var wynik_tmp;
var wynik = [];
localStorage["wynik"] = JSON.stringify(wynik);

var newGame = 1; // 0 - new game, 1-menu, 2-menu po grze, 3 - leaderboard,
var mouseClickX = 0;
var mouseClickY = 0;

var score = 0;
var score_multipler =1;
var extra_speed_from_level=0;
var lives = 3;

var destroyed_balls = 0;

var end_game_message = "";

var menu_button_1 = {
    x: canvas.width/2 - 55,
    y: 80,
    w: 100,
    h: 30
};

var menu_button_2 = {
    x: canvas.width/2 - 55,
    y: 120,
    w: 100,
    h: 30
};

var play_again_button = {
    x: canvas.width/2 - 55,
    y: 80,
    w: 100,
    h: 30
};

var go_to_menu_button = {
    x: canvas.width/2 - 55,
    y: 120,
    w: 100,
    h: 30
};

var leaderboard_go_to_menu_button = {
    x: canvas.width/2 - 55,
    y: canvas.height - 50,
    w: 100,
    h: 30
};

var next_level_button = {
    x: canvas.width/2 - 55,
    y: 160,
    w: 100,
    h: 30
};

var menu_button_1_image = new Image();
menu_button_1_image.src = "img/button.png";

var menu_button_2_image = new Image();
menu_button_2_image.src = "img/button.png";

var play_again_button_image = new Image();
play_again_button_image.src = "img/button.png";

var go_to_menu_button_image = new Image();
go_to_menu_button_image.src = "img/button.png";

var next_level_button_image = new Image();
next_level_button_image.src = "img/button.png";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var leaderboard_go_to_menu_button_image = new Image();
leaderboard_go_to_menu_button_image.src = "img/button.png";

function getMousePos(e) {
    var r = canvas.getBoundingClientRect();
    return {
        x: e.clientX - r.left,
        y: e.clientY - r.top
    };
}

function setScore(score){
    wynik_tmp = JSON.parse(localStorage["wynik"]);
    console.log('koniec - '+wynik_tmp);
    wynik_tmp.push(score);
    localStorage["wynik"] = JSON.stringify(wynik_tmp);
}
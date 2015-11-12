var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// canvas.style.width='100%';
// canvas.style.height='400px';
// canvas.width = canvas.offsetWidth;
// canvas.height = canvas.offsetHeight;

var menuImageObject = new Image();
menuImageObject.src = "img/arkanoid.png";
//menuImageObject.onload = function() {
//    ctx.drawImage(this, 0, 0);
//};
canvas.width = window.innerWidth * 0.5;
canvas.height = window.innerHeight*0.75;

// var audio = new Audio('tetris_theme.mp3');
// audio.play();

var myAudio = new Audio('tetris_theme.mp3');
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();

var newGame = 1;
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

var next_level_button = {
    x: canvas.width/2 - 55,
    y: 160,
    w: 100,
    h: 30
};

var menu_button_1_image = new Image();
menu_button_1_image.src = "img/button.png";

var play_again_button_image = new Image();
play_again_button_image.src = "img/button.png";

var go_to_menu_button_image = new Image();
go_to_menu_button_image.src = "img/button.png";

var next_level_button_image = new Image();
next_level_button_image.src = "img/button.png";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMousePos(e) {
    var r = canvas.getBoundingClientRect();
    return {
        x: e.clientX - r.left,
        y: e.clientY - r.top
    };
}

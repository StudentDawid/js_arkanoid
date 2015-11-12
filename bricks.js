var bricks = [];

var brickRowCount = 5;
var brickColumnCount =5;

var brickRowPadding = canvas.width / (brickRowCount * 5);
var brickColumnPadding = canvas.height / (brickColumnCount * 10);

var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var brickWidth = (canvas.width - ((brickRowCount + 1) * brickRowPadding)) / brickRowCount;
var brickHeight = ((canvas.height / 2) - ((brickColumnCount + 1) * brickColumnPadding)) / brickColumnCount;


function initBricks() {
  if(score_multipler==1){
    score = 0;
  }
	for (var c = 0; c < brickColumnCount; c++) {
		bricks[c] = [];
		for (var r = 0; r < brickRowCount; r++) {
			var tmp = getRandomInt(1, 6);
			bricks[c][r] = {
				x: (r + 1) * brickRowPadding + (r * brickWidth),
				y: (c + 1) * brickColumnPadding + (c * brickHeight),
				status: 1,
				score_point: tmp,
				color_int: tmp,
				bonus_int: getRandomInt(1, 9)
			};
		}
	}
}


function drawBricks() {
    for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                ctx.beginPath();
                ctx.rect(b.x, b.y, brickWidth, brickHeight);
                switch (b.color_int) {
                    case 1:
                        ctx.fillStyle = "#66FF66 ";
                        break;
                    case 2:
                        ctx.fillStyle = "#33CC33";
                        break;
                    case 3:
                        ctx.fillStyle = "#009933";
                        break;
                    case 4:
                        ctx.fillStyle = "#003300";
                        break;
                    case 5:
                        ctx.fillStyle = "#336600";
                        break;
                    default:
                        ctx.fillStyle = "#333300";
                }
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

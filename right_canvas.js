function drawRightMenu() {
    ctx3.beginPath();
    ctx3.rect(0, 0, canvas3.width, canvas3.height);
    //ctx3.fillStyle = "#143A17";
    ctx3.fillStyle = "black";
    ctx3.fill();
    ctx3.closePath();

    ctx3.beginPath();
    ctx3.rect(0, 0, 10, canvas2.height);
    ctx3.fillStyle = "#83E593";
    ctx3.fill();
    ctx3.closePath();
}
function drawLeftMenu() {
    ctx2.beginPath();
    ctx2.rect(0, 0, canvas2.width, canvas2.height);
    //ctx2.fillStyle = "#143A17";
    ctx2.fillStyle = "black";
    ctx2.fill();
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.rect(canvas2.width-10, 0, 10, canvas2.height);
    ctx2.fillStyle = "#83E593";
    ctx2.fill();
    ctx2.closePath();
}
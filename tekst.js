function drawScore() {
	ctx2.font = "16px 'Arka_solid'";
	ctx2.fillStyle = "#83E593";
	ctx2.fillText("Score: "+score, 8, 20);
	//ctx2.fillText("Score multipler: "+score_multipler, 8, 40);

}

function drawLives() {
	ctx3.font = "16px 'Arka_solid'";
	ctx3.fillStyle = "#83E593";
	ctx3.fillText("Lives: "+lives, 18, 20);
}

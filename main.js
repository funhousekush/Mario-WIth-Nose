NoseX = "";
NoseY = "";
function preload() {
	world_start = loadSound("world_start.wav");
	Mario_die = loadSound("mariodie.wav");
	Gameover = loadSound("gameover.wav");
	Mario_jump = loadSound("jump.wav");
	Mario_Coin = loadSound("coin.wav");
	Mario_kill = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("Gamer_div");

	video = createCapture(VIDEO);
	video.size(600, 300);
	video.parent("Console_div");

	poseNet = ml5.poseNet(video , modelLoaded);
	poseNet.on('pose' , gotResults);
}
function modelLoaded()
{
	console.log("Model has loaded :)");
}

function gotResults(results, error)
{
	if(results<= 0)
	{
		console.error(error);
	}
	else
	{
		console.log(results);
        NoseX = results[0].pose.nose.x;
		NoseY = results[0].pose.nose.y;
		console.log("Nose's X Position = " + NoseX + " ; " + "Nose's Y Position = " + NoseY + " ;");
	}
}

function draw() {
	game();
}







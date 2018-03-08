var game = new Phaser.Game (800, 600, Phaser.AUTO, '', {preload:preload, create:create, update:updates})


var life = 3;
var score = 0;

function preload(){
	game.load.image("sky", "assets/sky.png", );
	game.load.image("ground", "assets/platform.png", );
	game.load.image("star", "assets/star.png", );
	game.load.spritesheet("dude", "assets/dude.png", 32, 48);
	game.load.spritesheet("baddie", "assets/baddie.png", 32, 32);
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//create the sky
	game.add.sprite(0, 0, "sky");

	//create a group of platform
	var platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	//create the ground
	var ground = platforms.create(0, 550, "ground")
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;

	//create the ledge
	var ledge = platforms.create(-100, 250, "ground");
	ledge.body.immovable = true;
	ledge = platforms.create(400, 400, "ground");
	ledge.body.immovable = true;

	//set text style
	var style = {font:"bold 32px Arial", fill:"#fff"};

	//adding the score
	var scorelabel = game.add.text(300, 560, "SCORE:", style);
	var scoretext = game.add.text(420, 560, score, style);

	//add the lives
	var lifelabel = game.add.text(10, 5, "LIFE: ", style);
	var lifetext = game.add.text(120, 5, score, style);

	//add the dude
	var player = game.add.sprite(20, 400,"dude");

	player.animation.add("left", [0, 1, 2, 3], 10, true);
	player.animation.add("right", [4, 5, 6, 7], 10, true);
	game.physics.arcade.enable(player);
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;

	//add the baddie
	var baddie = game.add.sprite(760, 20,"baddie");

	baddie.animation.add("left", [0, 1], 10, true);
	baddie.animation.add("right", [2, 3], 10, true);
	game.physics.arcade.enable(player);
	baddie.body.bounce.y = 0.2;
	baddie.body.gravity.y = 500;
	baddie.body.collideWorldBounds = true;

	//add the stars
	var stars = game.add.physicsGroup();
	stars.enableBody = true;

	for (var i = 0; i < 12; i++){
		var star = stars.create(i * 70, 0, "star");
		star.body.gravity.y = 200;
		star.body.bounce.y = 0.7 + Math.random() * 0.2;
	}


	//create keyboard entries
	cursors = game.input.keyboard.createCursorKeys();
}

function update(){

	game.physics.arcade.collide(player, stars);
	game.physics.arcade.collide(baddie, platforms);
	game.physics.arcade.collide(player, platforms);

	player.body.velocity.x = 0;

	if (cursors.left.isDown){
		player.animation.play('left');
		player.body.velocity.x = -150;
	}	else if (cursors.right.isDown){
		player.animation.play('right');
		player.body.velocity.x = 150;
	}	else {
		player.animations.stop();
		player.fame = 4;
	}
	if (cursors.up.isDown && player.body.touching.down){
		player.body.velocity.y = -300;
	}

	game.physics.arcade.overlap(player,stars,collectStar);
	game.physics.arcade.overlap(player, baddie, loseLife);

	moveBaddie();

	if (life <= 0){
		endGame();
	}
}

function endGame(){
	player.kill();
	scoreLbel.text = "Game Over! Your score is" + score;
	scoretext.visible = false;
	lifelabel.visible = false;
	lifetext.visible = false;
}

function moveBaddie(){
	if (baddie.x  > 759){
		baddie.animations.play("left");
		baddie.body.velocity.x = - 120;
	}	else if (baddie.x < 405){
		baddie.animations.play("right");
		baddie.body.velocity.x = - 120;
	}
	
function collectStar(player,star){
	score +=1;
	star.kill();

	scoretext.setText(score);
	star.reset(Math.random()*750, 0);
}

function loselife(player, baddie){
	lives -=1;
	lifetext.setText(lives);

	baddie.kill();
	baddie.reset(10,20);
}

}


let board;
let boardWidth = 600;
let boardHeight = 700;
let context;

//game physics
//for hero
let velocityX = 0; //moving on x axis
let moveRateX = 20;
let velocityY = 0;
let maxMoveToLeft = 80;
let maxMoveToRight = 460;
let maxMoveToTop = 0;
let maxMoveToBottom = 590;
let bulletTimer = 10;

//for enemy
let minEnemyVelocityY = 2;
let maxEnemyVelocityY = 10;

//spawn time of enemy
let spawnTime = 2000;
let spawnBarrierTime = 5000;
let spawnBonusTime = 9000;
let gameOver = false;
var score = 0;
let healthBar = 3;
let maxHealthBar = 3;
let life = 2;
let bulletWidth = 50;
let bulletHeight = 20;
let bulletFireSpeed = 5;
let fireBullet = false;
let bulletPosition;
let bulletReloadingTime = 1500;
let highestScorer;
let highestScore;
//audio
let startGameAudio = true;
let carsCollision = false;
let bulletAndCarCollision = false;
let heartImg;
let gameLogoImg;
let explosionImg;
let spawnTimeDec = 0;
let spawnBarrierTimeDec =0;
let spawnBonusTimeInc = 0;

// barrier
let barrierArray = [];
let barrierX = 0;
let barrierY = 0;
let barrierImg;
let barrierWidth = 100;
let barrierHeight = 60;

// Power Up or bonus
let bonusArray = [];
let bonusX = 80;
let bonusY = 0;
let bonusImg;
let bonusWidth = 50;
let bonusHeight = 50;
let powerUp = ["life", "relodingSpeed", "bonusPoint"];

//background image
let backgroundImg;
let backgroundImgX = 0;
let backgroundImgY = 0;
let moveRateOfBackground = 1;
let offsetY = 0;
let moveBackground = {
  x: backgroundImgX,
  y: backgroundImgY,
  width: boardWidth,
  height: boardHeight,
};

//enemy car position
let randomPosition = [80, 155, 235, 310, 390, 465];
let randomPosition2 = [135, 215, 285, 370];
//Bullet position and hero car position need to be same
let bulletArray = [];

//Hero Car position
let heroCarImg;
let heroCarWidth = 80;
let heroCarHeight = 110;
let heroCarX = boardWidth / 2;
let heroCarY = boardHeight - 110;

let hero = {
  x: heroCarX,
  y: heroCarY,
  width: heroCarWidth,
  height: heroCarHeight,
};
// arrow image variable
let topImg, bottomImg, rightImg, leftImg;

//enemy car
let enemyCarArray = [];
let enemyCarWidth = 60;
let enemyCarHeight = 110;
let enemyCarX = 80;
let enemyCarY = 0;

let enemyCarImg;

var path = "../images/",
  files = ["EnemyCar1.png", "EnemyCar2.png", "EnemyCar3.png"];

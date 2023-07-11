//------------------------------------------------------
window.onload = function () {
  //load background
  backgroundImg = new Image();
  backgroundImg.src = "../images/backgroundImage.jpg";
  backgroundImg.onload = function () {
    context.drawImage(backgroundImg, moveBackground.x, moveBackground.y, boardWidth, boardHeight);

    context.fillStyle = "White";
    context.font = "BOLD 70px sans-serif";
    context.fillText(`ROAD`, boardWidth / 9, boardHeight / 2 - 100);
    context.fillText(`RACER`, boardWidth / 2.1, boardHeight / 2 - 100);

    context.font = "bold 20px sans-serif";
    context.fillText("Movement", boardWidth / 7, boardHeight / 1.2);
    context.fillText("Fire", boardWidth / 7, boardHeight / 1.04);
    context.fillText("Develop By", boardWidth / 1.5, boardHeight / 1.2);
    context.fillText("Faculty", boardWidth / 1.5, boardHeight / 1.04);
    document.addEventListener("keydown", moveCar);

    context.fillText("Roshan", boardWidth / 1.5, boardHeight / 1.14);
    context.fillText("Dumaru", boardWidth / 1.5, boardHeight / 1.1);
    context.fillText("W", boardWidth / 5, boardHeight / 1.14);
    context.fillText("A", boardWidth / 6, boardHeight / 1.1);
    context.fillText("S", boardWidth / 4.9, boardHeight / 1.1);
    context.fillText("D", boardWidth / 4.2, boardHeight / 1.1);
    context.fillText("H", boardWidth / 4.2, boardHeight / 1.04);
    context.fillText("ROR", boardWidth / 1.25, boardHeight / 1.04);

    context.font = "80px sans-serif";
    context.fillText("Play", boardWidth / 2.6, boardHeight / 1.5);
    context.font = "20px sans-serif";
    context.fillText(
      "Press Enter To Start",
      boardWidth / 2.8,
      boardHeight / 1.35
    );
  };

  //retrive highest scorer
  highestScorer = localStorage.getItem("player");
  highestScore = localStorage.getItem("score");
  if (highestScorer == null) {
    highestScorer = "None";
    highestScore = 0;
  }
  console.log(highestScore, highestScorer);

  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d");

  //load hero car image
  heroCarImg = new Image();
  heroCarImg.src = "../images/HeroCar1.png";
  heroCarImg.onload = function () {
    context.drawImage(heroCarImg, hero.x, hero.y, hero.width, hero.height);
  };

  // loading bullet
  bulletImg = new Image();
  bulletImg.src = "../images/bullet.png";

  //load heart image
  heartImg = new Image();
  heartImg.src = "../images/heart.png";

  //load game logo
  gameLogoImg = new Image();
  gameLogoImg.src = "../images/fevicon.png";

  //load explosion image
  explosionImg = new Image();
  explosionImg.src = "../images/explosion.png";


  //movement arrow
  topImg = new Image();
  topImg.src = "../images/top.png";
  topImg.onload = function () {
    context.drawImage(topImg, boardWidth / 3, boardHeight / 1.17, 20, 20);
  };

  bottomImg = new Image();
  bottomImg.src = "../images/bottom.png";
  bottomImg.onload = function () {
    context.drawImage(bottomImg, boardWidth / 3, boardHeight / 1.13, 20, 20);
  };
  rightImg = new Image();
  rightImg.src = "../images/right.png";
  rightImg.onload = function () {
    context.drawImage(rightImg, boardWidth / 2.7, boardHeight / 1.13, 20, 20);
  };
  leftImg = new Image();
  leftImg.src = "../images/left.png";
  leftImg.onload = function () {
    context.drawImage(leftImg, boardWidth / 3.4, boardHeight / 1.13, 20, 20);
  };

  gameLogoImg.onload = function () {
    context.drawImage(gameLogoImg, boardWidth / 3, boardHeight / 2.4, 250, 100);
  };
};

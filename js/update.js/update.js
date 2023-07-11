async function update() {
  //update new frame
  requestAnimationFrame(update);

  if (gameOver) {
    return;
  }
  

  //clear pervious frame
  context.clearRect(0, 0, board.width, board.height);

  offsetY += moveRateOfBackground;
  if (offsetY >= boardHeight) {
    offsetY = 0;
  }

  context.drawImage(backgroundImg, 0, offsetY, boardWidth, boardHeight);
  context.drawImage(
    backgroundImg,
    0,
    offsetY - boardHeight,
    boardWidth,
    boardHeight
  );


//health logic
  for (let m = 0; m < healthBar; m++) {
    context.fillStyle = "Green";
    context.fillRect(boardWidth / 1.8 - 40 * m, 60, 35, 20);
  }

  for (let m = 0; m <= life; m++) {
    context.drawImage(heartImg, boardWidth / 1.2 - 40 * m, 60, 35, 20);
  }

  // score and health info // put in display function
  context.fillStyle = "Black";
  context.font = "30px sans-serif";
  context.fillText(`Score : ${score}`, 80, 80);

  //Highest Scorer and Score
  context.fillStyle = "Blue";
  context.font = "Bold 22px sans-serif";
  context.fillText(`Top Player : ${highestScorer}`, 80, 40);
  context.fillText(`Highest Score : ${highestScore}`, boardWidth / 2 + 20, 40);

  //Hero car
  hero.x = Math.max(hero.x + velocityX, 0);
  hero.y = Math.max(hero.y + velocityY, 0);
  context.drawImage(heroCarImg, hero.x, hero.y, hero.width, hero.height);
  velocityX = 0;
  velocityY = 0;

  // var k = Math.floor(Math.random()*randomPosition.length);
  // let randombarrierX = parseInt(randomPosition[k]);

  // context.drawImage(barrierImg,randombarrierX , offsetY*10, barrier.width, barrier.height);
    // loading bonus
    bonusImg = new Image();
    bonusImg.src = "../images/bonus.png";
    for (let p = 0; p < bonusArray.length; p++) {
      let bonusObj = bonusArray[p];
      bonusObj.y += 2;
     
      context.drawImage(
        bonusObj.img,
        bonusObj.x,
        bonusObj.y,
        bonusObj.width,
        bonusObj.height
      );
  
      if (detectCollision(hero, bonusObj)) {
        bonusCollision = true;
        var i = Math.floor(Math.random()*powerUp.length);
        if (i == 0 ){
          console.log("10 Bonus point has been added");
          score +=10;
        }
        if( i == 1){
          console.log("bullet reloding time :",bulletReloadingTime);
          if (bulletReloadingTime > 500)
          {bulletReloadingTime -= 100;}        
        }
        if( i == 2 ){
          console.log("health Bar", healthBar);
          if (healthBar < 3){
            healthBar += 1;
          }
        }
        bonusArray.splice([p], 1);
      }
    }

  // loading barrier
  barrierImg = new Image();
  barrierImg.src = "../images/barrier1.png";
  for (let j = 0; j < barrierArray.length; j++) {
    let barrierObj = barrierArray[j];
    barrierObj.y += 1;
   
    context.drawImage(
      barrierObj.img,
      barrierObj.x,
      barrierObj.y,
      barrierObj.width,
      barrierObj.height
    );

    if (detectCollision(hero, barrierObj)) {
      barrierCollision = true;
      context.drawImage(
        explosionImg,
        barrierObj.x + 10,
        barrierObj.y + 20,
        60,
        60
      );
      playAudio();
      healthBar -= 1;
      if (healthBar == 0) {
        if (life == 0) {
          gameOver = true;
        } else {
          life -= 1;
          healthBar = maxHealthBar;
        }
      }

      barrierArray.splice([i], 1);
    }
  }

  //enemy car
  // load enemy's cars

  var i = Math.floor(Math.random() * files.length);
  var url = path + files[i];
  enemyCarImg = new Image();
  enemyCarImg.src = url;

  for (let i = 0; i < enemyCarArray.length; i++) {
    let enemyCar = enemyCarArray[i];

    enemyCar.y += minEnemyVelocityY;
    context.drawImage(
      enemyCar.img,
      enemyCar.x,
      enemyCar.y,
      enemyCar.width,
      enemyCar.height
    );

    if (detectCollision(hero, enemyCar)) {
      carsCollision = true;
      context.drawImage(explosionImg, enemyCar.x + 10, enemyCar.y + 20, 60, 60);
      playAudio();
      healthBar -= 1;
      enemyCarArray.splice([i], 1);

      if (healthBar == 0) {
        if (life == 0) {
          gameOver = true;
        } else {
          life -= 1;
          healthBar = maxHealthBar;
        }
      }
    }

    //bullet
    if (fireBullet) {
      playAudio();

      fireBullet = false;
      let bullet = {
        x: hero.x + 12,
        y: hero.y - 10,
        width: bulletWidth,
        height: bulletHeight,
      };
      bulletArray.push(bullet);
      context.drawImage(bulletImg, hero.x, hero.y, bullet.width, bullet.height);
    }
    if (bulletArray) {
      for (let l = 0; l < bulletArray.length; l++) {
        bulletPosition = bulletArray[l];
        bulletPosition.y -= bulletFireSpeed;
        context.drawImage(
          bulletImg,
          bulletPosition.x,
          bulletPosition.y,
          bulletPosition.width,
          bulletPosition.height
        );

        if (detectCollision(bulletPosition, enemyCar)) {
          bulletAndCarCollision = true;
          context.drawImage(
            explosionImg,
            enemyCar.x + 10,
            enemyCar.y + 20,
            60,
            60
          );
          playAudio();
          score += 1;
          bulletArray.splice([l], 1);
          enemyCarArray.splice([i], 1);
        }
      }
    }
  }
  //clearing bullet after it passes the top frame
  while (bulletArray.length > 0 && bulletArray[0].y <= 0) {
    bulletArray.shift();
  }

  //clearing enemy car after it passes the bottom frame
  while (enemyCarArray.length > 0 && enemyCarArray[0].y >= boardHeight) {
    enemyCarArray.shift();
  }

  //clearing bullet after it passes the top frame
  while (barrierArray.length > 0 && barrierArray[0].y >= boardHeight) {
    barrierArray.shift();
  }
  
  //clearing bullet after it passes the top frame
  while (bonusArray.length > 0 && bonusArray[0].y >= boardHeight) {
    bonusArray.shift();
  }

  if (gameOver) {
    context.fillStyle = "White";
    context.font = "40px sans-serif";
    context.fillText(
      `Your Score : ${score}`,
      boardWidth / 4 + 10,
      boardHeight / 2 - 100
    );
    context.font = "80px sans-serif";
    context.fillText("Game Over", boardWidth / 4 - 50, boardHeight / 2);
    // requesting player name
    setTimeout(() => {
      let player = prompt("Please enter your name");
      if (player != null && highestScore < score) {
        // Store
        localStorage.setItem("player", player);
        localStorage.setItem("score", score);
      }
    }, 1000);

    context.fillStyle = "White";
    context.font = "30px sans-serif";
    context.fillText("Home", boardWidth / 2.3, boardHeight / 1.8);
    context.font = "15px sans-serif";
    context.fillText("Press Esc to Home", boardWidth / 2.5, boardHeight / 1.7);
  }
  

  carsCollision = false;
  bulletAndCarCollision = false;
  barrierCollision = false;
  bonusCollision = false;
}

function countdown() {
  timeleft = bulletReloadingTime; // time in seconds
  console.log("timeleft :",timeleft);
  var downloadTimer = setInterval(function () {
    timeleft--;
    if (timeleft <= 0) clearInterval(downloadTimer);
  }, 1000);
  return true;
}

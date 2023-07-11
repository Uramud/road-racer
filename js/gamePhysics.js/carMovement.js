var enable = true;
function moveCar(e) {
  if (e.keyCode == 37 || e.keyCode == 65) {
    if (hero.x >= maxMoveToLeft) {
      velocityX += -moveRateX;
    }
  }

  // 'right arrow' and 'D'
  if (e.keyCode == 39 || e.keyCode == 68) {
    if (hero.x < maxMoveToRight) {
      velocityX += moveRateX;
    }
  }

  // 'top arrow' and 'W'
  if (e.keyCode == 38 || e.keyCode == 87) {
    if (hero.y >= maxMoveToTop) {
      velocityY += -moveRateX;
    }
  }

  // 'bottom arrow' and 'D'
  if (e.keyCode == 40 || e.keyCode == 83) {
    if (hero.y < maxMoveToBottom) {
      velocityY += moveRateX;
    }
  }

  if (e.keyCode == 27) {
    location.reload();
  }

  if (e.keyCode == 72 || (e.keyCode == 32 && enable)) {
    console.log(enable);
    enable = false;
    fireBullet = true;
    setTimeout(function () {
      enable = true;
    }, bulletReloadingTime);
  }
  if (e.keyCode == 13) {
    if (startGameAudio == true) {
      playAudio();

      setInterval(spawnEnemyCars, spawnTime - spawnTimeDec);
      setInterval(spawnBarrier, spawnBarrierTime - spawnBarrierTimeDec);
      setInterval(spawnBonus, spawnBonusTime + spawnBonusTimeInc);
      
      requestAnimationFrame(update);
      startGameAudio = false;
    }
  }
}

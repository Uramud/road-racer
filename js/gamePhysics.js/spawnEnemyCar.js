function spawnEnemyCars(){
    var i = Math.floor(Math.random()*randomPosition.length);
    let randomEnemyCarX = parseInt(randomPosition[i]);
    
    // console.log(i);
    let enemy = {
      img : enemyCarImg,
      x : randomEnemyCarX,
      y : enemyCarY,
      width : enemyCarWidth,
      height : enemyCarHeight,
    }
    
    enemyCarArray.push(enemy);
  }

  function spawnBarrier(){
    var i = Math.floor(Math.random()*randomPosition2.length);
    let randomEnemyCarX = parseInt(randomPosition2[i]);
  
    // console.log("Barrier");
    let barrier ={
      img: barrierImg,
      x: randomEnemyCarX,
      y: barrierY,
      width: barrierWidth,
      height: barrierHeight,
    }
    // console.log(barrier.img);
    barrierArray.push(barrier);
  }


  function spawnBonus(){
    var i = Math.floor(Math.random()*randomPosition2.length);
    let randomEnemyCarX = parseInt(randomPosition2[i]);
  
    let bonus ={
      img: bonusImg,
      x: randomEnemyCarX,
      y: bonusY,
      width: bonusWidth,
      height: bonusHeight,
    }
    bonusArray.push(bonus);
  }

    
    


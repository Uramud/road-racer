function playAudio(){
    if (fireBullet == true){
      var audio = new Audio("./sound/9mm-pistol-shot-6349.mp3");
      // audio.volume =0.2;
    audio.play();
    }
    if (carsCollision == true){
      var audio = new Audio("./sound/crash-7075.mp3");
    audio.play();
    }
    if(bulletAndCarCollision == true){
      var audio = new Audio("./sound/hq-explosion-6288.mp3");
    audio.play();
    }
    if(startGameAudio == true){
      var audio = new Audio("./sound/car-engine-starting-43705.mp3");
    audio.play();
    }
  }
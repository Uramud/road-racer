function detectCollision(a, b) {
  if(a.img == "../images/barrier1.png" || b.x == "../images/barrier1.png"){
    console.log("its a barrier");
  }
  
    return (
      a.x < b.x + b.width -15 &&
      a.x + a.width -15 > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height -10 > b.y 
    );
  }
  
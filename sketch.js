function setup() {
    createCanvas(400, 400);
     background("PURPLE");
  }
  
  function draw() {
   
    fill(" rgb(158,22,22)");
    stroke("black");
    
    if(mouseIsPressed){
     rect(mouseX,mouseY,20,20);
  }
  }
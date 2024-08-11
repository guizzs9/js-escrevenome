function setup() {
    createCanvas(800, 400);
      background(4);
  }
  
  function draw() {
    
   stroke("white")
   fill("red");
   
   // console.log(mouseIsPressed);
    
   if(mouseIsPressed) {
      rect(mouseX, mouseY, 25, 25);
   } 
  }
  
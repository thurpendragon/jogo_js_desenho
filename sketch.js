function setup() {
  createCanvas(400, 540); background("rgb(25,117,141)");
}

function draw() {
  
  
  console.log(mouseIsPressed);
  
  if(mouseIsPressed){rect(mouseX, mouseY, 20, 20);
    
  }
  
  fill("rgb(207,38,117)");
  stroke("purple")
  
}



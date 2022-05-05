function setup() {
  let canvas = createCanvas(windowWidth, 500);
  canvas.id ("my-Beaver");
  beaver = new Beaver(0, 0);
 
}

function draw() {
  background("#89b4c4");
  push();
  translate(windowWidth/2, 250);
  beaver.display();
  beaver.update();
  beaver.drink();
  pop();
  
  
  Table();
  drink();
  
  
  console.log(mouseX, mouseY);
}


function Table() {
    translate(windowWidth/2 , 250);

     //table
    fill(100)
    rect(-150, 80, 300, 100 )
    
    //computer
    push();
    fill(90);
    rect(80, 20, 60, 40)
    rect(105, 30, 10, 50)
    pop();
    
    //books
    push();
    stroke("blue")
    fill(255)
    rect(-150, 70, 40, 10)
  stroke("red")
    fill(255)
    rect(-150, 60, 40, 10)
  stroke("green")
    fill(255)
    rect(-150, 50, 40, 10)
    pop();
  
  //keyboard
    fill(80)
    rect(-40, 70, 80, 10);
  
   
}

function drink() {
  if (mouseIsPressed) {
    if (mouseX <= windowWidth / 2 + 150 && mouseX >= windowWidth / 2 - 150) {
    let drinkY = map(sin(frameCount * 0.08), -1, 1, 40, 50)
    
    push();
    rectMode(CENTER)
    rect(0, drinkY -  24, 5, 10)
      fill(255)
    ellipse(0, drinkY - 10, 24, 20)
    fill("#12D2FA")
    rect(0, drinkY, 30, 30)
  translate(windowWidth / 2, 250);
    pop();  
  
  }
  }
    

  
  
}


class Beaver {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.rArm = [100, 140];
    this.lArm = [100, 140];
    
  }

  display() {
   
    
    
    //tail
    push();
    fill("#2E1810")
    rotate(PI/-4)
    ellipse(-80, 0, 55, 85)
    pop();
    
    //body
    beginShape();
    fill("#7D412C")
    ellipse(0, 60, 50, 60)
    endShape();
    
    
    
    push();
    //face
    beginShape();
    //ears
    fill("#2E1810");
    ellipse(-22, -35, 25, 25);
    ellipse(22, -35, 25, 25);
    //head
    fill("#7D412C");
    ellipse(0, 0, 80, 80);
    fill(0);
    endShape();

  

    beginShape();
    //eyes
   
 
    fill(0);
    ellipse(15, -10, 10, 8);
    fill(0);
    
    
    fill(0);
    ellipse(-15, -10, 10, 8);
    endShape();
    pop();
    //mouth
    fill(0)
    triangle(-8, 0, 8, 0, 0, 5)
    line(0, 6, 0, 10)
    curve(-15, 8, 0, 10, -15, 10, 0, 8)
    curve(15, 8, 0, 10, 15, 10, 0, 8)
    
    //teeth
    fill(255)
    quad(-10, 11, -10, 20, 0, 25, 0, 11)
    quad(10, 11, 10, 20, 0, 25, 0, 11)
    
    
  
    //left arm
    push();
    beginShape();
    strokeWeight(15);
    stroke("#4F291C")
    curveVertex(-30, 5);
    curveVertex(this.lArm[0], this.lArm[1]);
    curveVertex(-30, 50);
    curveVertex(-20, 50);
    endShape();
    pop();
    
    //right arm
    push();
    beginShape();
    strokeWeight(15);
    stroke("#4F291C")
    curveVertex(30, 5);
    curveVertex(this.rArm[0], this.rArm[1]);
    curveVertex(30, 50);
    curveVertex(20, 50);
    endShape();
    pop();
    
        
  
    
 translate(windowWidth / 2, 250); 
 
  }
  
  update() {
  
    this.rArm = [
      map(sin(frameCount * -0.05), -1, 1, 30, 29),
      map(sin(frameCount * -0.05), -1, 1, 20, 70),
    ];
    this.lArm = [
      map(sin(frameCount * 0.02), -1, 1, -30, -30),
      map(sin(frameCount * 0.05), -1, 1, 20, 70),
    ];
  }

 
  drink() {
      
    if (mouseIsPressed === true) {
      if (mouseX <= windowWidth / 2 + 150 && mouseX >= windowWidth / 2 - 150) {
        this.rArm = [
          map(sin(frameCount * 0.08), -1, 1, 20, 20),
          map(sin(frameCount * 0.08), -1, 1, 30, 50),
        ];
        this.lArm = [
          map(sin(frameCount * 0.08), -1, 1, -20, -20),
          map(sin(frameCount * 0.08), -1, 1, 30, 50),
        ];

  
      }
    }
        
  }
}

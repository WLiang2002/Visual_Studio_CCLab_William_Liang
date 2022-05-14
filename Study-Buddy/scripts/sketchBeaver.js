const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2;

let moti = [
  "You Got This!",
  "You're Doing Great!",
  "Keep Working Hard!",
  "You Can Do It!",
];
let index = 0;

function setup() {
  let canvas = createCanvas(windowWidth, 500);
  canvas.id ("my-Beaver");
  beaver = new Beaver(0, 0);

  c1 = color("#53A62D");
  c2 = color("#3cb9ff");

}

function draw() {
  push();
  setGradient(0, 0, windowWidth, windowHeight, c2, c1, X_AXIS);
  pop();

  push();
  translate(windowWidth / 2, 250);
  beaver.display();
  beaver.update();
  beaver.drink();
  pop();

  Table();
  drink();
  

  push();
  textSize(30)
  fill(255)
  text(moti[index], -110, 220);
  pop();
}

function drink() {
  if (mouseIsPressed) {
    if (
      mouseX <= windowWidth / 2 + 100 &&
      mouseX >= windowWidth / 2 - 100 &&
      mouseY >= 150 &&
      mouseY <= 400
    ) {
      let drinkY = map(sin(frameCount * 0.08), -1, 1, 40, 50);

      push();
      rectMode(CENTER);
      rect(0, drinkY - 24, 5, 10);
      fill(255);
      ellipse(0, drinkY - 10, 24, 20);
      fill("#12D2FA");
      rect(0, drinkY, 30, 30);
      translate(windowWidth / 2, 250);
      pop();

      
      push();
      fill(255)
      noStroke()
      ellipse(40, -50, 10, 10)
      ellipse(60, -70, 20, 20)
      ellipse(100, -140, 200, 100)
      translate(windowWidth / 2, 250);  
      pop();
     
      
      push();
      textSize(15);
      fill(0);
      text("Remember to keep ", 30, -145);
      text("yourself hydrated too!", 30, -125);
      pop();
      
    }
  }
}


function mousePressed() {
  if (
    mouseX <= windowWidth / 2 - 100 &&
    mouseX >= windowWidth / 2 - 150 &&
    mouseY >= 300 &&
    mouseY <= 350
  ) {
    index = floor(random(moti.length));

    if (index == moti.length) {
      index = 0;
    }
    
    
  }
}

/* // Wanted to make it so everytime you click it shows different index, but keeps switching when mouse is held down so didnt work
function Motivate () {     
  if (mouseIsPressed) {
if (
    mouseX <= windowWidth / 2 - 100 &&
    mouseX >= windowWidth / 2 - 150 &&
    mouseY >= 300 &&
    mouseY <= 350
  ) {
    index = floor(random(moti.length));

    if (index == moti.length) {
      index = 0;
    }
    text(moti[index], -200, -140);
    
    //translate(windowWidth / 2, 250);
  }
}

}
*/


function Table() {
  translate(windowWidth / 2, 250);

  //table
  fill(100);
  rect(-150, 80, 300, 100);

  //computer
  push();
  fill(90);
  rect(80, 20, 60, 40);
  rect(105, 30, 10, 50);
  pop();

  //books
  push();
  stroke("blue");
  fill(255);
  rect(-150, 70, 40, 10);
  stroke("red");
  fill(255);
  rect(-150, 60, 40, 10);
  stroke("green");
  fill(255);
  rect(-150, 50, 40, 10);
  pop();

  //keyboard
  fill(80);
  rect(-40, 70, 80, 10);
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
    fill("#2E1810");
    rotate(PI / -4);
    ellipse(-80, 0, 55, 85);
    pop();

    //body
    beginShape();
    fill("#7D412C");
    ellipse(0, 60, 50, 60);
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

      //eyes
      fill(255);
      ellipse(-16, -10, 20);
      ellipse(16, -10, 20);
    endShape();

    
    pop();
    //mouth
    fill(0);
    triangle(-8, 0, 8, 0, 0, 5);
    line(0, 6, 0, 10);
    curve(-15, 8, 0, 10, -15, 10, 0, 8);
    curve(15, 8, 0, 10, 15, 10, 0, 8);

    //teeth
    fill(255);
    quad(-10, 11, -10, 20, 0, 25, 0, 11);
    quad(10, 11, 10, 20, 0, 25, 0, 11);

    //left arm
    push();
    beginShape();
    strokeWeight(15);
    stroke("#4F291C");
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
    stroke("#4F291C");
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

        
    //eye movement
    push();
    let xc = constrain(mouseX - width/2, 10, 20);
    let xs = constrain(mouseY - height/2, -12, -8);
    let xc2 = constrain(mouseX - width/2, -20, -10);
   


    //eye 1
    fill(0);
    circle(xc - width/2 , xs - (height/2) ,10)
  
    //eye 2
    circle(xc2 - width/2 , xs - (height/2) ,10)

    
    pop();
    
    



  }

  drink() {
    if (mouseIsPressed === true) {
      if (
        mouseX <= windowWidth / 2 + 100 &&
        mouseX >= windowWidth / 2 - 100 &&
        mouseY >= 150 &&
        mouseY <= 400
      ) {
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


function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}


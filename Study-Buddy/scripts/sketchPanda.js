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
  canvas.id ("my-Panda");
  panda = new Panda(0, 0);

  c1 = color("#53A62D");
  c2 = color("#3cb9ff");

}

function draw() {
  push();
  setGradient(0, 0, windowWidth, windowHeight, c2, c1, X_AXIS);
  pop();

  push();
  translate(windowWidth / 2, 250);
  panda.display();
  panda.update();
  panda.drink();
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

class Panda {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.rArm = [100, 140];
    this.lArm = [100, 140];
    
  }

  display() {
   
    
    //body
    beginShape();
    fill(255)
    ellipse(0, 60, 50, 60)
    endShape();
    
    push();
    //face
    beginShape();
    //ears
    fill(0);
    ellipse(-22, -35, 35, 35);
    ellipse(22, -35, 35, 35);
    //head
    fill(255);
    ellipse(0, 0, 80, 80);
    fill(0);
    endShape();

  

    beginShape();
    //eyes
    rotate(PI / 4);
    ellipse(10, -15, 25, 18);
    fill(255);
    ellipse(13, -15, 10, 8);
    fill(0);
    rotate(PI / 2);
    ellipse(10, 15, 25, 18);
    fill(255);
    ellipse(13, 15, 10, 8);
    endShape();
    pop();
    //mouth
    fill(0)
    triangle(-3, 10, 3, 10, 0, 6)
    line(0, 6, 0, 18)
    //not done yet
    curve(-12, 20, 0, 18, -10, 18, 0, 20)
    curve(12, 20, 0, 18, 10, 18, 0, 20)
    
  
    //left arm
    push();
    beginShape();
    strokeWeight(15);
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
    curveVertex(30, 5);
    curveVertex(this.rArm[0], this.rArm[1]);
    curveVertex(30, 50);
    curveVertex(20, 50);
    endShape();
    pop();

    translate(windowWidth/2, 250);
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





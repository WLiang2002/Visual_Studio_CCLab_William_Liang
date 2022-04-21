let size = 1;
let x = 0;
let y = 0;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.id ("my-duck");
  background(20);
  speedX = random(-1, 1);
  speedY = random(-1, 1);
}

function draw() {
  background(20);

  x = x + random(-3, 3);
  y = y + random(-3, 3);
  
  push();
  translate(width / 2, height / 2);
  Duck(x , y , 1);
  pop();

  push();
  translate(mouseX, mouseY);
  Duck(1, 2, 2);
  pop();
}

function Duck(x, y, size) {
  push();
  scale(size);
  translate(x, y);

  //body
  fill("Brown");
  ellipse(0, 30, 60, 40);
  //beak
  fill("Yellow");
  triangle(20, 0, 20, -10, 40, 0);

  //head
  fill("Green");
  circle(10, 0, 30);

  //feet
  stroke("Yellow");
  line(20, 45, 30, 50);
  line(-20, 45, -30, 50);

  pop();
}

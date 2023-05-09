const pi = Math.PI;
let degree = 10;
let angle = 0;

const cWidth = 400;
const cHeight = 300;


function setup() {
  createCanvas(cWidth, cHeight).parent("fractal-tree-animation");
  angle = 0;
}

function draw() {
  background(0);
  degree = 1 + degree;
  angle = degree * (pi/180);
  if(degree >= 90){
    degree = -1*degree;
  }
  frameRate(30);
  stroke(255);
  strokeWeight(2);
  translate(width * 0.5, height);
  branch(height*0.25);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
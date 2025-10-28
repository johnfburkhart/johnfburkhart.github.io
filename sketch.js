/*
----- Coding Tutorial by Patt Vira ----- 
Name: Truchet Tiles (Contrasting Triangles)
Video Tutorial: https://youtu.be/9DU5WiNdu74?si=CXopbKgzoZXv5ct7

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

let tiles = []; 
let cols; let rows; let size = 20;
let colors; 

function windowResized() {
  resizeCanvas(windowWidth, document.body.scrollHeight);
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0,0)
  cnv.style('z-index', '-1')
  cnv.style('position', 'fixed');
  angleMode(DEGREES);
  colors = [color(255,240,1), color(255,1,1), color(1,1,253), color(249)];
  
  cols = width/size;
  rows = height/size;
  for (let i=0; i<cols; i++) {
    tiles[i] = [];
    for (let j=0; j<rows; j++) {
      tiles[i][j] = new Tile(i*size, j*size, floor(random(4)), colors[floor(random(4))]);
    }
  }
}

function draw() {
  background(220);
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      tiles[i][j].display();
    }
  }
  
}

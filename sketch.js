

function setup(){
  createCanvas(displayWidth,displayHeight,);
  background(random(255),random(255),random(255));
}
function draw(){
  rectMode(CORNER);
  rect(250,250,500,500);
  let circleX=map(mouseX,0,width,250,750);
  let circleY=map(mouseY,0,height,250,750);
  noStroke();
  insideSquare();
  ellipse(circleX,circleY,10,10);



}

function insideSquare(){
  for (let i=250;i<750; i++){
    for(let j=250;j<750;j++){
      stroke(random(75)+(i/2), random(100)+(i/3), random(150)+(i/4));
      line(i,j,i,j);
    }
  }
}
function mousePressed(){
  background(random(255),random(255),random(255));

}

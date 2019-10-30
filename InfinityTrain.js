let star=[];
theta=.5;

function setup(){
    createCanvas(displayWidth,displayHeight,WEBGL);
    //image(img,0,0);
    frameRate(30);//Lowers framrate for smoother movement

    for (i = 0; i < 1000; i++) {//Creates an array filled with Star objects
        star[i] = new Star();
      }
}

function draw(){
  background(0);
  for(i=0;i<1000;i+=1){
    push();
    star[i].display();
    star[i].update();
    pop();
  }
    for(i= -displayWidth+850;i<displayWidth-800;i+=70){
    push();
    translate(i,-100);
    rotateX(450);
    box(60,300,25);
    pop();


  }
}

function mouseClicked(){
  fill(0,255,0);
}



class Star {
  //Initialzes the values for the objects
  constructor(){
    translate(0,0);
    this.x=random(-displayWidth, displayWidth);
    this.y=random(-displayHeight, displayHeight);
    this.z=random(displayWidth)



  }
  display(){


        fill(255, 255, 230);
        noStroke();
        ellipseMode(CENTER);
        let circleSize=map(this.z,0,displayWidth,25,0);//Changes the size of the circle inverse to this.z value
        let circleX=map(this.x/this.z,0,1,0,displayWidth);//As this.z shrinks it shifts the x value towards the edge of the screen
        let circleY=map(this.y/this.z,0,1,0,displayHeight);//As this.z shrinks it shifts the y value towards the edge of the screen
        let a=map(circleSize,0,circleSize,0,255);//As circleSize increases, so does the opacity slightly
        fill(255,255,255,a);
        translate(circleX,circleY,);
        //rotateX(theta);
        //rotateY(theta);
        rotateZ(theta);
        ellipse(circleX, circleY, circleSize,circleSize);
        theta+=.000001;
}
  update(){
    this.z-=2.5;//Updates the Z value
    if(this.z<1){// Resets the Z value when it gets too small
      this.x=random(-displayWidth, displayWidth);
      this.y=random(-displayHeight, displayHeight);
      this.z=random(displayWidth);

    }



    }

    }
    /*
class Piano_Key{
  constructor(){

  }
}
*/

let star=[];
theta=.5;
let puzzle=[];


function setup(){
    createCanvas(displayWidth,displayHeight,WEBGL);
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
let KeyC=new PianoKey;

KeyC.mouseCheck();
KeyC.buildKey();
if (KeyC.mouseCheck()==true){
  KeyC.playKey();
  append(puzzle,'C1');
}

let KeyD= new PianoKey_D;

KeyD.mouseCheck();
KeyD.buildKey();
if (KeyD.mouseCheck()==true){
  KeyD.playKey();
  append(puzzle,'D')
}
let KeyE=new PianoKey_E;

KeyE.mouseCheck();
KeyE.buildKey();
if (KeyE.mouseCheck()==true){
  KeyE.playKey();
  append(puzzle,'E');
}

let KeyF=new PianoKey_F;

KeyF.mouseCheck();
KeyF.buildKey();
if (KeyF.mouseCheck()==true){
  KeyF.playKey();
  append(puzzle,'F');
}

let KeyG=new PianoKey_G;

KeyG.mouseCheck();
KeyG.buildKey();
if (KeyG.mouseCheck()==true){
  KeyG.playKey();
  append(puzzle,'G');
}
let KeyA=new PianoKey_A;

KeyA.mouseCheck();
KeyA.buildKey();
if (KeyA.mouseCheck()==true){
  KeyA.playKey();
  append(puzzle,'A');
}
let KeyB=new PianoKey_B;

KeyB.mouseCheck();
KeyB.buildKey();
if (KeyB.mouseCheck()==true){
  KeyB.playKey();
  append(puzzle,'B')
}
let KeyC_2=new PianoKey_C;

KeyC_2.mouseCheck();
KeyC_2.buildKey();
if (KeyC_2.mouseCheck()==true){
  KeyC_2.playKey();
  append(puzzle,'C2');


  }
  print(puzzle);
function keyTyped(){
  if (key === 'S'){
    KeyC.playKey();
    append(puzzle,'C1');
    print('hit')
  return false;
  }
  if (key ==='d'){
    KeyD.playKey();
    append(puzzle,'D');
  }
  if (key ==='f'){
    KeyE.playKey();
    append(puzzle,'E')
  }
  if (key ==='g'){
    KeyF.playKey();
    append(puzzle,'F');
  }
  if (key ==='h'){
    KeyG.playKey();
    append(puzzle,'G');
  }
  if (key ==='j'){
    KeyA.playKey();
    append(puzzle,'A');
  }
  if (key ==='k'){
    KeyB.playKey();
    append(puzzle,'B');
  }
  if (key ==='l'){
    KeyC_2.playKey();
    append(puzzle,'C2');
  }
}
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
class PianoKey{
  constructor(){
    this.x=-displayWidth+755;
    //this.x=mouseX;
    this.y=100;
    this.r=255;
    this.g=255;
    this.b=255;
    this.keyPressed=false;
  }
  buildKey(){
    push();
    fill(this.r,this.g,this.b);
    noStroke();
    rotateX(500);
    translate(this.x,this.y);
    box(80,450,30);
    pop();

  }
  mouseCheck(){
    let scaleX=this.x+750;
    if (mouseX>scaleX-50 && mouseX<scaleX+75 && mouseIsPressed){
      this.r=0;
      this.b=0;
      this.KeyPressed=true;
    return this.KeyPressed;
    }
  }
  playKey(){
    this.noteC=new p5.Oscillator();
    this.noteC.setType('sine');
    this.noteC.freq(261.6256);
    this.noteC.amp(0,1);
    this.noteC.start();
    this.noteC.stop(1);

  }
}

class PianoKey_D extends PianoKey{
  constructor(){
    super();
    this.KeyPressed_D=false;
  }
  buildKey(){
    this.x=this.x+200;
    super.buildKey();

  }
  mouseCheck(){
    let scaleX=287;
    if (mouseX>scaleX-50 && mouseX<scaleX+90 && mouseIsPressed){
      this.r=0;
      this.g=0;
      this.KeyPressed_D=true;
    }
    return this.KeyPressed_D;

  }
  playKey(){
    this.noteD=new p5.Oscillator();
    this.noteD.setType('sine');
    this.noteD.freq(293.6648);
    this.noteD.amp(0,1);
    this.noteD.start();
    this.noteD.stop(1);
    //print('hit');

  }

}


  class PianoKey_E extends PianoKey{
    constructor(){
      super();
      this.KeyPressed_E=false;
    }
    buildKey(){
      this.x=this.x+400;
      super.buildKey();
    }
    mouseCheck(){
      let scaleX=417;
      if (mouseX>scaleX && mouseX<scaleX+75 && mouseIsPressed){
        this.b=0;
        this.g=0;
        this.KeyPressed_E=true;

      }
      return this.KeyPressed_E;
    }
    playKey(){
      this.noteE=new p5.Oscillator();
      this.noteE.setType('sine');
      this.noteE.freq(329.6276);
      this.noteE.amp(0,1);
      this.noteE.start();
      this.noteE.stop(1);
  }
}
  class PianoKey_F extends PianoKey{
    constructor(){
      super();
      this.KeyPressed_F=false;
    }
    buildKey(){
      this.x=this.x+600;
      super.buildKey();
    }
    mouseCheck(){
      let scaleX=this.x+1350;
      if (mouseX>scaleX-50 && mouseX<scaleX+25 && mouseIsPressed){
        this.r=255;
        this.b=0;
        this.g=150;
        this.KeyPressed_F=true;

      }
      return this.KeyPressed_F;
    }
      playKey(){
        this.noteF=new p5.Oscillator();
        this.noteF.setType('sine');
        this.noteF.freq(349.2282);
        this.noteF.amp(0,1);
        this.noteF.start();
        this.noteF.stop(1);
    }
    }
  class PianoKey_G extends PianoKey{
    constructor(){
      super();
      this.KeyPressed_G=false;
    }
    buildKey(){
      this.x=this.x+800;
      super.buildKey();
    }
    mouseCheck(){
      let scaleX=790
      if (mouseX>scaleX && mouseX<scaleX+90 && mouseIsPressed){
        this.r=255;
        this.g=255;
        this.b=0;
        this.KeyPressed_G=true;

      }
      return this.KeyPressed_G;
    }
      playKey(){
        this.noteG=new p5.Oscillator();
        this.noteG.setType('sine');
        this.noteG.freq(391.9954);
        this.noteG.amp(0,1);
        this.noteG.start();
        this.noteG.stop(1);
    }

    }


  class PianoKey_A extends PianoKey{
    constructor(){
      super();
      this.KeyPressed_A=false;
    }
    buildKey(){
      this.x=this.x+1000;
      super.buildKey();
    }
    mouseCheck(){
      let scaleX=1000;
      print(mouseX);
      if (mouseX>scaleX && mouseX<scaleX+90 && mouseIsPressed){
        this.r=128;
        this.g=0;
        this.b=128;
        this.KeyPressed_A=true;

      }
      return this.KeyPressed_A;
    }
      playKey(){
        this.noteA=new p5.Oscillator();
        this.noteA.setType('sine');
        this.noteA.freq(440.0000);
        this.noteA.amp(0,1);
        this.noteA.start();
        this.noteA.stop(1);
    }

    }

  class PianoKey_B extends PianoKey{
    constructor(){
      super();
      this.KeyPressed_B=false;
    }
    buildKey(){
      this.x=this.x+1200;
      super.buildKey();
    }
    mouseCheck(){
      let scaleX=1163;
      if (mouseX>scaleX && mouseX<scaleX+90 && mouseIsPressed){
        this.r=255;
        this.g=195;
        this.b=205;
        this.KeyPressed_B=true;

      }
      return this.KeyPressed_B
    }
    playKey(){
      this.noteB=new p5.Oscillator();
      this.noteB.setType('sine');
      this.noteB.freq(493.8833);
      this.noteB.amp(0,1);
      this.noteB.start();
      this.noteB.stop(1);
  }
  }
  class PianoKey_C extends PianoKey{
    constructor(){
      super();
      this.KeyPressed_C=false;
    }
    buildKey(){
      this.x=this.x+1400;
      super.buildKey();
    }
    mouseCheck(){
      let scaleX=1326;
      if (mouseX>scaleX && mouseX<scaleX+90 && mouseIsPressed){
        this.r=0;
        this.g=255;
        this.b=255;
        this.KeyPressed_C=true;

      }
      return this.KeyPressed_C;
    }
    playKey(){
      this.noteC=new p5.Oscillator();
      this.noteC.setType('sine');
      this.noteC.freq(523.2511);
      this.noteC.amp(0,1);
      this.noteC.start();
      this.noteC.stop(1);
  }
  }
  //function Puzzle_Checker(){

  //}

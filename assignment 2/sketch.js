let mycolor;
let colors;

function setup() {
  createCanvas(1000, 500);
  
  colorMode(RGB);
  colors = [color(255,0,0),
    color(255,127,0),
    color(255,255,0),
    color(0,255,0),
    color(0,0,255),
    color(148,0,211),
    color(128,64,0),
    color(255,255,255),
    color(0,0,0)];

    redBox = new colorPicker(0,colors[0]);
    orangeBox = new colorPicker(20,colors[1]);
    yellowBox = new colorPicker(40,colors[2]);
    greenBox = new colorPicker(60,colors[3]);
    blueBox = new colorPicker(80,colors[4]);
    purpleBox = new colorPicker(100,colors[5]);
    brownBox = new colorPicker(120,colors[6]);
    whiteBox = new colorPicker(140,colors[7]);
    blackBox = new colorPicker(160,colors[8]);
  }

class colorPicker{
  constructor(y,color){
    this.x = 0;
    this.y = y;
    this.w = 20;
    this.h = 20;
    this.color = color;
  }
  appear(){
    push();
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
onMousePressed(){
  if(mouseIsPressed){
  if(mouseX < 20){
  if(mouseY > 0 && mouseY <20){
    mycolor = colors[0]
  }
    else if(mouseY > 20 && mouseY <40){
      mycolor = colors[1]
    }
      else if(mouseY > 40 && mouseY <60){
        mycolor = colors[2]
      }
        else if(mouseY > 60 && mouseY <80){
          mycolor = colors[3]
        }
          else if(mouseY > 80 && mouseY <100){
            mycolor = colors[4]
          }
            else if(mouseY > 100 && mouseY <120){
              mycolor = colors[5]
            }
              else if(mouseY > 120 && mouseY <140){
                mycolor = colors[6]
              }
                else if(mouseY > 140 && mouseY <160){
                  mycolor = colors[7]
                }
                  else if(mouseY > 160 && mouseY <180){
                    mycolor = colors[8]
                  }
  }
  }
  }
}

function draw() {
  if(mouseIsPressed){
    if (mouseX > 51){
      drawing();
    }
  }
  redBox.appear();
  redBox.onMousePressed();
  orangeBox.appear();
  yellowBox.appear();
  greenBox.appear();
  blueBox.appear()
  purpleBox.appear();
  brownBox.appear();
  whiteBox.appear();
  blackBox.appear();
}

function drawing(){
  push();
  stroke(mycolor)
  strokeWeight(10);
  strokeCap(ROUND);
  line(pmouseX, pmouseY, mouseX, mouseY);
  pop();
}


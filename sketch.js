var c;
let x;
let radius = 100;
let speed=0.2;

function setup() {
  createCanvas(400, 400);
  x=width/2;
}

function draw() {
  background(248,248,248);
  strokeWeight(0.5);
  
  let from = color(255,150,0);
  let to = color(0,150,255);
  let pct = map(x,radius, width-radius,0,1);
  c =  lerpColor(from,to,pct);
  x+=speed;
  if(x<radius || x>width-radius){
    speed *=-1;
  }
  
  if(frameCount%660 <= 210){
    doraemon();
  }else if(frameCount%660 <= 420){
    copter();
    doraemon();
  }else{
    ear();
    doraemon();
  }
  
}

function doraemon(){
  neckless();
  head();
  eye();
  nose();
  mouth();
  mustage();
  bell();
}

function eye (){
  console.log(frameCount)
  if(frameCount%400 <= 100){
    normaleye();
  }else if(frameCount%400 <= 200){
    insaneeye()
  }else if(frameCount%400 <= 300){
    shyeye();
  }else{
    erroreye();
  }
}

function normaleye(){
  fill(255,255,255)
  strokeWeight(0.5);
  stroke(0,0,0)
  
  ellipse(width/2 - 24, height/2-25, 50, 55);
  ellipse(width/2 + 24, height/2-25, 50, 55);

  fill(0,0,0)
  ellipse(width/2-12 , height/2-15, 10, 10);
  ellipse(width/2+12 , height/2-15, 10, 10);
}

function insaneeye(){
  fill(255,255,255)
  strokeWeight(0.5);
  stroke(0,0,0)
  
  ellipse(width/2 - 24, height/2-25, 50, 55);
  ellipse(width/2 + 24, height/2-25, 50, 55);

  fill(255,255,255)
  ellipse(width/2 - 24, height/2-25, 25, 25);
  ellipse(width/2 + 24, height/2-25, 25, 25);
  
  fill(0,0,0)
  ellipse(width/2 - 24, height/2-25, 10, 10);
  ellipse(width/2 + 24, height/2-25, 10, 10);
}

function shyeye(){
  fill(255,255,255)
  strokeWeight(0.5);
  stroke(0,0,0)
  
  ellipse(width/2 - 24, height/2-25, 50, 55);
  ellipse(width/2 + 24, height/2-25, 50, 55);
  
  fill(0,0,0)
  arc(width/2 - 24,height/2 -20, 20, 20, PI, 0);
  arc(width/2 + 24,height/2 -20, 20, 20, PI, 0);
  
  fill(255,255,255)
  arc(width/2 - 24,height/2 -17, 20, 20, PI, 0);
  arc(width/2 + 24,height/2 -17, 20, 20, PI, 0);
}

function erroreye(){
  fill(255,255,255)
  strokeWeight(0.5);
  stroke(0,0,0)
  
  ellipse(width/2 - 24, height/2-25, 50, 55);
  ellipse(width/2 + 24, height/2-25, 50, 55);
  
  ellipse(width/2 - 12, height/2-30, 15, 20);
  ellipse(width/2 + 16, height/2-15, 15, 20);
  
  fill(0,0,0)
  ellipse(width/2 - 12, height/2-30, 3, 3);
  ellipse(width/2 + 16, height/2-15, 3, 3);
}

function copter(){
  strokeWeight(1);
  fill(230,234,220)
  ellipse(width/2, height/2-112, 50, 20);
  strokeWeight(0);
  fill(162,186,193)
  ellipse(width/2, height/2-112, 30, 10);
  strokeWeight(1);
  fill(249,234,3,100)
  rect(width/2-4,height/2-107,6,23);
  rect(width/2-7,height/2-113.5,12,6);
}

function bell(){
  fill(220,196,55)
  ellipse(width/2, height/2+120, 25, 25);
  arc(width/2, height/2+119, 24, 15, PI, 0);
  arc(width/2, height/2+123, 24, 15, PI, 0);
  line(width/2, height/2+128,width/2, height/2+132)
  fill(0,0,0,90)
  ellipse(width/2, height/2+125, 8, 5);
  
  textSize(10);
  textFont('Turncoat');
  text('Group Name', 330, 390);
}

function mustage(){
  stroke(0,0,0)
  //right
  line(width/2+15, height/2+20,width/2+70, height/2)
  line(width/2+15, height/2+28,width/2+80, height/2+22)
  line(width/2+15, height/2+38,width/2+70, height/2+48)
  //left
  line(width/2-15, height/2+20,width/2-70, height/2)
  line(width/2-15, height/2+28,width/2-80, height/2+22)
  line(width/2-15, height/2+38,width/2-70, height/2+48)
}

function mouth(){
  fill(255,255,255)
  stroke(209,209,209)
  arc(width/2,height/2+50, 130, 90, 0, PI);
  line(width/2, height/2+2,width/2, height/2+94)
}

function nose(){
  fill(255,0,0)
  ellipse(width/2, height/2-5, 15, 15);
}

function neckless(){
  strokeWeight(0);
  fill(190,62,47)
  arc(width/2, height/2+78, 150, 90, 0, PI);
}

function head(){
  fill(c);
  strokeWeight(0.5);
  stroke(0,0,0)
  ellipse(width/2, height/2+15, 200, 200);
  
  //Face
  fill(255,255,255)
  stroke(0,0,0)
  ellipse(width/2, height/2+40, 175, 150);
}

function ear(){
  fill(c)
  triangle(110, 185, 138, 90, 186, 125);
  triangle(290, 185, 262, 90, 214, 125);
  
  fill(214,159,166)
  triangle(130, 145, 138, 90, 186, 125);
  triangle(270, 145, 262, 90, 214, 125);
}
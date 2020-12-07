var startX=0;
var startY=0;
var count=0;

function setup() {
  createCanvas(500, 500);
  background(0);
  stroke(250,250,0);
  strokeWeight(5);
  
  
}

function draw() {
  
  //clouds
  fill(250,250,250);
  stroke(255,255,255);
  ellipse(0, 0, 300, 100);
  ellipse(400, 0, 300, 100);
  ellipse(200, 0, 200, 100);
  stroke(47,95,0);
  fill(47,95,0);
  rect(0,400,500,100);
  
  //lightning
stroke(250,250,0);
 if(Math.random()<0.5)
   for(var i = 0; i<6; i++){
   startX+=1;
   startY+=1;
   count++;
   point(startX,startY);
 }
else
  for(var i=0; i<6; i++){
  startX-=1;
   startY+=1;
   count++;
   point(startX,startY);
}
  
  //reset
  if(startY>410){
    startY=0;
    startX=mouseX;
    if(count>=5){
      background(0);
      fill(250,250,250);
  stroke(255,255,255);
  ellipse(0, 0, 300, 100);
  ellipse(400, 0, 300, 100);
  ellipse(200, 0, 200, 100);
  stroke(47,95,0);
  fill(47,95,0);
  rect(0,400,500,100);
    }
}
}
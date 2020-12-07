var dice1;
 var dice2;
   var dice3;
   var dice4;
   var dice5;
  var dice6;
  var sum=0;

function setup()
{
  noLoop();
  createCanvas(500, 500);
    background(255);
}


function draw()
{
    background(255);
     var dice1=(int)(Math.random()*6+1);
     var dice2=(int)(Math.random()*6+1);
     var dice3=(int)(Math.random()*6+1);
    var dice4=(int)(Math.random()*6+1);
     var dice5=(int)(Math.random()*6+1);
    var dice6=(int)(Math.random()*6+1);
     var sum= dice1 + dice2 + dice3 + dice4 + dice5 + dice6;
    
  fill(0);
 
   var s = "DICE";
   var a = "Your Score is:";
   var b = sum;
  textFont("Georgia");
  textSize(64);
  textAlign(CENTER);
  text(s, width/2, 75);
  text(a, width/2, 300);
  text(b, width/2, 400);
  
   
    for(var i=30; i<450; i+=75){
      fill(255,0,0);
      rect(i,130,75,75);
    }
      
      fill(0);
      //dice1
      if(dice1==1){
        ellipse(68,170,10,10);
      }
      else if(dice1==2){
        ellipse(60,170,10,10);
        ellipse(74,170,10,10);
      }
      else if(dice1==3){
        ellipse(90,190,10,10);
        ellipse(68,170,10,10);
        ellipse(46,150,10,10);
      }
      else if(dice1==4){
        ellipse(46,150,10,10);
        ellipse(46,190,10,10);
        ellipse(90,190,10,10);
        ellipse(90,150,10,10);
      }
      else if(dice1==5){
        ellipse(46,150,10,10);
        ellipse(46,190,10,10);
        ellipse(90,190,10,10);
        ellipse(90,150,10,10);
        ellipse(68,170,10,10);
      }
      else if(dice1==6){
        ellipse(50,150,10,10);
        ellipse(50,170,10,10);
        ellipse(50,190,10,10);
        ellipse(90,150,10,10);
        ellipse(90,170,10,10);
        ellipse(90,190,10,10);
      }
      //dice2
    if(dice2==1){
        ellipse(143,170,10,10);
      }
      else if(dice2==2){
        ellipse(135,170,10,10);
        ellipse(149,170,10,10);
      }
      else if(dice2==3){
        ellipse(165,190,10,10);
        ellipse(143,170,10,10);
        ellipse(121,150,10,10);
      }
      else if(dice2==4){
        ellipse(121,150,10,10);
        ellipse(121,190,10,10);
        ellipse(165,190,10,10);
        ellipse(165,150,10,10);
      }
      else if(dice2==5){
        ellipse(121,150,10,10);
        ellipse(121,190,10,10);
        ellipse(165,190,10,10);
        ellipse(165,150,10,10);
        ellipse(143,170,10,10);
      }
      else if(dice2==6){
        ellipse(125,150,10,10);
        ellipse(125,170,10,10);
        ellipse(125,190,10,10);
        ellipse(165,150,10,10);
        ellipse(165,170,10,10);
        ellipse(165,190,10,10);
      }
      //dice3
    if(dice3==1){
        ellipse(218,170,10,10);
      }
      else if(dice3==2){
        ellipse(210,170,10,10);
        ellipse(224,170,10,10);
      }
      else if(dice3==3){
        ellipse(240,190,10,10);
        ellipse(218,170,10,10);
        ellipse(196,150,10,10);
      }
      else if(dice3==4){
        ellipse(196,150,10,10);
        ellipse(196,190,10,10);
        ellipse(240,190,10,10);
        ellipse(240,150,10,10);
      }
      else if(dice3==5){
        ellipse(196,150,10,10);
        ellipse(196,190,10,10);
        ellipse(240,190,10,10);
        ellipse(240,150,10,10);
        ellipse(218,170,10,10);
      }
      else if(dice3==6){
        ellipse(200,150,10,10);
        ellipse(200,170,10,10);
        ellipse(200,190,10,10);
        ellipse(240,150,10,10);
        ellipse(240,170,10,10);
        ellipse(240,190,10,10);
      }
      //dice4
      if(dice4==1){
        ellipse(293,170,10,10);
      }
      else if(dice4==2){
        ellipse(285,170,10,10);
        ellipse(299,170,10,10);
      }
      else if(dice4==3){
        ellipse(315,190,10,10);
        ellipse(293,170,10,10);
        ellipse(271,150,10,10);
      }
      else if(dice4==4){
        ellipse(271,150,10,10);
        ellipse(271,190,10,10);
        ellipse(315,190,10,10);
        ellipse(315,150,10,10);
      }
      else if(dice4==5){
        ellipse(271,150,10,10);
        ellipse(271,190,10,10);
        ellipse(315,190,10,10);
        ellipse(315,150,10,10);
        ellipse(293,170,10,10);
      }
      else if(dice4==6){
        ellipse(275,150,10,10);
        ellipse(275,170,10,10);
        ellipse(275,190,10,10);
        ellipse(315,150,10,10);
        ellipse(315,170,10,10);
        ellipse(315,190,10,10);
      }
      //dice5
      if(dice5==1){
        ellipse(368,170,10,10);
      }
      else if(dice5==2){
        ellipse(360,170,10,10);
        ellipse(374,170,10,10);
      }
      else if(dice5==3){
        ellipse(390,190,10,10);
        ellipse(368,170,10,10);
        ellipse(346,150,10,10);
      }
      else if(dice5==4){
        ellipse(346,150,10,10);
        ellipse(346,190,10,10);
        ellipse(390,190,10,10);
        ellipse(390,150,10,10);
      }
      else if(dice5==5){
        ellipse(346,150,10,10);
        ellipse(346,190,10,10);
        ellipse(390,190,10,10);
        ellipse(390,150,10,10);
        ellipse(368,170,10,10);
      }
      else if(dice5==6){
        ellipse(350,150,10,10);
        ellipse(350,170,10,10);
        ellipse(350,190,10,10);
        ellipse(390,150,10,10);
        ellipse(390,170,10,10);
        ellipse(390,190,10,10);
      }
      //dice6
      if(dice6==1){
        ellipse(443,170,10,10);
      }
      else if(dice6==2){
        ellipse(435,170,10,10);
        ellipse(449,170,10,10);
      }
      else if(dice6==3){
        ellipse(465,190,10,10);
        ellipse(443,170,10,10);
        ellipse(421,150,10,10);
      }
      else if(dice6==4){
        ellipse(421,150,10,10);
        ellipse(421,190,10,10);
        ellipse(465,190,10,10);
        ellipse(465,150,10,10);
      }
      else if(dice6==5){
        ellipse(421,150,10,10);
        ellipse(421,190,10,10);
        ellipse(465,190,10,10);
        ellipse(465,150,10,10);
        ellipse(443,170,10,10);
      }
      else if(dice6==6){
        ellipse(425,150,10,10);
        ellipse(425,170,10,10);
        ellipse(425,190,10,10);
        ellipse(465,150,10,10);
        ellipse(465,170,10,10);
        ellipse(465,190,10,10);
      }
      
  
}
function mousePressed(){
    redraw();
    
  }
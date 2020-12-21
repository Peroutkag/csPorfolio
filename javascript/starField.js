float x;
float y;
float radius=2;
float angle=.01;
boolean sw=false;
double pie = 0;
Particle[]s;

void setup() {
  size(900, 700);
  s=new Particle[200];
  

  for ( int i = 0; i< s.length; i++) {
    s[i]=new NormalParticle((float)(Math.random()*300)+20, (float)(Math.random()*300)+20);
  }
  
}

void draw() {
  //background(0);
  fill(0, 8);
  rect(0, 0, width, height);

  for (int i=0; i<s.length; i++) {
    s[i].show();
    s[i].move();
  }
}

void mousePressed() {

  for (int i=0; i<s.length; i++) {
    s[i]=new NormalParticle(width/2, height/2);
  }
}


interface Particle {
  void move();
  void show();
  void randC();
}

class NormalParticle implements Particle {
  float x;
  float y;
  double angle=Math.random()*(2*Math.PI);//random direction

 
  float xspeed=(float)(Math.random()*5)-2;//random speed
  float yspeed=(float)(Math.random()*10)-5;

  float radius;
  //(float)(Math.random()*55)+200
  color c1 = color(0, 0, 255);
  color c2 = color(255);
  NormalParticle(float x, float y) {
    this.x=x;
    this.y=y;

    radius=(float)(Math.random()*7);
  }

  //your code here
  void show() {
    fill(c1);
    ellipse(x, y, 15, 15);
    fill(c2);
    ellipse(x,y,10,10);
  }

  void move() {
    x+=Math.cos(angle)*radius;
    y+=Math.sin(angle)*radius;

    angle+=.02;
    
  }
  void randC() {
  }
}
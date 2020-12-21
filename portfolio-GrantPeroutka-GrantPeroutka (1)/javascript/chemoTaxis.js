Bacteria[] bac = new Bacteria[100];

 void setup() {
  size(500, 500);
  for(int i = 0; i<bac.length; i++){
    bac[i] = new Bacteria(width/2, height/2);
  }
}

void draw() {
  background(0);
for(int j = 0; j<bac.length; j++){
  bac[j].show();
  bac[j].move();
  }
}
public class Bacteria    
 {  
  int x;
  int y;
   
  public Bacteria(int xpos, int ypos){
    x = xpos;
    y= ypos;
   
  }
  void move(){
    if((Math.abs(x-mouseX) >=0 && x + mouseX > 0) && (x<= mouseX)){
      x = x + ((int) ((Math.random() * 15)-2));
    }
    if(x > mouseX){
      x = x - ((int) (Math.random() * 15));
    }
    if((Math.abs(y-mouseY) >=0 && y + mouseY > 0) && (y<= mouseY)){
      y = y + ((int) ((Math.random() * 15)-2));
    }
      if(y > mouseX){
      y = y - ((int) (Math.random() * 15));
    }
    else {
      x = x + (int)(Math.random());
      y = y - (int)(Math.random());
    }
  }
  void show(){
    fill((int)(Math.random()*250), (int)(Math.random()*250),(int)(Math.random()*250));
    ellipse(x,y,15,15);
 }    
 }
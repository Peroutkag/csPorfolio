function setup() {
  size(600, 400);
	background(0);
}

function draw() {
	PFont f = createFont("Georgia", 64);
	String s = "Grant Peroutka";
	
	textFont(f);
	textSize(64);
	textAlign(CENTER);
	text(s, width/2, 200);

	
}
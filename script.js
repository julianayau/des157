//banner template
// squares appear and change colors when Processing

function setup(){
  var myCanvas=createCanvas(800,250);
  myCanvas.parent('mySketch');
  background(0);
}

//draw the circles first
// if mouse is pressed, then show gold colored squares, otherwise show green colored squares
function draw(){
    fill (103,152,129);

  if (mouseIsPressed){
      rect(mouseX, mouseY, 100, 100);
      fill(74,212,151);

  }

  else{

      fill(27,76,54);
      

  }
  ellipse (100, 100, 100, 100);
    fill (103,152,129);

}

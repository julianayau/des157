// js

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log('reading js');
// get images from html
var cat = document.querySelector("#cat");
var hat = document.querySelector("#hat");
var angle = 0, lastTime = null;

function animate(time) {
  if (lastTime != null)
    angle += (time - lastTime) * 0.001;
  lastTime = time;
  cat.style.top = (Math.sin(angle) * 20) + 40 + "px";
  cat.style.left = (Math.cos(angle) * 200) + 250 + "px";
  // plus pi so that hat is opposite of cat
  hat.style.top = (Math.sin(angle+Math.PI) * 20) + 40 + "px";
  hat.style.left = (Math.cos(angle+Math.PI) * 200) + 250 + "px";
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

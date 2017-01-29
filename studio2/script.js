// take user input and oupt song with users' input
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


  var image = "images/face.png";

  // generate random pixels on page for image to be placed
  var topPos = Math.random() * 1000 + "px";
  var horzPos = Math.random() * 1000 + "px";

  //user set interval to generate image at random positions every 1500 milliseconds
  setInterval(function() {
      // putting image in first element of div
      document.getElementsByTagName('div')[0].innerHTML = "<img src='images/face.png' />";
      // set position of image to absolute
      document.getElementsByTagName('img')[0].style.position = "absolute";
      // put image on page according to random generated number
      document.getElementsByTagName('img')[0].style.top = topPos;
      document.getElementsByTagName('img')[0].style.left = horzPos;

      // runs it again after 1500 milliseconds to put in a different place
      topPos = Math.random() * 900 + "px";
      horzPos = Math.random() * 900 + "px";

  }, 1500);



  //capture the submit event
  //document.form.onsubmit = processForm;
  document.getElementById("submit").onclick = processForm;
  document.getElementById("reset").onclick = clearForm;
  //document.getElementById("backtoreset").onclick = clearForm;
  var song = document.getElementById("song");


  //define process function
  function processForm() {
      // get elements from user input
      var userBody = document.form.userBody.value;
      var userNoun1 = document.form.userNoun1.value;
      var userNoun2 = document.form.userNoun2.value;
      var userNoun3 = document.form.userNoun3.value;
      var userDest = document.form.userDest.value;

      // if the user doesn't enter anything in, print error message
      if (userBody == "" || userNoun1 == "" || userNoun2 == "" || userNoun3 == "" || userDest == "") {
          error.innerHTML = "If you're reading this, you forgot to enter a word. Thank me later."
      } else {

          // user innerHTML to concatenate a message and put it on the screen
          song.innerHTML = 'I got my ' + userBody + ' on you. ' + "You're everything that I see I want your high " + userNoun1 + " and emotion endlessly. I can't get over you, You left your " + userNoun3 + ' on me, I want your high ' + userNoun1 + " and emotion endlessly. Cause you're a good " + userNoun2 + " and you know it. I know exactly who you could be. Just hold on were going " + userDest + ". Just hold on we're going " + userDest + " Its hard to do these things alone." + " Just hold on we're going " + userDest; + ".";

          // clear error message if user resubmits
          error.innerHTML = "";
      }

      // keeps page from reloading
      return false;
  }

  // function to clear form
  function clearForm() {
      // clear song
      song.innerHTML = '';

      // clear form fields
      document.form.reset();

      // keeps page from reloading after clearing forms
      return false;
}


});

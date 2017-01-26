// take user input and oupt song with users' input

//capture the submit event
document.form.onsubmit = processForm;

//define process function
function processform(){
  //store body part singular in variable
  var ddd = document.getElementById('userBody')
  var userBody = document.form.userBody.value;
  var userNoun1 = document.form.userNoun1.value;
  var userNoun2 = document.form.userNoun2.value;
  var userNoun3 = document.form.userNoun3.value;
  var userDest = document.form.userDest.value;

  var song = document.getElementById('song');

  // user innerHTML to concatenate a message and put it on the screen
  song.innterHTML = 'I got my '+ userBody 'eyes on you.' + "You're everything that I see I want your high" userNoun1 + 'and emotion endlessly. I cant get over you, You left your' userNoun3 + 'on me, I want your high' + userNoun1 + "and emotion endlessly. Cause you're a good" + userNoun2 + "and you know it. I know exactly who you could be. Just hold on we're going" + userDest + "Just hold on we're going" + userDest + "It's hard to do these things alone" + " Just hold on we're going" + userDest

  if (userBody == "" || userNoun1 =="" || userNoun2 == "" || userNoun3 =="" || userDest ==""){
    alert("If you're reading this, you forgot to enter a word. Thank me later.");
  }

  else{
    return 0;
  }
  return false;

}


document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

/**** JSON ****/
var trainers = [
  {"name": "Bob Smith", "email": "bob_smith@yahoo.com", "goal": "reverse diet", "diet_style": "IIFYM", "coaching_style": "online"},
  {"name": "Edward James", "email": "edward_james@yahoo.com", "goal": "lose body fat", "diet_style": "meal plan", "coaching_style": "in-house"},
  {"name": "Julia Anderson", "email": "julia_anderson@yahoo.com", "goal": "Bodybuilding", "diet_style": "IIFYM", "coaching_style": "online"},
  {"name": "Norma Lopez", "email": "norma_lopez@yahoo.com", "goal": "Gain Muscle", "diet_style": "meal plan", "coaching_style": "online"},
  {"name": "Roy	Griffin", "email": "roy_griffin@yahoo.com", "goal": "Powerlifting", "diet_style": "meal plan", "coaching_style": "in-house"},
  {"name": "Alan Sanders", "email": "alan_sanders@yahoo.com", "goal": "reverse diet", "diet_style": "meal plan", "coaching_style": "in-house"},
  {"name": "Deboarah Sanders", "email": "deborah_sanders@yahoo.com", "goal": "lose body fat", "diet_style": "IIFYM", "coaching_style": "in-house"},
  {"name": "Juan Cox", "email": "juan_cox@yahoo.com", "goal": "Bodybuilding", "diet_style": "IIFYM", "coaching_style": "in-house"},
  {"name": "Ann Adams", "email": "ann_adams@yahoo.com", "goal": "Gain Muscle", "diet_style": "IIFYM", "coaching_style": "in-house"},
  {"name": "Gregory Thomas", "email": "gregory_thomas@yahoo.com", "goal": "Powerlifting", "diet_style": "IIFYM", "coaching_style": "in-house"},
  {"name": "Judith Mitchel", "email": "judith_mitchell@yahoo.com", "goal": "reverse diet", "diet_style": "IIFYM", "coaching_style": "online"}

];


var client_start = document.getElementById('client_start');
var next = document.getElementById('next');
var find_coach = document.getElementById('find_coach');
var articles = document.getElementsByTagName('article');

client_start.addEventListener('click', function(){
  for( var i=0; i<articles.length; i++){
    articles[i].className = "back";
  }
  articles[1].className = "front";
})

next.addEventListener('click', function(){
  processf1();
  for( var i=0; i<articles.length; i++){
    articles[i].className = "back";
  }

  articles[2].className = "front";
})


find_coach.addEventListener('click', function(){
  processf2();
  for( var i=0; i<articles.length; i++){
    articles[i].className = "back";

  }

  articles[3].className = "front";

})


function processf2(){

  var client_goal_value = client_goal.options[client_goal.selectedIndex].text;

  var client_diet = document.getElementById("client_diet");
  var client_diet_value = client_diet.options[client_diet.selectedIndex].text;

  var client_coach = document.getElementById("client_coach");
  var client_coach_value = client_coach.options[client_coach.selectedIndex].text;


  find_trainer(client_goal_value, client_diet_value, client_coach_value);

}


function find_trainer(client_goal_value, client_diet_value, client_coach_value){

  var found = "";
;
  for (var i=0; i<trainers.length; i++){

    if(trainers[i].goal == client_goal_value){
      console.log(trainers[0].goal );
      if(trainers[i].diet_style == client_diet_value){

        if(trainers[i].coaching_style == client_coach_value){

          found = '<div class="results">' + trainers[i].name + '</p><p>' + trainers[i].email + '</p><p>' + trainers[i].goal + '</p><p>' + trainers[i].diet_style + '</p><p>' + trainers[i].coaching_style + '</p></div>';

        }

      }
    }
  }
  document.getElementById("results").innerHTML = found;


}


/***** START PROCESSING FORM *****/




function processf1(){
  var greetings = document.getElementById("greetings");

  var client_name = document.getElementById('client_name').value;
          if (client_name == "" ) {
              alert("Please enter your name");
          } else {

              // user innerHTML to concatenate a message and put it on the screen
              greetings.innerHTML = 'Hello ' + client_name + " 'let's answer some questions about yourself!" + ".";

            }

}



});

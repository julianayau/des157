document.addEventListener("DOMContentLoaded", function(event) {

    var princessbox = document.getElementById("princessbox");
    var pbbox = document.getElementById("pbbox");
    var luckycharmsbox = document.getElementById("luckycharmsbox");
    var gsbox = document.getElementById("gsbox");

    var princesscontent = document.getElementById("princesscontent");

    princessbox.addEventListener('mouseover', function() {
        princessbox.style.cursor = 'pointer';
    })

     princessbox.addEventListener('mouseout', function() {
       // back to set image
       princessbox.src = "images/princessbox.jpg";
     })

    princessbox.addEventListener('click', function(){
      princessbox.src = "images/open.jpg";
      princesscontent.style.display = "block";
    })


    // pbbox.addEventListener('mouseover', function() {
    //     // gif of box moving side to side
    //     pbbox.src = "images/background.jpg";
    // })
    // pbbox.addEventListener('mouseout', function() {
    //     // back to set image
    //     pbbox.src = "images/pbbox.jpg";
    // })
    // luckycharmsbox.addEventListener('mouseover', function() {
    //     // gif of box moving side to side
    //     luckycharmsbox.src = "images/background.jpg";
    // })
    // luckycharmsbox.addEventListener('mouseout', function() {
    //     //back to set image
    //     luckycharmsbox.src = "#";
    // })
    // gsbox.addEventListener('mouseover', function() {
    //     // gif of box moving side to side
    //     gsbox.src = "images/background.jpg";
    // })
    // gsbox.addEventListener('mouseout', function() {
    //     // back to set image
    //     gsbox.src = "#";
    // })



});

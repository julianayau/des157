document.addEventListener("DOMContentLoaded", function(event) {

    var heart1 = document.getElementById('heart1');
    var initialMsg1 = document.getElementById('initialMsg1');
    var pixel = document.getElementById("pixel");

    var heart2 = document.getElementById('heart2');
    var initialMsg2 = document.getElementById('initialMsg2');

    var heart3 = document.getElementById('heart3');
    var initialMsg3 = document.getElementById('initialMsg3');
    // var div1 = document.getElementById("div1");



    var msgTimer; // global variable for time set on mousehover
    var pixelInterval;

    // mouse over inital message
    heart1.addEventListener('mouseover', function() {
        msgTimer = setTimeout(showinitialMsg1, 1000);
        initialMsg1.style.opactiiy = 0;
        heart1.style.cursor = 'pointer';
    });

    heart1.addEventListener('mouseout', function() {
        clearTimeout(msgTimer);
        initialMsg1.style.opacity = 0;
    });

    function showinitialMsg1() {
        initialMsg1.style.opacity = 1;
        initialMsg1.style.transition = 'all .5s';
    }
    // moving heart apart and showing message with dancing hearts

    heart1.addEventListener('click', function() {
        heart1.src = "images/heart1.gif";
        pixelInterval = setInterval(moveDiv, 100);
    });




    function moveDiv() {
        var w = window.innerWidth;
        var h = window.innerHeight;

        var newLeft = (Math.floor(Math.random() * w)) + 'px';
        var newTop = (Math.floor(Math.random() * h)) + 'px';

        pixel.style.left = newLeft;
        pixel.style.top = newTop;

    }


    heart2.addEventListener('mouseover', function() {
        msgTimer = setTimeout(showinitialMsg2, 1000);
        initialMsg2.style.opactiiy = 0;
        heart2.style.cursor = 'pointer';
    });

    heart2.addEventListener('mouseout', function() {
        clearTimeout(msgTimer);
        initialMsg2.style.opacity = 0;
    });

    function showinitialMsg2() {
        initialMsg2.style.opacity = 1;
        initialMsg2.style.transition = 'all .5s';
    }
    // moving heart apart and showing message with dancing hearts

    heart2.addEventListener('click', function() {
        heart2.src = "images/heart2.gif";
        pixelInterval = setInterval(moveDiv, 100);
    });

    heart2.addEventListener('mouseout', function() {
        heart2.src = "images/reverseheart2.gif";
        clearInterval(pixelInterval);

    });


    heart3.addEventListener('mouseover', function() {
        msgTimer = setTimeout(showinitialMsg3, 1000);
        initialMsg3.style.opactiiy = 0;
        heart3.style.cursor = 'pointer';
    });

    heart3.addEventListener('mouseout', function() {
        clearTimeout(msgTimer);
        initialMsg3.style.opacity = 0;
    });

    function showinitialMsg3() {
        initialMsg3.style.opacity = 1;
        initialMsg3.style.transition = 'all .5s';
    }
    // moving heart apart and showing message with dancing hearts

    heart3.addEventListener('click', function() {
        heart3.src = "images/heart3.gif";
        pixelInterval = setInterval(moveDiv, 100);
    });

    heart3.addEventListener('mouseout', function() {
        heart3.src = "images/reverseheart3.gif";
        clearInterval(pixelInterval);

    });



    heart4.addEventListener('mouseover', function() {
        msgTimer = setTimeout(showinitialMsg3, 1000);
        initialMsg4.style.opactiiy = 0;
        heart3.style.cursor = 'pointer';
    });

    heart4.addEventListener('mouseout', function() {
        clearTimeout(msgTimer);
        initialMsg4.style.opacity = 0;
    });

    function showinitialMsg4() {
        initialMsg4.style.opacity = 1;
        initialMsg4.style.transition = 'all .5s';
    }
    // moving heart apart and showing message with dancing hearts

    heart4.addEventListener('click', function() {
        heart4.src = "images/heart4.gif";
        pixelInterval = setInterval(moveDiv, 100);
    });

    heart4.addEventListener('mouseout', function() {
        heart4.src = "images/reverseheart4.gif";
        clearInterval(pixelInterval);

    });


});

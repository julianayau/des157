document.addEventListener("DOMContentLoaded", function(event) {

    var princessbox = document.getElementById("princessbox");
    var pbbox = document.getElementById("pbbox");
    var gsbox = document.getElementById("gsbox");
    var kravebox = document.getElementById("kravebox");
    var ffbox = document.getElementById("ffbox");

    var hideprincess = document.getElementById("hideprincess");
    var hidepb = document.getElementById("hidepb");
    var hidegs = document.getElementById("hidegs");
    var hidekrave = document.getElementById("hidekrave");
    var hideff = document.getElementById("hideff");

    var close1 = document.getElementById('close1');
    var close2 = document.getElementById('close2');
    var close3 = document.getElementById('close3');
    var close4 = document.getElementById('close4');
    var close5 = document.getElementById('close5');


    princessbox.addEventListener('mouseover', function() {
        princessbox.style.cursor = 'pointer';
    })

    princessbox.addEventListener('mouseout', function() {
        princessbox.src = "images/princess.png";
    })

    princessbox.addEventListener('click', function() {
        princessbox.src = "images/princessopen.png";
        hideprincess.style.display = 'block';

    })

    close1.addEventListener('click', function() {
        hideprincess.style.display = "none";
    })

    // capn' crunch box
    pbbox.addEventListener('mouseover', function() {
        pbbox.style.cursor = 'pointer';
    })

    pbbox.addEventListener('mouseout', function() {
        // back to set image
        pbbox.src = "images/pb.png";
    })

    pbbox.addEventListener('click', function() {
        pbbox.src = "images/pbopen.png";
        hidepb.style.display = 'block';
    })

    close2.addEventListener('click', function() {
        hidepb.style.display = "none";
    })
    // gs box
    gsbox.addEventListener('mouseover', function() {
        gsbox.style.cursor = 'pointer';
    })

    gsbox.addEventListener('mouseout', function() {
        // back to set image
        gsbox.src = "images/gs.png";
    })

    gsbox.addEventListener('click', function() {
        gsbox.src = "images/gsopen.png";
        hidegs.style.display = 'block';
    })

    close3.addEventListener('click', function() {
        hidegs.style.display = "none";
    })

    // krave box
    kravebox.addEventListener('mouseover', function() {
        kravebox.style.cursor = 'pointer';
    })

    kravebox.addEventListener('mouseout', function() {
        // back to set image
        kravebox.src = "images/krave.png";
    })

    kravebox.addEventListener('click', function() {
        kravebox.src = "images/kraveopen.png";
        hidekrave.style.display = 'block';
    })

    close4.addEventListener('click', function() {
        hidekrave.style.display = "none";
    })

    // frosted flakes box
    ffbox.addEventListener('mouseover', function() {
        ffbox.style.cursor = 'pointer';
    })

    ffbox.addEventListener('mouseout', function() {
        // back to set image
        ffbox.src = "images/ff.png";
    })

    ffbox.addEventListener('click', function() {
        ffbox.src = "images/ffopen.png";
        hideff.style.display = 'block';
    })

    close5.addEventListener('click', function() {
        hideff.style.display = "none";
    })

});

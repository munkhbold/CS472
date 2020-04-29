(function(){
    "use strict";

    var timer = null,
    // turbo = 250,
    x = 0,
    text = null,
    frame = null,
    temp = null;

    function loadPage(){
        document.getElementById("start").onclick = start;
        document.getElementById("stop").onclick = stop;
        document.getElementById("animation").onchange = animation;
        document.getElementById("mysize").onchange = sizeChange;
        document.getElementById("speed").onchange = speed;
    }

    function start(){
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        document.getElementById("mytext").disabled = true;
        document.getElementById("animation").disabled = true;
        run(250);
    };

    function run(speed){
        // console.log(turbo);
        text = document.getElementById("mytext");
        frame = ANIMATIONS[document.getElementById("animation").value];
        temp = frame.split("=====\n")

        if (timer !== null) return;
        // console.log("3>>>>> : " + turbo);
        timer = setInterval(function () {
            // console.log("3>>>>> : " + turbo);
            if(x < temp.length) text.value  = temp[x];
            else x=0;
            x++;
        }, speed); 
    };

    function stop(){
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
        document.getElementById("mytext").disabled = false;
        document.getElementById("animation").disabled = false;

        clearInterval(timer);
        timer = null;
    };

    function animation(){
        var text = document.getElementById("mytext");
        text.value = ANIMATIONS[document.getElementById("animation").value].split("=====\n")[0];
        x = 0;
    };

    function sizeChange(){
        var size = document.getElementById("mysize");
        document.getElementById("mytext").style.fontSize = size.value + "pt";
    };

    function speed(){
        if(document.getElementById("speed").checked == true){
            // turbo = 50;
            run(50);
        }
        else{
            // turbo = 250;
            run(250);
        }
        
    };
    window.onload = loadPage;
})

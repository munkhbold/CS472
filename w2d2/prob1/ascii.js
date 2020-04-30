(function(){
    "use strict";

    var timer = null,
    // turbo = 250,
    x = 0,
    text = null,
    frame = null,
    temp = null;

    /** Handle start action */
    function clickStart(){
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        document.getElementById("mytext").disabled = true;
        document.getElementById("animation").disabled = true;
        run(250);
    };

    /** Handle stop action */
    function clickStop(){
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
        document.getElementById("mytext").disabled = false;
        document.getElementById("animation").disabled = false;

        // stop interval
        clearInterval(timer);
        timer = null;
    };

    /** 
     * Start moving animation
     * @param {Integer} speed
     */
    function run(speed){
        // console.log(turbo);
        text = document.getElementById("mytext");
        frame = ANIMATIONS[document.getElementById("animation").value];
        temp = frame.split("=====\n")

        if (timer !== null) return;
        // console.log("3>>>>> : " + turbo);
        timer = setInterval(()=> {
            // console.log("3>>>>> : " + turbo);
            if(x < temp.length) text.value  = temp[x];
            else x=0;
            x++;
        }, speed); 
    };

    /** You'll choose one of them: exercise, juggler, bike, dive, custom */
    function selectAnimation(){
        var text = document.getElementById("mytext");
        text.value = ANIMATIONS[this.value].split("=====\n")[0];
        x = 0;
    };

    /** Change font size */
    function changeSize(){
        var size = document.getElementById("mysize");
        document.getElementById("mytext").style.fontSize = size.value + "pt";
    };

    /** Change action speed */
    function changeSpeed(){
        if(document.getElementById("speed").checked == true){
            // turbo = 50;
            run(50);
        }else{
            // turbo = 250;
            run(250);
        }
    };

    /** Assign event handlers right after page load finishes */
    function loadPage(){
        document.getElementById("start").onclick = clickStart;
        document.getElementById("stop").onclick = clickStop;
        document.getElementById("animation").onchange = selectAnimation;
        document.getElementById("mysize").onchange = changeSize;
        document.getElementById("speed").onchange = changeSpeed;
    }
    window.onload = loadPage;
})();

window.onload = function(){
    var text =  document.getElementById("text");

    document.getElementById("bigger").onclick = biggerDecoration;
    document.getElementById("bling").onchange = bling;
    document.getElementById("lgpay").onclick = lgpay;
}

function bling(){
    if(document.getElementById("bling").checked == true){
        text.style.fontWeight = "bold";
        text.className = "blueText";
        document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    }
    else {
        text.style.fontWeight = "normal";
        text.className = "removeCSS";
        document.body.style.backgroundImage = "none";
    }
}

timer = null;
function biggerDecoration(){
    if(timer === null)
        timer = setInterval(biggerDecorationWithTimer, 500);
    else{
        clearInterval(timer);
        timer = null;
    }
}

function biggerDecorationWithTimer(){
    var fontSize = parseInt(getComputedStyle(text).fontSize);
    fontSize += 2;
    text.style.fontSize = fontSize + "px";
}

function lgpay(){
    var vowels = ["a","e","i","o","u"];
    var word = text.value.replace(/  /g,'').split(" ");
    
    for(let i=0; i<word.length; i++)
    {
        if(vowels.indexOf(word[i].charAt(0).toLowerCase()) != 0){
            word[i].remove(0);
            console.log(word[i]);
        }
    }
    // if(word.substring())
    // if(plain == " ")
    //     console.log("xooson : " + plain);
    // else
    //     console.log("usegtei : " + plain);
}
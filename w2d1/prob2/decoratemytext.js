/*jshint esversion: 6 */
window.onload = function(){
  const btnBig = document.getElementById("idBigger");
  btnBig.onclick = changeFontSize;

  const chkBling = document.getElementById("idBling");
  chkBling.onchange = changeFontStyle;

  const btnMalk = document.getElementById("idMalkovitch");
  btnMalk.onclick = clickMalkovitch;

  const btnIgpay = document.getElementById("idIgpay");
  btnIgpay.onclick = clickIgpay;
}

/**
 * Increases text area font by 2pt
 */
function changeFontSize(){
  let textarea = document.getElementById("idText");
  setInterval(()=>{
    let fontSize = parseInt(getComputedStyle(textarea).fontSize);
    textarea.style.fontSize = (fontSize + 2) + "pt";
  }, 500);
}

/**
 * Change text area style by adding bling class
 * @param {Event} e
 */
function changeFontStyle(e){
  let textarea = document.getElementById("idText"); 
  
  if(e.target.checked){
    textarea.className = "bling";
    document.body.className = "background";
  } else {
    textarea.className = "";
    document.body.className = "";
  }
}

/**
 *  "Malkovitch" button that causes words of >= 5 characters in length to be replaced with the word "Malkovich".
 */
function clickMalkovitch(){
  let textarea = document.getElementById("idText"); 
  const btnMalk = document.getElementById("idMalkovitch");
  let content = textarea.value;
  textarea.value = content.split(" ").reduce((a, b)=> a + " " + (b.length >= 5 ? "Malkovitch" : b), "");
}

/**
 * Handle event when Igpay button clicks
 */
function clickIgpay(){
  let textarea = document.getElementById("idText"); 
  let content = textarea.value.split(" ").map(convertToPigLatin).join(" ");
  textarea.value = content;
}

/**
 * Converts the text to Pig Latin.
 */
function convertToPigLatin(word){
  if(word.trim() === "") return;

  const vowels = ['a', 'e', 'i', 'y', 'o',]
  if (vowels.indexOf(word[0].toLowerCase()) !== -1){
    return word + "yay";
  } else {
    let pigLatin = "";
    for(let i=0; i<word.length; i++){
      if (vowels.indexOf(word[i]) !== -1) {
        return word.substring(i, word.length-1) + pigLatin;
      }
      pigLatin += word[i];
    }
  }

}
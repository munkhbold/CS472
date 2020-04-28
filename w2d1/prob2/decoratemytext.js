window.onload = function(){
  const btnBig = document.getElementById("idBigger");
  btnBig.onclick = changeFontSize;

  const chkBling = document.getElementById("idBling");
  chkBling.onchange = changeFontStyle;

  const btnMalk = document.getElementById("idMalkovitch");
  btnMalk.onclick = clickMalkovitch;
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
window.onload = function(){
  const btnBig = document.getElementById("idBigger");
  btnBig.onclick = changeFontSize;

  const chkBling = document.getElementById("idBling");
  chkBling.onchange = changeFontStyle;
}

function changeFontSize(){
  let textarea = document.getElementById("idText");
  setInterval(()=>{
    let fontSize = parseInt(getComputedStyle(textarea).fontSize);
    textarea.style.fontSize = (fontSize + 2) + "pt";
  }, 500);
}


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
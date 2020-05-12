window.onload = function(){
    document.getElementById("btnHint").onclick = function(event){
        alert(this.value);
        event.preventDefault();
    }
}
function change() {
  document.bgColor = "#eeeeff";
}


/*画像切り替え*/
let situation = true;
function display() {
  if(situation == true) {
    document.getElementById('img').style.display = "none";
    situation = false;
    
  }else {
    document.getElementById('img').style.display = "block";
    situation = true;
  }
}

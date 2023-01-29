function showText1() {
  document.getElementById("text1").style.display = "block";
  document.getElementById("text2").style.display = "none";
  document.getElementById("text3").style.display = "none";
  document.getElementById("btn1").classList.add("show");
  document.getElementById("btn2").classList.remove("show");
  document.getElementById("btn3").classList.remove("show");
}

function showText2() {
  document.getElementById("text1").style.display = "none";
  document.getElementById("text2").style.display = "block";
  document.getElementById("text3").style.display = "none";
  document.getElementById("btn1").classList.remove("show");
  document.getElementById("btn2").classList.add("show");
  document.getElementById("btn3").classList.remove("show");	
}

function showText3() {
  document.getElementById("text1").style.display = "none";
  document.getElementById("text2").style.display = "none";
  document.getElementById("text3").style.display = "block";
  document.getElementById("btn1").classList.remove("show");
  document.getElementById("btn2").classList.remove("show");
  document.getElementById("btn3").classList.add("show");
}
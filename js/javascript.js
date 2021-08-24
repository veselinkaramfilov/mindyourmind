function onClick(element) {
  document.getElementById("modal-img").src = element.src;
  document.getElementById("gallery-modal").style.display = "block";
}

function openTab(tabName, elmnt, color) {
  var i, menucontent, menulinks;
  menucontent = document.getElementsByClassName("menucontent");
  for (i = 0; i < menucontent.length; i++) {
    menucontent[i].style.display = "none";
  }
  menulinks = document.getElementsByClassName("menulink");
  for (i = 0; i < menulinks.length; i++) {
    menulinks[i].style.backgroundColor = "";
  }
  document.getElementById(tabName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
document.getElementById("defaultOpen").click();

function sendMessage(){
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  document.getElementById("hide").style.display = "none"; 
  document.getElementById("span1").innerHTML = name;
  document.getElementById("span2").innerHTML = email;
  document.getElementById("show").style.display = "block";
}

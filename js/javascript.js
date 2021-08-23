function onClick(element) {
  document.getElementById("modal-img").src = element.src;
  document.getElementById("gallery-modal").style.display = "block";
}

function openTab(tabName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
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

/*Adjust Nav Bar Depending on Screen Size*/
function adjustNavBar() {
  var x = document.getElementById("globalNavBar");
  if (x.className === "navBar") {
    x.className += " responsive";
  } 
  else {
    x.className = "navBar";
  }
}